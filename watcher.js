'use strict';

const fs = require('fs');
const spawn = require('child_process').spawn;

// function watchFile(filename) {
//   try {
//     if (!filename) {
//       throw new Error('No file to watch specified');
//     }
//
//     try {
//       fs.watch(filename, () => {
//         let ls = spawn('ls', ['-lh', filename]);
//         ls.stdout.pipe(process.stdout);
//       });
//     } catch(error) {
//       throw new Error(`File ${filename} does not exist`);
//     }
//
//     console.log(`Awaiting changes on ${filename}`);
//   }
//   catch(error) {
//     console.error(`Error: ${error.message}`);
//   }
// }

function watchFile(filename) {
  try {
    if (!filename) {
      throw new Error('No file was specified');
    }

    try {
      fs.watch(filename, () => {
        let lsChildProcess = spawn('ls', ['-lh', filename]);
        let output = '';

        lsChildProcess.stdout.on('data', (data) => {
          output += data.toString();
        });

        lsChildProcess.on('close', () => {
          let outputArray = output.split(/\s+/);

          console.log([outputArray[0], outputArray[4], outputArray[8]]);
        });
      });
    } catch(error) {
      throw new Error(error.message);
    }

  } catch(error) {
    console.error(error.message);
  }
}

const filename = process.argv[2];

watchFile(filename);
