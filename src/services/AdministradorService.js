import Administrador from '../models/Administrador.js';

const findAll = async () => {
    return await Administrador.findAll();
};

const findOne = async (id) => {
    return await Administrador.findByPk(id);
};

const create = async (data) => {
    return await Administrador.create(data);
};

const update = async (id, data) => {
    const reporte = await Administrador.findByPk(id);
    if (!reporte) throw new Error('Administrador no encontrado');
    await reporte.update(data);
    return reporte;
};

const remove = async (id) => {
    return await Administrador.destroy({ where: { id_reporte: id } });
};

export default { findAll, findOne, create, update, remove };
