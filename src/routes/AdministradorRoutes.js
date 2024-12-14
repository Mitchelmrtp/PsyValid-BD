import express from 'express';
import AdministradorController from '../controllers/AdministradorController.js';

const router = express.Router();

router.get('/', AdministradorController.findAll);
router.get('/:id', AdministradorController.findOne);
router.post('/', AdministradorController.create);
router.put('/:id', AdministradorController.update);
router.delete('/:id', AdministradorController.remove);

export default router;
