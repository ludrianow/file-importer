import app from "@/app";
import { connectMongo } from "@/infrastructure/database/connectMongo";
import 'dotenv/config';

const PORT = process.env.PORT || 3333;

async function bootstrap() {
  try {
    await connectMongo();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Erro ao iniciar servidor:', error);
    process.exit(1);
  }
}

bootstrap();