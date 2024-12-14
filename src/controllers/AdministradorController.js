import AdministradorService from '../services/AdministradorService.js';

const findAll = async (req, res) => {
    const result = await AdministradorService.findAll();
    return res.status(200).json(result);
};

const findOne = async (req, res) => {
    const { id } = req.params;
    const result = await AdministradorService.findOne(id);
    return result ? res.status(200).json(result) : res.status(404).json({ message: 'Reporte no encontrado' });
};

const create = async (req, res) => {
    const result = await AdministradorService.create(req.body);
    return res.status(201).json(result);
};

const update = async (req, res) => {
    const result = await AdministradorService.update(req.params.id, req.body);
    return res.status(200).json(result);
};

const remove = async (req, res) => {
    const result = await AdministradorService.remove(req.params.id);
    return res.status(200).json({ message: 'Reporte eliminado correctamente' });
};

export default { findAll, findOne, create, update, remove };
