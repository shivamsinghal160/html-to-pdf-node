const downloadHtmlContent = (url) => {
  try {
    return new Promise((resolve, reject) => {
      const https = require("https");
      https.get(url, (response) => {
        let data = "";
        response.on("data", (chunk) => {
          data += chunk;
        });
        response.on("end", () => {
          resolve(data);
        });
        response.on("error", (err) => {
          reject(err);
        });
      });
    });
  } catch (error) {
    throw new Error("Failed to download HTML content: " + error.message);
  }
};

module.exports = downloadHtmlContent;
