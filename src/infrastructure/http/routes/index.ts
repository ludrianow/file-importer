import { upload } from '@/config/uploadConfig';
import ContactController from '@/infrastructure/http/controllers/ContactController';
import express from 'express';

const router = express.Router();
const contactController = new ContactController();

router.post('/files/import', upload.single('files'), contactController.importFile);

export default router;
