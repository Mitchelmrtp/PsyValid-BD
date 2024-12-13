import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// Importar rutas desde el directorio correcto
import UsuarioRoutes from './src/routes/UsuarioRoutes.js';



const app = express();

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Ruta de prueba inicial
app.get('/', (req, res) => {
    return res.json({ result: 'C LOGRÓ' });
});

// Configurar rutas
app.use("/usuarios", UsuarioRoutes);


export default app;
