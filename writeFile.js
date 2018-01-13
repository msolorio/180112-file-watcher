const fs = require('fs');

function handleError(errorMessage, errorCallback) {
  const error = new Error(errorMessage);
  errorCallback(error.message);
  return;
}

function writeFile(targetFile, message, errorCallback, successCallback) {
  if (!targetFile) {
    return handleError('no target file specified', errorCallback);
  }

  fs.writeFile(targetFile, `${message}\n`, (error) => {
    if (error) {
      handleError(error.message, errorCallback);
    } else {
      const successMessage = `File written with data: ${message}`;
      successCallback(successMessage);
    }
  });
}

const targetFile = process.argv[2];
const message = process.argv[3];

writeFile(targetFile, message, (errorMessage) => {
  console.log("errorMessage:", errorMessage);
}, (successMessage) => {
  console.log("successMessage:", successMessage);
});
