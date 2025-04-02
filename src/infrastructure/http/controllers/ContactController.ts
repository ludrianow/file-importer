import { IContactService } from '@/domain/services/contacts/IContactService';
import { processXLSX } from '@/shared/utils/processXLSX';
import { Request, Response } from 'express';
import path from 'path';

export default class ContactController {

  constructor(private contactService: IContactService){}

  public async list(req: Request, res: Response): Promise<any> {
    try {
      const page = parseInt(req.query.page as string) || 1;
      const limit = parseInt(req.query.limit as string) || 10;
      const usersData = await this.contactService.find(page, limit);

      res.json(usersData);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  public async getContactById(req: Request, res: Response) {
    try {
      const id = req.params.id as string;

      const result = await this.contactService.findById(id);

      if (!result) {
        res.json({message: "Contato não encontrado"})
      }

      res.json({
        result
      })
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  public async getContactByPhone(req: Request, res: Response) {
    try {
      const phone = req.query.phone as string;

      const result = await this.contactService.findByPhone(phone);

      if (!result) {
        res.json({message: "Contato não encontrado"})
      }

      res.json({
        result
      })
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  public async markLeadContacted(req: Request, res: Response) {
    try {
      const {phone, typesContact} = req.body;

      const result = await this.contactService.markLeadContacted(phone, typesContact);

      res.json({
        result
      })
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

  public async getContactByFilter(req: Request, res: Response) {
    const {filter, pagination} = req.body;

    try {

      if(!pagination) throw new Error('Paginação é necessária')

      const {page, limit} = pagination;

      const data = await this.contactService.findByFilter(filter, page, limit)

      res.json(data)
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  }

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