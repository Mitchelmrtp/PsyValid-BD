import Disponibilidad from '../models/Disponibilidad.js';
const findAll = async () => {
    return await Disponibilidad.findAll();
};

const findOne = async (id) => {
    return await Disponibilidad.findByPk(id);
};

const create = async (data) => {
    return await Disponibilidad.create(data);
};

const update = async (id, data) => {
    const horario = await Disponibilidad.findByPk(id);
    if (!horario) throw new Error('Disponibilidad no encontrado');
    await horario.update(data);
    return horario;
};

const remove = async (id) => {
    return await Disponibilidad.destroy({ where: { id_horario: id } });
};

export default { findAll, findOne, create, update, remove };
