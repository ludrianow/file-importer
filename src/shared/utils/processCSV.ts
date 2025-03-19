import csvParser from 'csv-parser';
import fs from 'fs';

const parseValue = (value: any) => {
  if (value === 'true') return true;
  if (value === 'false') return false;
  if (value === '' || value === undefined) return null; // Se vazio ou indefinido, retorna null
  return value; // Caso contrário, retorna o valor como string
};

const setNestedValue = (obj:any, path:any, value:any) => {
  let current = obj;

  path.forEach((key:any, index:number) => {
    const isLast = index === path.length - 1;
    const nextKey = path[index + 1];
    const isNextKeyNumber = !isNaN(nextKey);

    if (!isLast) {
      // Se a chave for um número, cria um array
      if (!isNaN(key)) {
        key = parseInt(key, 10);
        if (!Array.isArray(current)) {
          current = [];
        }
        if (!current[key]) {
          current[key] = isNextKeyNumber ? [] : {};
        }
      } else {
        if (!current[key]) {
          current[key] = isNextKeyNumber ? [] : {};
        }
      }
      current = current[key]; // Avança para o próximo nível
    } else {
      // Último nível -> Define o valor
      if (!isNaN(key)) {
        key = parseInt(key, 10);
        if (!Array.isArray(current)) {
          current = [];
        }
        current[key] = value;
      } else {
        current[key] = value;
      }
    }
  });
};

const cleanNullArrays: any = (obj:any) => {
  if (Array.isArray(obj)) {
    const cleanedArray = obj.map(cleanNullArrays).filter((item) => item !== null);
    return cleanedArray.length > 0 ? cleanedArray : [];
  } else if (typeof obj === 'object' && obj !== null) {
    Object.keys(obj).forEach((key) => {
      obj[key] = cleanNullArrays(obj[key]);
    });
  }
  return obj;
};

const transformToStructuredJson = (data: any[]) => {
  const headers = data[0]; // Cabeçalho da planilha
  let resultArray: any[] = [];

  // Percorre cada linha de dados
  data.slice(1).forEach((row) => {
    let result = {};

    headers.forEach((header:any, index:number) => {
      const path = header.split('/'); // Divide por "/"
      const value = parseValue(row[index]);
      setNestedValue(result, path, value);
    });

    resultArray.push(cleanNullArrays(result));
  });

  return resultArray;
};

export const processCSV = async (filePath?: string) => {
  return new Promise<void>((resolve, reject) => {
    if (!filePath) {
      return reject(new Error('File path is undefined'));
    }
    const readStream = fs.createReadStream(filePath).pipe(csvParser());

    readStream.on('data', (row) => {
      console.log('data', transformToStructuredJson(row))
    });

    readStream.on('end', resolve)
    readStream.on('error', reject);
  });
};