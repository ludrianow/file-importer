import { processXLSX } from '@/shared/utils/processXLSX';
import { Request, Response } from 'express';
import path from 'path';

export default class ContactController {

  public async importFile(req: Request, res: Response): Promise<void> {
    if (!req.file) {
      res.status(400).send("Nenhum arquivo enviado");
      return;
    }

    const filePath = req.file.path;
    const fileExt = path.extname(req.file.originalname).toLowerCase();

    if (!filePath) {
      res.status(400).send("File path is undefined");
      return;
    }

    try {
      let dataFile: any;

      switch (fileExt) {
        case '.xlsx':
          dataFile = await processXLSX(filePath);
          break;
        default:
          res.status(400).send("Formato de arquivo não suportado.");
          return;
      }

      res.json({ message: 'Arquivo importado com sucesso', results: dataFile });

    } catch (error) {
      console.error("Erro ao processar arquivo:", error);
      res.status(500).json({ message: "Erro ao processar arquivo.", error });
    }
  }
}