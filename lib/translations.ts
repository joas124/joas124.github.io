import fs from 'fs'
import path from 'path'

export function getTranslation(locale: string) {
  const filePath = path.resolve(process.cwd(), `./public/locales/${locale}/common.json`);
  const json = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(json);
}
