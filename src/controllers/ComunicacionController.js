import ComunicacionService from '../services/ComunicacionService.js';

const findAll = async (req, res) => {
    const result = await ComunicacionService.findAll();
    return res.status(200).json(result);
};

const findOne = async (req, res) => {
    const { id } = req.params;
    const result = await ComunicacionService.findOne(id);
    return result ? res.status(200).json(result) : res.status(404).json({ message: 'Psicologo no encontrado' });
};

const create = async (req, res) => {
    try {
        const newPsicologo = await ComunicacionService.create(req.body);
        return res.status(201).json(newPsicologo);
    } catch (error) {
        return res.status(500).json({ message: 'Error al crear el Psicologo', error });
    }
};

const update = async (req, res) => {
    const result = await ComunicacionService.update(req.params.id, req.body);
    return res.status(200).json(result);
};

const remove = async (req, res) => {
    const result = await ComunicacionService.remove(req.params.id);
    return res.status(200).json({ message: 'Psicologo eliminado correctamente' });
};

export default { findAll, findOne, create, update, remove };
