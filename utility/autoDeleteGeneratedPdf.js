const deleteFileByPartialName = require("./deleteFileByPartialName");
const autoDeleteGeneratedPdf = (filePath, uuid, timeInMinutes = 1) => {
  const deleteAfter = timeInMinutes * 60 * 1000; // minute to milliseconds

  console.log(
    `Scheduling auto deletion of file: ${filePath} after ${timeInMinutes} minute`
  );

  setTimeout(() => {
    deleteFileByPartialName(filePath, uuid);
  }, deleteAfter);
};

module.exports = autoDeleteGeneratedPdf;
