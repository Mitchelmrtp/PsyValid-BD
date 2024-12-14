import Progreso_Paciente from '../models/Progreso_Paciente.js';

const findAll = async () => {
    return await Progreso_Paciente.findAll();
};

const findOne = async (id) => {
    return await Progreso_Paciente.findByPk(id);
};

const create = async (data) => {
    return await Progreso_Paciente.create(data);
};

const update = async (id, data) => {
    const diagnostico = await Progreso_Paciente.findByPk(id);
    if (!diagnostico) throw new Error('Diagnóstico no encontrado');
    await diagnostico.update(data);
    return diagnostico;
};

const remove = async (id) => {
    return await Progreso_Paciente.destroy({ where: { idDiagnostico: id } });
};

export default { findAll, findOne, create, update, remove };
