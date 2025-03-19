import { ContactServiceImpl } from '@/domain/services/contacts/ContactServiceImpl';
import { ContactRepositoryImpl } from '@/infrastructure/repositories/ContactRepositoryImpl';
import { Model } from 'mongoose';
import xlsx from 'xlsx';


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

export const processXLSX = async (filePath?: string) => {
  return new Promise<unknown>(async (resolve, reject) => {

    if (!filePath) {
      return reject(new Error('File path is undefined'));
    }

    const workbook = xlsx.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const contatos: any = xlsx.utils.sheet_to_json(sheet, {header: 1});

    const contactRepository = new ContactRepositoryImpl(Model);
    const contactService = new ContactServiceImpl(contactRepository);

    const structuredData = transformToStructuredJson(contatos);

    try {
      const results = await Promise.all(
        structuredData.map(async (contactData: any) => {
          try {
            const newContact: any = await contactService.save(contactData);
            return {
              success: true,
              id: newContact._id,
              title: contactData.name,
            };
          } catch (error: any) {
            return {
              success: false,
              error: error.message,
              title: contactData.name,
            };
          }
        })
      );

      resolve({
        total: structuredData.length,
        saved: results.filter((r) => r.success).length,
        failed: results.filter((r) => !r.success).length,
        details: results,
      });
    } catch (error) {
      reject(error);
    }
  });
}



// Middleware para processar o arquivo
// export const processUpload = async (req: any, res: any, next: any) => {
//   try {
//     if (!req.file) {
//       throw new Error('Nenhum arquivo enviado');
//     }

//     // Processa o buffer do arquivo
//     const dados = await processCSV(req.file.buffer);

//     // Valida os dados se necessário
//     if (dados.length === 0) {
//       throw new Error('CSV vazio');
//     }

//     // Adiciona os dados processados ao request
//     const results = await Promise.all(
//       dados.map(async (contact) => {
//         try {
//           const newContact = new contact(contact);
//           await newContact.save();
//           return {
//             success: true,
//             id: newContact._id,
//             title: contact.title
//           };
//         } catch (error: any) {
//           return {
//             success: false,
//             error: error.message,
//             title: contact.title
//           };
//         }
//       })
//     );

//     // Adiciona resultados ao request
//     req.processedData = {
//       total: dados.length,
//       saved: results.filter(r => r.success).length,
//       failed: results.filter(r => !r.success).length,
//       details: results
//     };

//     next();
//   } catch (error) {
//     next(error);
//   }
// };