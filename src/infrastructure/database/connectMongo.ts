import mongoose from "mongoose";

export async function connectMongo(): Promise<void> {
  const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/Pryntio'
  await mongoose.connect(uri)
    .then(() => console.log('Conectado ao MongoDB'))
    .catch((err) => console.error('Erro ao conectar ao MongoDB', err));
}