const fs = require("fs");
const path = require("path");

createFileFolder = (filePath, type = "file") => {
  try {
    return new Promise((resolve, reject) => {
      filePath = path.resolve(__dirname, filePath);
      if (type === "folder") {
        // Ensure the directory exists
        if (!fs.existsSync(filePath)) {
          fs.mkdir(filePath, { recursive: true }, (err) => {
            if (err) {
              console.error(`Could not create directory ${filePath}:`, err);
              reject(err);
            } else {
              console.log(`Directory created: ${filePath}`);
              resolve();
            }
          });
        } else {
          console.log(`Directory already exists: ${filePath}`);
          resolve();
        }
      } else {
        // Ensure the file exists
        if (!fs.existsSync(filePath)) {
          fs.writeFile(filePath, "", (err) => {
            if (err) {
              console.error(`Could not create file ${filePath}:`, err);
              reject(err);
            } else {
              console.log(`File created: ${filePath}`);
              resolve();
            }
          });
        } else {
          console.log(`File already exists: ${filePath}`);
          resolve();
        }
      }
    });
  } catch (error) {
    throw new Error(`Failed to create ${type}: ${error.message}`);
  }
};

module.exports = createFileFolder;
