const fs = require('fs');
const path = require('path');

const imgPath = path.join(__dirname, 'public/images/logo/dyvola-horizontal.png');
const buffer = fs.readFileSync(imgPath);

console.log('File size:', buffer.length);
console.log('PNG Header check:', buffer.slice(0, 8).toString('hex'));

// Read PNG IHDR chunk for dimensions
const width = buffer.readUInt32BE(16);
const height = buffer.readUInt32BE(20);
const colorType = buffer[25];
console.log('Dimensions:', width, 'x', height, 'ColorType:', colorType);
