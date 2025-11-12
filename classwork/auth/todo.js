const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
  .name('counter')
  .description('CLI to do file based tasks')
  .version('0.8.0');

program.command('add')
  .description('Count the number of lines in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
    fs.writeFile(file, 'your name is asmit', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        // const lines = data.split('\n').length;
        console.log(`The  lines are written in ${file}`);
      }
    });
  });

program.parse();

// Input - node index.js /Users/kirat/file.txt
// Output - You have 10 words in this file