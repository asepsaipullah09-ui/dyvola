const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const imgPath = path.join(__dirname, 'public/images/logo/dyvola-horizontal.png');
const buffer = fs.readFileSync(imgPath);

// Parse PNG
let pos = 8;
let width = 0, height = 0, bitDepth = 0, colorType = 0;
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
  } else if (type === 'IDAT') {
    idatChunks.push(data);
  }
}

const decompressed = zlib.inflateSync(Buffer.concat(idatChunks));
const bytesPerPixel = colorType === 6 ? 4 : 3;
const pixels = Buffer.alloc(width * height * 4);

let rawOffset = 0;
let prevLine = Buffer.alloc(width * 4);

for (let y = 0; y < height; y++) {
  const filterType = decompressed[rawOffset++];
  const currentLine = Buffer.alloc(width * 4);

  for (let x = 0; x < width; x++) {
    const rawIdx = x * bytesPerPixel;
    let r = decompressed[rawOffset + rawIdx];
    let g = decompressed[rawOffset + rawIdx + 1];
    let b = decompressed[rawOffset + rawIdx + 2];
    let a = colorType === 6 ? decompressed[rawOffset + rawIdx + 3] : 255;

    if (filterType === 1 && x > 0) {
      r = (r + currentLine[(x - 1) * 4]) & 0xff;
      g = (g + currentLine[(x - 1) * 4 + 1]) & 0xff;
      b = (b + currentLine[(x - 1) * 4 + 2]) & 0xff;
      a = (a + currentLine[(x - 1) * 4 + 3]) & 0xff;
    } else if (filterType === 2) {
      r = (r + prevLine[x * 4]) & 0xff;
      g = (g + prevLine[x * 4 + 1]) & 0xff;
      b = (b + prevLine[x * 4 + 2]) & 0xff;
      a = (a + prevLine[x * 4 + 3]) & 0xff;
    } else if (filterType === 3) {
      const leftR = x > 0 ? currentLine[(x - 1) * 4] : 0;
      const leftG = x > 0 ? currentLine[(x - 1) * 4 + 1] : 0;
      const leftB = x > 0 ? currentLine[(x - 1) * 4 + 2] : 0;
      const leftA = x > 0 ? currentLine[(x - 1) * 4 + 3] : 0;
      r = (r + Math.floor((leftR + prevLine[x * 4]) / 2)) & 0xff;
      g = (g + Math.floor((leftG + prevLine[x * 4 + 1]) / 2)) & 0xff;
      b = (b + Math.floor((leftB + prevLine[x * 4 + 2]) / 2)) & 0xff;
      a = (a + Math.floor((leftA + prevLine[x * 4 + 3]) / 2)) & 0xff;
    } else if (filterType === 4) {
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

// Bounding box: minX=43, minY=50, maxX=472, maxY=147
const pad = 2; // tiny 2px breathing padding
const minX = Math.max(0, 43 - pad);
const minY = Math.max(0, 50 - pad);
const maxX = Math.min(width - 1, 472 + pad);
const maxY = Math.min(height - 1, 147 + pad);

const cropW = maxX - minX + 1; // ~434
const cropH = maxY - minY + 1; // ~102

console.log(`Cropping to ${cropW} x ${cropH}...`);

// Background color of source image canvas is Warm Ivory #F7F3EC (RGB 247, 243, 236)
const bgR = 247, bgG = 243, bgB = 236;

const croppedPixels = Buffer.alloc(cropW * cropH * 4);

for (let y = 0; y < cropH; y++) {
  for (let x = 0; x < cropW; x++) {
    const srcX = minX + x;
    const srcY = minY + y;
    const srcIdx = (srcY * width + srcX) * 4;
    const dstIdx = (y * cropW + x) * 4;

    const r = pixels[srcIdx];
    const g = pixels[srcIdx + 1];
    const b = pixels[srcIdx + 2];
    let a = pixels[srcIdx + 3];

    // Compute distance from light background color
    // Luminance / lightness calculation
    const dist = Math.max(
      Math.abs(r - bgR),
      Math.abs(g - bgG),
      Math.abs(b - bgB)
    );

    // If pixel is background or near-background, make transparent
    if (dist < 22 && r > 200 && g > 195 && b > 185) {
      a = 0;
    } else if (dist < 60 && r > 160) {
      // Smooth anti-aliased edge transition
      const alphaFactor = Math.min(1, (60 - dist) / 38);
      a = Math.round(255 * (1 - alphaFactor));
    }

    croppedPixels[dstIdx] = r;
    croppedPixels[dstIdx + 1] = g;
    croppedPixels[dstIdx + 2] = b;
    croppedPixels[dstIdx + 3] = a;
  }
}

// Function to encode uncompressed PNG
function createPng(w, h, rgbaBuffer) {
  // Unfiltered scanlines: 1 byte filter type (0) + w * 4 bytes
  const scanlineLength = 1 + w * 4;
  const rawData = Buffer.alloc(h * scanlineLength);

  for (let y = 0; y < h; y++) {
    rawData[y * scanlineLength] = 0; // Filter type 0 (None)
    for (let x = 0; x < w; x++) {
      const srcOffset = (y * w + x) * 4;
      const dstOffset = y * scanlineLength + 1 + x * 4;
      rawData[dstOffset] = rgbaBuffer[srcOffset];
      rawData[dstOffset + 1] = rgbaBuffer[srcOffset + 1];
      rawData[dstOffset + 2] = rgbaBuffer[srcOffset + 2];
      rawData[dstOffset + 3] = rgbaBuffer[srcOffset + 3];
    }
  }

  const compressedData = zlib.deflateSync(rawData, { level: 9 });

  // PNG Helper functions
  const makeChunk = (type, data) => {
    const lenBuf = Buffer.alloc(4);
    lenBuf.writeUInt32BE(data.length, 0);
    const typeBuf = Buffer.from(type, 'ascii');
    const typeAndData = Buffer.concat([typeBuf, data]);
    const crc = crc32(typeAndData);
    const crcBuf = Buffer.alloc(4);
    crcBuf.writeUInt32BE(crc, 0);
    return Buffer.concat([lenBuf, typeAndData, crcBuf]);
  };

  // Standard CRC32 calculation
  function crc32(buf) {
    let table = new Uint32Array(256);
    for (let i = 0; i < 256; i++) {
      let c = i;
      for (let j = 0; j < 8; j++) {
        c = (c & 1) ? (0xedb88320 ^ (c >>> 1)) : (c >>> 1);
      }
      table[i] = c;
    }
    let crc = 0xffffffff;
    for (let i = 0; i < buf.length; i++) {
      crc = table[(crc ^ buf[i]) & 0xff] ^ (crc >>> 8);
    }
    return (crc ^ 0xffffffff) >>> 0;
  }

  // Header: 8 bytes
  const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

  // IHDR data: width (4), height (4), depth (1), colorType (1), compression (1), filter (1), interlace (1)
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(w, 0);
  ihdrData.writeUInt32BE(h, 4);
  ihdrData[8] = 8; // bit depth
  ihdrData[9] = 6; // color type RGBA
  ihdrData[10] = 0; // compression
  ihdrData[11] = 0; // filter
  ihdrData[12] = 0; // interlace

  const ihdrChunk = makeChunk('IHDR', ihdrData);
  const idatChunk = makeChunk('IDAT', compressedData);
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

const cleanPngBuffer = createPng(cropW, cropH, croppedPixels);
fs.writeFileSync(imgPath, cleanPngBuffer);
console.log(`Successfully saved clean transparent logo to ${imgPath}! Output size: ${cleanPngBuffer.length} bytes.`);
