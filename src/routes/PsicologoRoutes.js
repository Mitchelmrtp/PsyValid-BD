import express from 'express';
import PsicologoController from '../controllers/PsicologoController.js';

const router = express.Router();

router.get('/', PsicologoController.findAll);
router.get('/:id', PsicologoController.findOne);

export default router;
