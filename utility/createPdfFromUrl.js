const uuid = require("uuid");
const puppeteer = require("puppeteer");

const createPdf = async (htmlContent) => {
  try {
    if (!htmlContent) {
      throw new Error("HTML content is required to generate PDF.");
    }
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Load HTML content
    await page.setContent(htmlContent, {
      waitUntil: "networkidle0",
    });

    let tempName = `${uuid.v4()}.pdf`;
    let filePath = `./public/pdfs/${tempName}`;
    // Generate PDF
    await page.pdf({ path: filePath, format: "A4" });

    await browser.close();
    return {
      message: "PDF generated successfully!",
      fileName: tempName,
    };
  } catch (error) {
    throw new Error("Failed to generate PDF: " + error.message);
  }
};

module.exports = createPdf;
