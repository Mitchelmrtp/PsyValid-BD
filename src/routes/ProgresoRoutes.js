import express from 'express';
import ProgresoController from '../controllers/Progreso_PacienteController.js';

const router = express.Router();

router.get('/', ProgresoController.findAll);
router.get('/:id', ProgresoController.findOne);
router.post('/', ProgresoController.create);
router.put('/:id', ProgresoController.update);
router.delete('/:id', ProgresoController.remove);

export default router;
