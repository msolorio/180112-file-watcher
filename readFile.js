const fs = require('fs');

function readFile(filename, failureCallback, successCallback) {
  if (!filename) {
    const newError = new Error('there was no file specified');
    failureCallback(newError);
  }

  fs.readFile(filename, (err, data) => {
    if (err) {
      const newError = new Error('there was an error reading the file');
      failureCallback(newError);
    } else {
      successCallback(data.toString());
    }
  });
}

const filename = process.argv[2];

readFile(filename, (error) => {
  console.log("error.message:", error.message);
}, (data) => {
  console.log("data:", data);
});
