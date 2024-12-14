import express from 'express';
import ComunicacionController from '../controllers/ComunicacionController.js';

const router = express.Router();

router.get('/', ComunicacionController.findAll);
router.get('/:id', ComunicacionController.findOne);
router.post('/', ComunicacionController.create);
router.put('/:id', ComunicacionController.update);
router.delete('/:id', ComunicacionController.remove);

export default router;
