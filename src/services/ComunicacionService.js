import Comunicacion from '../models/Comunicacion.js';
const findAll = async () => {
    return await Comunicacion.findAll();
};

const findOne = async (id) => {
    return await Comunicacion.findByPk(id);
};

const create = async (data) => {
    return await Comunicacion.create(data);
};

const update = async (id, data) => {
    const horario = await Comunicacion.findByPk(id);
    if (!horario) throw new Error('Comunicacion no encontrado');
    await horario.update(data);
    return horario;
};

const remove = async (id) => {
    return await Comunicacion.destroy({ where: { id_horario: id } });
};

export default { findAll, findOne, create, update, remove };
