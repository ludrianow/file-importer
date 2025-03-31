import express from 'express';
import contactRouter from './contact.route';

const router = express.Router();

router.use('/contact', contactRouter)

export default router;
