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



export default { findAll, findOne};
