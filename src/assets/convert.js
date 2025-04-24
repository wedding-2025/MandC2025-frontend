import sharp from "sharp";
import fs from "fs-extra";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const baseFolder = path.join(__dirname, 'img');
const outputFolder = path.join(__dirname, 'img');

async function convertImages() {
  try {
    await fs.ensureDir(outputFolder); // Ensure the output folder exists
    let totalConverted = 0; // Initialize a counter for converted images

    const files = await fs.readdir(baseFolder);
    console.log(`Processing images (${files.length} files found)`);

    for (const file of files) {
      const ext = path.extname(file).toLowerCase(); // Get the file extension

      if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
        const baseName = path.basename(file, ext);
        const inputPath = path.join(baseFolder, file);
        const outputPath = path.join(outputFolder, `${baseName}.webp`);

        // Convert to WebP without resizing, preserving quality, removing metadata
        await sharp(inputPath)
          .toFormat('webp')
          .withMetadata(false) // Remove all metadata
          .toFile(outputPath) // Save the converted image
          .then(() => {
            totalConverted++;
            console.log(`✓ Converted: ${file} -> ${baseName}.webp`);
          })
          .catch(err => console.error(`Error processing ${file}:`, err));
      }
    }

    console.log(`\nConversion complete! ${totalConverted} images processed.`);
  } catch (err) {
    console.error("Error during conversion:", err);
  }
}

convertImages();