import https from 'https';
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imageUrls = {
  hero: {
    'recruitment-hero.webp':
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&q=80'
  },
  services: {
    'international.webp': 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
    'local.webp': 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&q=80',
    'cv.webp': 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=800&q=80',
    'counseling.webp': 'https://images.unsplash.com/photo-1557425493-6f90ae4659fc?w=800&q=80'
  },
  team: {
    'jane.webp': 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80',
    'erick.webp': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    'waithera.webp': 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80',
    'susan.webp': 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80'
  },
  testimonials: {
    'mohammed.webp': 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80',
    'sarah.webp': 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80',
    'abdullah.webp': 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=200&q=80',
    'grace.webp': 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=200&q=80'
  }
};

async function downloadAndOptimizeImage(url, outputPath) {
  return new Promise((resolve, reject) => {
    https
      .get(url, (response) => {
        const chunks = [];
        response.on('data', (chunk) => chunks.push(chunk));
        response.on('end', async () => {
          const buffer = Buffer.concat(chunks);
          try {
            await sharp(buffer).webp({ quality: 80 }).toFile(outputPath);
            console.log(`✓ Downloaded and optimized: ${outputPath}`);
            resolve();
          } catch (err) {
            reject(err);
          }
        });
      })
      .on('error', reject);
  });
}

async function downloadAllImages() {
  const staticDir = path.join(__dirname, '..', 'static', 'images');

  for (const [category, images] of Object.entries(imageUrls)) {
    const categoryDir = path.join(staticDir, category);
    if (!fs.existsSync(categoryDir)) {
      fs.mkdirSync(categoryDir, { recursive: true });
    }

    for (const [filename, url] of Object.entries(images)) {
      const outputPath = path.join(categoryDir, filename);
      try {
        await downloadAndOptimizeImage(url, outputPath);
      } catch (err) {
        console.error(`Error downloading ${filename}:`, err);
      }
    }
  }
}

downloadAllImages().catch(console.error);
