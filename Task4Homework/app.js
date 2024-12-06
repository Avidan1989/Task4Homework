//BAR COHEN AND AVIDAN SALUMI

// This script reads text files numbered 1.txt to 10.txt from a specified directory, processes their content by extracting up to 'i' lines from each file (where 'i' is the file number), and combines these lines into a single output. The processed text is then written to an output file named 'output.txt' in the same directory. 

const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, '/text');

let textOut = '';

for (let i = 1; i <= 10; i++) {
  const filePath = path.join(dirPath, `${i}.txt`);
    const textIn = fs.readFileSync(filePath, 'utf-8');
    const lines = textIn.split('\r\n');

    for (let j = 0; j < i && j < lines.length; j++) {
      const words = lines[j].split(' ');
      textOut += words.join(' ') + '\n';
    }
    
}

const outputFilePath = path.join(dirPath, 'output.txt');
fs.writeFileSync(outputFilePath, textOut, 'utf-8');
console.log(`Processed text written to: ${outputFilePath}`);
