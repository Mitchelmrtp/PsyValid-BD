import express from 'express';
import AdministradorController from '../controllers/AdministradorController.js';

const router = express.Router();

router.get('/', AdministradorController.findAll);
router.get('/:id', AdministradorController.findOne);

export default router;
