const fs = require('fs');

function watchFile(filename) {
  try {
    if (!filename) {
      throw new Error('No file to watch specified');
    }

    try {
      fs.watch(filename, () => {
        console.log(`File ${filename} has changed`);
      });
    } catch(error) {
      throw new Error(`File ${filename} does not exist`);
    }

    console.log(`Awaiting changes on ${filename}`);
  }
  catch(error) {
    console.error(`Error: ${error.message}`);
  }
}

const filename = process.argv[2];

watchFile(filename);
