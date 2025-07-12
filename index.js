require("dotenv").config();
const express = require("express");
const cors = require("cors");
const downloadHtmlContent = require("./utility/downloadHtmlContent.js");
const createPdf = require("./utility/createPdfFromUrl.js");
const deleteFilesByPartialName = require("./utility/deleteFileByPartialName.js");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// serve static files from the "public" directory
app.use(express.static("public"));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the PDF Generator!");
});

app.use((req, res, next) => {
  // check authorization header
  const authHeader = req.headers.authorization;
  if (!authHeader || authHeader !== `Bearer ${process.env.AUTH_TOKEN}`) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
});

app.post("/generate-pdf", async (req, res) => {
  try {
    let htmlContent = req.body.html ?? "";
    if (htmlContent == "") {
      const url = req.body.url;
      if (!url) {
        return res.status(400).send("URL or HTML content is required.");
      }
      htmlContent = await downloadHtmlContent(url);
    }
    const pdfResponse = await createPdf(htmlContent);
    res.status(200).json({
      uuid: pdfResponse.fileName,
      message: pdfResponse.message,
      file: `${process.env.GLOBAL_URL}/pdfs/${pdfResponse.fileName}`,
    });
  } catch (error) {
    console.error("Error generating PDF:", error);
    res.status(500).json({
      message: "Error generating PDF",
      error: error.message,
    });
  }
});

app.delete("/delete-pdf", (req, res) => {
  const { uuid } = req.body;
  if (!uuid) {
    return res.status(400).send("Name part is required.");
  }
  deleteFilesByPartialName("./public/pdfs", uuid);
  res.status(200).json({
    message: `Files containing "${uuid}" in our directories are being deleted.`,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT : ${PORT}`);
});
