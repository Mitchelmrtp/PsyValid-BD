import express from 'express';
import PacienteController from '../controllers/pacienteController.js';

const router = express.Router();

router.get('/', PacienteController.findAll);
router.get('/:id', PacienteController.findOne);


export default router;
