import routes from '@/infrastructure/http/routes';
import express from 'express';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(routes);


export default app;