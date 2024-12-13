import express from 'express';
import UsuarioController from '../controllers/UsuarioController.js';  // Asegúrate de que la ruta es correcta

const router = express.Router();

router.get('/', UsuarioController.findAll);
router.get('/:id', UsuarioController.findOne);
router.post('/login', UsuarioController.login);
router.post('/registro', UsuarioController.registro);





export default router;
