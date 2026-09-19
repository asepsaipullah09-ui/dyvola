const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const imgPath = path.join(__dirname, 'public/images/logo/dyvola-horizontal.png');
const buffer = fs.readFileSync(imgPath);

// Parse PNG chunks
let pos = 8;
let width = 0;
let height = 0;
let bitDepth = 0;
let colorType = 0;
let compression = 0;
let filter = 0;
let interlace = 0;
let idatChunks = [];

while (pos < buffer.length) {
  const length = buffer.readUInt32BE(pos);
  const type = buffer.toString('ascii', pos + 4, pos + 8);
  const data = buffer.slice(pos + 8, pos + 8 + length);
  pos += 12 + length;

  if (type === 'IHDR') {
    width = data.readUInt32BE(0);
    height = data.readUInt32BE(4);
    bitDepth = data[8];
    colorType = data[9];
    compression = data[10];
    filter = data[11];
    interlace = data[12];
  } else if (type === 'IDAT') {
    idatChunks.push(data);
  }
}

console.log(`PNG Parsed: ${width}x${height}, colorType=${colorType}, bitDepth=${bitDepth}`);

// Uncompress IDAT data
const compressed = Buffer.concat(idatChunks);
const decompressed = zlib.inflateSync(compressed);

// Unfilter PNG RGBA data
const bytesPerPixel = colorType === 6 ? 4 : (colorType === 2 ? 3 : 4);
const stride = 1 + width * bytesPerPixel;
const pixels = Buffer.alloc(width * height * 4);

let rawOffset = 0;
let prevLine = Buffer.alloc(width * 4);

for (let y = 0; y < height; y++) {
  const filterType = decompressed[rawOffset++];
  const currentLine = Buffer.alloc(width * 4);

  for (let x = 0; x < width; x++) {
    const rawIdx = x * bytesPerPixel;
    let r = 0, g = 0, b = 0, a = 255;

    if (colorType === 6) {
      r = decompressed[rawOffset + rawIdx];
      g = decompressed[rawOffset + rawIdx + 1];
      b = decompressed[rawOffset + rawIdx + 2];
      a = decompressed[rawOffset + rawIdx + 3];
    } else if (colorType === 2) {
      r = decompressed[rawOffset + rawIdx];
      g = decompressed[rawOffset + rawIdx + 1];
      b = decompressed[rawOffset + rawIdx + 2];
      a = 255;
    }

    // Apply PNG un-filtering if needed
    if (filterType === 1) { // Sub
      if (x > 0) {
        r = (r + currentLine[(x - 1) * 4]) & 0xff;
        g = (g + currentLine[(x - 1) * 4 + 1]) & 0xff;
        b = (b + currentLine[(x - 1) * 4 + 2]) & 0xff;
        a = (a + currentLine[(x - 1) * 4 + 3]) & 0xff;
      }
    } else if (filterType === 2) { // Up
      r = (r + prevLine[x * 4]) & 0xff;
      g = (g + prevLine[x * 4 + 1]) & 0xff;
      b = (b + prevLine[x * 4 + 2]) & 0xff;
      a = (a + prevLine[x * 4 + 3]) & 0xff;
    } else if (filterType === 3) { // Average
      const leftR = x > 0 ? currentLine[(x - 1) * 4] : 0;
      const leftG = x > 0 ? currentLine[(x - 1) * 4 + 1] : 0;
      const leftB = x > 0 ? currentLine[(x - 1) * 4 + 2] : 0;
      const leftA = x > 0 ? currentLine[(x - 1) * 4 + 3] : 0;
      const upR = prevLine[x * 4];
      const upG = prevLine[x * 4 + 1];
      const upB = prevLine[x * 4 + 2];
      const upA = prevLine[x * 4 + 3];

      r = (r + Math.floor((leftR + upR) / 2)) & 0xff;
      g = (g + Math.floor((leftG + upG) / 2)) & 0xff;
      b = (b + Math.floor((leftB + upB) / 2)) & 0xff;
      a = (a + Math.floor((leftA + upA) / 2)) & 0xff;
    } else if (filterType === 4) { // Paeth
      const p = (a1, b1, c1) => {
        const p1 = a1 + b1 - c1;
        const pa = Math.abs(p1 - a1);
        const pb = Math.abs(p1 - b1);
        const pc = Math.abs(p1 - c1);
        if (pa <= pb && pa <= pc) return a1;
        if (pb <= pc) return b1;
        return c1;
      };
      const leftR = x > 0 ? currentLine[(x - 1) * 4] : 0;
      const leftG = x > 0 ? currentLine[(x - 1) * 4 + 1] : 0;
      const leftB = x > 0 ? currentLine[(x - 1) * 4 + 2] : 0;
      const leftA = x > 0 ? currentLine[(x - 1) * 4 + 3] : 0;
      const upR = prevLine[x * 4];
      const upG = prevLine[x * 4 + 1];
      const upB = prevLine[x * 4 + 2];
      const upA = prevLine[x * 4 + 3];
      const upLeftR = x > 0 ? prevLine[(x - 1) * 4] : 0;
      const upLeftG = x > 0 ? prevLine[(x - 1) * 4 + 1] : 0;
      const upLeftB = x > 0 ? prevLine[(x - 1) * 4 + 2] : 0;
      const upLeftA = x > 0 ? prevLine[(x - 1) * 4 + 3] : 0;

      r = (r + p(leftR, upR, upLeftR)) & 0xff;
      g = (g + p(leftG, upG, upLeftG)) & 0xff;
      b = (b + p(leftB, upB, upLeftB)) & 0xff;
      a = (a + p(leftA, upA, upLeftA)) & 0xff;
    }

    currentLine[x * 4] = r;
    currentLine[x * 4 + 1] = g;
    currentLine[x * 4 + 2] = b;
    currentLine[x * 4 + 3] = a;

    const dstIdx = (y * width + x) * 4;
    pixels[dstIdx] = r;
    pixels[dstIdx + 1] = g;
    pixels[dstIdx + 2] = b;
    pixels[dstIdx + 3] = a;
  }

  rawOffset += width * bytesPerPixel;
  prevLine = currentLine;
}

// Find bounding box of non-background pixels (dark logo mark pixels: Deep Charcoal #242326 & Muted Burgundy #6E2C3A)
let minX = width, minY = height, maxX = 0, maxY = 0;
let nonBgCount = 0;

for (let y = 0; y < height; y++) {
  for (let x = 0; x < width; x++) {
    const idx = (y * width + x) * 4;
    const r = pixels[idx];
    const g = pixels[idx + 1];
    const b = pixels[idx + 2];
    const a = pixels[idx + 3];

    // Check if pixel is background (white / warm ivory / off-white / light neutral / transparent)
    // Warm Ivory is RGB(247, 243, 236). Off-white is RGB > 210, 200, 190.
    const isLightBackground = r > 180 && g > 170 && b > 160;
    const isTransparent = a < 50;

    if (!isLightBackground && !isTransparent) {
      nonBgCount++;
      if (x < minX) minX = x;
      if (x > maxX) maxX = x;
      if (y < minY) minY = y;
      if (y > maxY) maxY = y;
    }
  }
}

console.log(`Bounding Box of DYVOLA Mark: minX=${minX}, minY=${minY}, maxX=${maxX}, maxY=${maxY}`);
console.log(`Crop Dimensions: ${maxX - minX + 1} x ${maxY - minY + 1} (Original: ${width}x${height})`);
