import express from 'express';
import DsiponibilidadController from '../controllers/DisponibilidadController.js';

const router = express.Router();

router.get('/', DsiponibilidadController.findAll);
router.get('/:id', DsiponibilidadController.findOne);
router.post('/', DsiponibilidadController.create);
router.put('/:id', DsiponibilidadController.update);
router.delete('/:id', DsiponibilidadController.remove);

export default router;
