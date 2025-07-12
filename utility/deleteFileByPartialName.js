const fs = require("fs");
const path = require("path");

function deleteFilesByPartialName(directoryPath, namePart) {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      console.error("Could not read the directory:", err);
      return;
    }

    files.forEach((file) => {
      const filePath = path.join(directoryPath, file);
      // Skip if it's not existing file
      if (!fs.existsSync(filePath)) {
        console.log(`File ${file} does not exist, skipping deletion.`);
        return;
      }

      // Check if the filename includes the specified part
      if (file.includes(namePart)) {
        fs.unlink(filePath, (err) => {
          if (err) {
            console.error(`Could not delete file ${file}:`, err);
          } else {
            console.log(`Deleted file: ${file}`);
          }
        });
      }
    });
  });
}

module.exports = deleteFilesByPartialName;
