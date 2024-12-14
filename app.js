import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

// Importar rutas desde el directorio correcto
import UsuarioRoutes from './src/routes/UsuarioRoutes.js';
import PacienteRoutes from './src/routes/PacienteRoutes.js';
import PsicologoRoutes from './src/routes/PsicologoRoutes.js';
import AdministradorRoutes from './src/routes/AdministradorRoutes.js';

/*
import CitaRoutes from './src/routes/CitaRoutes.js';
import ComunicacionRoutes from './src/routes/ComunicacionRoutes.js';
import CuestionarioRoutes from './src/routes/CuestionarioRoutes.js';
import DisponibilidadRoutes from './src/routes/DisponibilidadRoutes.js';
import HistorialRoutes from './src/routes/HistorialRoutes.js';
import ProgresoRoutes from './src/routes/ProgresoRoutes.js';
import SesionRoutes from './src/routes/SesionRoutes.js';
*/

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
app.use("/pacientes", PacienteRoutes);
app.use("/psicologos", PsicologoRoutes);
app.use("/administradores", AdministradorRoutes);

/*
app.use("/citas", CitaRoutes);
app.use("/comunicaciones", ComunicacionRoutes);
app.use("/cuestionarios", CuestionarioRoutes);
app.use("/disponibilidades", DisponibilidadRoutes);
app.use("/historiales", HistorialRoutes);
app.use("/progreso", ProgresoRoutes);
app.use("/sesiones", SesionRoutes);
*/

export default app;
