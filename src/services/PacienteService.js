import Paciente from '../models/paciente.js';

const findAll = async () => {
    try {
        return await Paciente.findAll();
    } catch (err) {
        console.error(err);
        return null;
    }
};


const findOne = async (id) => {
    try {
        return await Paciente.findOne({ where: { idPaciente: id } });
    } catch (err) {
        console.error(err);
        return null;
    }
};



export default { findAll, findOne };
