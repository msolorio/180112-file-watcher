const fs = require('fs');

function handleError(errorMessage, errorCallback) {
  const error = new Error(errorMessage);
  errorCallback(error.message);
  return;
}

function readFile(filename, errorCallback, successCallback) {

  if (!filename) {
    return handleError('no file was specified', errorCallback);
  }

  fs.readFile(filename, (error, data) => {
    if (error) {
      return handleError('no data for file specified', errorCallback);
    }

    successCallback(data.toString());
  });
}

const filename = process.argv[2];

readFile(filename, (errorMessage) => {
  console.log("errorMessage:", errorMessage);
}, (dataString) => {
  console.log("dataString:", dataString);
});
