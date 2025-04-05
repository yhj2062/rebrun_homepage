import { readdirSync, existsSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const portfolioDir = path.join(__dirname, '../public/portfolio');
const outputFile = path.join(__dirname, '../public/portfolio/portfolio_data.json');

// Vite의 base 경로
const baseUrl = 'https://yhj2062.github.io/rebrun_homepage/';

const portfolioList = [];

readdirSync(portfolioDir, { withFileTypes: true }).forEach(dirent => {
  if (dirent.isDirectory()) {
    const folder = dirent.name;
    const folderPath = path.join(portfolioDir, folder);
    const thumbPath = path.join(folderPath, 'thumb.jpg');

    if (existsSync(thumbPath)) {
      const files = readdirSync(folderPath)
        .filter(file => /\.(jpe?g|png)$/i.test(file) && file.toLowerCase() !== 'thumb.jpg')
        .sort();

      const place = folder.split('_').slice(0, 2).join('_');
      const title = folder.replace(/_/g, ' ');

      portfolioList.push({
        id: folder,
        title,
        folder,
        thumb: `${baseUrl}portfolio/${folder}/thumb.jpg`,
        place,
        images: files.map(name => `${baseUrl}portfolio/${folder}/${name}`)
      });
    }
  }
});

writeFileSync(outputFile, JSON.stringify(portfolioList, null, 2), 'utf8');
console.log(`✅ portfolio_data.json 생성 완료 (${portfolioList.length}개 항목)`);
