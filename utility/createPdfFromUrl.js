const uuid = require("uuid");
const puppeteer = require("puppeteer");
const path = require("path");
const createFileFolder = require("./createFileFolder.js");
const autoDeleteGeneratedPdf = require("./autoDeleteGeneratedPdf.js");

const createPdf = async (htmlContent, autoDelete) => {
  try {
    if (!htmlContent) {
      throw new Error("HTML content is required to generate PDF.");
    }
    const browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();

    // Load HTML content
    await page.setContent(htmlContent, {
      waitUntil: "networkidle0",
    });
    let uniqId = uuid.v4();
    console.log(`Generating PDF with UUID: ${uniqId}`);
    let tempName = `${uniqId}.pdf`;
    let filePath = `../public/pdfs`;

    // Ensure the directory exists
    await createFileFolder(filePath, "folder");

    filePath = path.resolve(__dirname, filePath);

    // Generate PDF
    await page.pdf({ path: `${filePath}/${tempName}`, format: "A4" });

    await browser.close();

    if (autoDelete) {
      // auto delete the generated PDF after 1 minute
      autoDeleteGeneratedPdf(`${filePath}`, uniqId, 1);
    }

    return {
      uuid: uniqId,
      message: "PDF generated successfully!",
      fileName: tempName,
    };
  } catch (error) {
    throw new Error("Failed to generate PDF: " + error.message);
  }
};

module.exports = createPdf;
