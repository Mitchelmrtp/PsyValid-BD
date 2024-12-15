import UsuarioService from '../services/usuarioService.js';
import { Usuario, Paciente, Psicologo } from '../models/index.js';
import sequelize from '../config/database.js';  
const models = { Usuario, Paciente, Psicologo };

const findAll = async (req, res) => {
  try {
    const usuarios = await UsuarioService.findAll();
    return res.status(200).json(usuarios);
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener los usuarios', error });
  }
};

const findOne = async (req, res) => {
  const { id } = req.params;
  try {
    const usuario = await UsuarioService.findOne(id);
    return usuario ? res.status(200).json(usuario) : res.status(404).json({ message: 'Usuario no encontrado' });
  } catch (error) {
    return res.status(500).json({ message: 'Error al obtener el usuario', error });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const usuario = await UsuarioService.login(email, password);

    if (usuario) {
      return res.status(200).json(usuario); 
    } else {
      return res.status(404).json({ message: 'Usuario o contraseña incorrectos' });
    }
  } catch (err) {
    return res.status(500).json({ message: 'Error en la validación del usuario', error: err });
  }
};

const registro = async (req, res) => {
  const {
    email,
    password,
    rol,
    nombres,
    apellidos,
    telefono,
    dni,
    fecha_nacimiento,
    diagnostico,
    especialidad,
    numero_colegiatura,
    descripcion,
  } = req.body;

  console.log("Datos recibidos:", req.body);

  // Crear una transacción
  const transaction = await sequelize.transaction();

  try {
    // Crear usuario asociado a la transacción
    const usuario = await models.Usuario.create({ email, password, rol }, { transaction });

    if (rol === "Paciente") {
      // Crear paciente asociado a la transacción
      await models.Paciente.create(
        {
          nombres,
          apellidos,
          telefono,
          dni,
          fecha_nacimiento,
          diagnostico,
          usuario_id: usuario.id,
        },
        { transaction }
      );
    } else if (rol === "Psicologo") {
      // Crear psicólogo asociado a la transacción
      await models.Psicologo.create(
        {
          nombres,
          apellidos,
          especialidad,
          numero_colegiatura,
          descripcion,
          usuario_id: usuario.id,
        },
        { transaction }
      );
    } else {
      throw new Error("Rol no válido");
    }

    // Confirmar la transacción
    await transaction.commit();
    return res.status(201).json({ message: "Usuario creado con éxito", usuario });

  } catch (error) {
    // Revertir la transacción en caso de error
    await transaction.rollback();
    console.error("Error al crear el usuario, paciente o psicólogo:", error);
    return res
      .status(500)
      .json({ message: "Error al crear el usuario", error: error.message });
  }
};


/*
const update = async (req, res) => {
  try {
    const updatedUsuario = await UsuarioService.update(req.params.id, req.body);
    return res.status(200).json(updatedUsuario);
  } catch (error) {
    return res.status(500).json({ message: 'Error al actualizar el usuario', error });
  }
};

const remove = async (req, res) => {
  try {
    await UsuarioService.remove(req.params.id);
    return res.status(200).json({ message: 'Usuario eliminado correctamente' });
  } catch (error) {
    return res.status(500).json({ message: 'Error al eliminar el usuario', error });
  }
};

const validate = async (req, res) => {
  const { correo, contrasena } = req.body;

  try {
    const usuario = await UsuarioService.validate(correo, contrasena);

    if (usuario) {
      return res.status(200).json(usuario); 
    } else {
      return res.status(404).json({ message: 'Usuario o contraseña incorrectos' });
    }
  } catch (err) {
    return res.status(500).json({ message: 'Error en la validación del usuario', error: err });
  }
};

const getPacientesByPsicologo = async (req, res) => {
  const { id_psicologo } = req.params;
  try {
      const pacientes = await UsuarioService.getPacientesByPsicologo(id_psicologo);
      return res.status(200).json(pacientes);
  } catch (error) {
      return res.status(500).json({ message: 'Error al obtener los pacientes', error });
  }
};

const getPsicologoByPaciente = async (req, res) => {
  const { idPaciente } = req.params;
  try {
      const psicologo = await UsuarioService.getPsicologoByPaciente(idPaciente);
      return res.status(200).json(psicologo);
  } catch (error) {
      return res.status(500).json({ message: 'Error al obtener el psicólogo', error });
  }
};
*/


export default { findAll, findOne,login, registro};
