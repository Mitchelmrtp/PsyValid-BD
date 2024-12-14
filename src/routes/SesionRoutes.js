import express from 'express';
import SesionController from '../controllers/SesionController.js';  // Asegúrate de que la ruta es correcta

const router = express.Router();

router.get('/', SesionController.findAll);
router.get('/:id', SesionController.findOne);
router.post('/login', SesionController.login);
router.post('/registro', SesionController.registro);



export default router;
