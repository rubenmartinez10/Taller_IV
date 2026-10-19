import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    message: 'El API está funcionando correctamente',
  });
});

app.get('/api/info', (req, res) => {
  res.json({
    status: 'ok',
    message: 'El API está funcionando correctamente',
    integrantes: [
      {
        nombre: 'Rubén Martinez',
        edad: 20,            
        carrera: 'Ingeniería Informática',
        materiasAprobadas: 20, 
      },
      {
        nombre: 'Yukio Ogawa',
        edad: 20,
        carrera: 'Ingeniería Informática',
        materiasAprobadas: 20,
      }
      // agrega a los demás integrantes aquí
    ],
  });
});

app.listen(PORT, () => {
  console.log(`API corriendo en http://localhost:${PORT}`);
});