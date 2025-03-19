import fs from 'fs';

export const processJSON = (filePath?: string) => {
  return new Promise<unknown>((resolve, reject) => {
    if (!filePath) {
      reject;
      return reject(new Error('File path is undefined'));
    }

    const data = fs.readFileSync(filePath, 'utf-8');
    const contatos = JSON.parse(data);

    for (const ctt of contatos) {
      console.log('cnt', ctt);
    }

    resolve
  })
}