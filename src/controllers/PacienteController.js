import PacienteService from '../services/PacienteService.js';
import { Usuario, Paciente, Psicologo } from '../models/index.js';
import sequelize from '../config/database.js';  
const models = { Usuario, Paciente, Psicologo };

const findAll = async (req, res) => {
  try {
    const usuarios = await PacienteService.findAll();
    return res.status(200).json(usuarios);
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener los usuarios', error });
  }
};

const findOne = async (req, res) => {
  const { id } = req.params;
  try {
    const usuario = await PacienteService.findOne(id);
    return usuario ? res.status(200).json(usuario) : res.status(404).json({ message: 'Usuario no encontrado' });
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener el usuario', error });
  }
};



export default { findAll, findOne};
