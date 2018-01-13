const fs = require('fs');

function readFile(filename) {
  return new Promise((resolve, reject) => {
    if (!filename) {
      const newError = new Error('there was no file specified');
      reject(newError);
    }

    fs.readFile(filename, (err, data) => {
      if (err) {
        const newError = new Error('there was an error reading the file');
        reject(newError);
      } else {
        resolve(data.toString());
      }
    });
  });
}

const filename = process.argv[2];

readFile(filename)
  .then((data) => {
    console.log("data:", data);
  })
  .catch((error) => {
    console.error("error.message:", error.message);
  });
