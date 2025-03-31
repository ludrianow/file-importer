import { upload } from '@/config/uploadConfig';
import { ContactServiceImpl } from '@/domain/services/contacts/ContactServiceImpl';
import ContactController from '@/infrastructure/http/controllers/ContactController';
import { ContactRepositoryImpl } from '@/infrastructure/repositories/ContactRepositoryImpl';
import express from 'express';

const router = express.Router();

const contactRepository = new ContactRepositoryImpl();
const contactService = new ContactServiceImpl(contactRepository);
const contactController = new ContactController(contactService);

router.get('/list', (req, res) => contactController.list(req, res));
router.get('/:id', (req, res) => contactController.getContactById(req, res))
router.get('/', (req, res) => contactController.getContactByPhone(req, res))

router.post('/files/import', upload.single('files'), contactController.importFile);


export default router;