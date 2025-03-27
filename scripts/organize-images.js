import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define source and destination directories
const sourceDir = path.join(__dirname, '..', 'static', 'images');
const destDir = path.join(__dirname, '..', 'src', 'lib', 'assets', 'images');

// Create destination directories
const categories = ['hero', 'services', 'team', 'testimonials'];
categories.forEach((category) => {
  const dir = path.join(destDir, category);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Copy files from source to destination
categories.forEach((category) => {
  const sourceCategoryDir = path.join(sourceDir, category);
  const destCategoryDir = path.join(destDir, category);

  if (fs.existsSync(sourceCategoryDir)) {
    const files = fs.readdirSync(sourceCategoryDir);
    files.forEach((file) => {
      const sourceFile = path.join(sourceCategoryDir, file);
      const destFile = path.join(destCategoryDir, file);
      fs.copyFileSync(sourceFile, destFile);
      console.log(`✓ Copied ${file} to ${destCategoryDir}`);
    });
  }
});
