import DisponibilidadService from '../services/DisponibilidadService.js';

const findAll = async (req, res) => {
    const result = await DisponibilidadService.findAll();
    return res.status(200).json(result);
};

const findOne = async (req, res) => {
    const { id } = req.params;
    const result = await DisponibilidadService.findOne(id);
    return result ? res.status(200).json(result) : res.status(404).json({ message: 'Horario no encontrado' });
};

const create = async (req, res) => {
    const result = await DisponibilidadService.create(req.body);
    return res.status(201).json(result);
};

const update = async (req, res) => {
    const result = await DisponibilidadService.update(req.params.id, req.body);
    return res.status(200).json(result);
};

const remove = async (req, res) => {
    const result = await DisponibilidadService.remove(req.params.id);
    return res.status(200).json({ message: 'Horario eliminado correctamente' });
};

export default { findAll, findOne, create, update, remove };
