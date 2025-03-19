// import multer from 'multer';
// import { CSVProcessor } from '../domain/services/processors/CSVProcessor';
// import { FileProcessor } from '../interfaces/FileProcessor';
// import Contact from '../models/contacts';

// export const upload = multer({
//   storage: multer.memoryStorage(),
//   limits: {},
//   fileFilter: (req, file, cb) => {
//     const processor = getProcessor(file.mimetype);
//     if (!processor) {
//       cb(null, false);
//       return;
//     }
//     cb(null, true);
//   }
// });

// const processors: FileProcessor[] = [
//   new CSVProcessor(),
// ];

// const getProcessor = (mimetype: string): FileProcessor | null => {
//   return processors.find(p => p.canProcess(mimetype)) || null;
// };

// export const processUpload = async (req: any, res: any, next: any) => {
//   try {
//     if (!req.file) {
//       throw new Error('Nenhum arquivo enviado');
//     }

//     const processor = getProcessor(req.file.mimetype);
//     if (!processor) {
//       throw new Error('Tipo de arquivo não suportado');
//     }

//     const dados = await processor.process(req.file.buffer);
//     if (dados.length === 0) {
//       throw new Error('Arquivo vazio');
//     }

//     const results = await Promise.allSettled(
//       dados.map(contactData =>
//         new Contact(contactData).save()
//           .then(doc => ({
//             success: true,
//             id: doc._id,
//             title: contactData.title || contactData.nome || contactData.name
//           }))
//           .catch(error => ({
//             success: false,
//             error: error.message,
//             data: contactData
//           }))
//       )
//     );

//     req.processedData = {
//       total: dados.length,
//       saved: results.filter(r => r.status === 'fulfilled' && (r as any).value.success).length,
//       failed: results.filter(r => r.status === 'rejected' || !(r as any).value.success).length,
//       details: results.map(r => r.status === 'fulfilled' ? (r as any).value : (r as any).reason)
//     };

//     next();
//   } catch (error) {
//     next(error);
//   }
// };