// index.js
import { Sequelize } from 'sequelize';
import sequelize from '../config/database.js';

// Importar todos los modelos
import Usuario from './usuario.js';
import Paciente from './paciente.js';
import Psicologo from './Psicologo.js';


// Definir relaciones entre los modelos

 // Usuario can be Paciente, Psicologo, or Administrador
 Usuario.hasOne(Paciente, { foreignKey: 'usuario_id' });
 Paciente.belongsTo(Usuario, { foreignKey: 'usuario_id' });

 Usuario.hasOne(Psicologo, { foreignKey: 'usuario_id' });
 Psicologo.belongsTo(Usuario, { foreignKey: 'usuario_id' });

 //Usuario.hasOne(Administrador, { foreignKey: 'usuario_id' });
 //Administrador.belongsTo(Usuario, { foreignKey: 'usuario_id' });

 /*
 // Paciente relationships
 Paciente.hasOne(CuestionarioInicial, { foreignKey: 'paciente_id' });
 CuestionarioInicial.belongsTo(Paciente, { foreignKey: 'paciente_id' });

 Paciente.hasMany(Cita, { foreignKey: 'paciente_id' });
 Cita.belongsTo(Paciente, { foreignKey: 'paciente_id' });

 Paciente.hasMany(Sesion, { foreignKey: 'paciente_id' });
 Sesion.belongsTo(Paciente, { foreignKey: 'paciente_id' });

 Paciente.hasMany(ProgresoPaciente, { foreignKey: 'paciente_id' });
 ProgresoPaciente.belongsTo(Paciente, { foreignKey: 'paciente_id' });

 // Psicologo relationships
 Psicologo.hasMany(Cita, { foreignKey: 'psicologo_id' });
 Cita.belongsTo(Psicologo, { foreignKey: 'psicologo_id' });

 Psicologo.hasMany(Sesion, { foreignKey: 'psicologo_id' });
 Sesion.belongsTo(Psicologo, { foreignKey: 'psicologo_id' });

 Psicologo.hasMany(ProgresoPaciente, { foreignKey: 'psicologo_id' });
 ProgresoPaciente.belongsTo(Psicologo, { foreignKey: 'psicologo_id' });

 Psicologo.hasMany(DisponibilidadPsicologo, { foreignKey: 'psicologo_id' });
 DisponibilidadPsicologo.belongsTo(Psicologo, { foreignKey: 'psicologo_id' });

 // Cita and Sesion relationship
 Cita.hasOne(Sesion, { foreignKey: 'cita_id' });
 Sesion.belongsTo(Cita, { foreignKey: 'cita_id' });

 // Comunicacion relationships
 Usuario.hasMany(Comunicacion, { 
   foreignKey: 'remitente_id', 
   as: 'mensajesEnviados' 
 });
 Usuario.hasMany(Comunicacion, { 
   foreignKey: 'destinatario_id', 
   as: 'mensajesRecibidos' 
 });
 Comunicacion.belongsTo(Usuario, { 
   foreignKey: 'remitente_id', 
   as: 'remitente' 
 });
 Comunicacion.belongsTo(Usuario, { 
   foreignKey: 'destinatario_id', 
   as: 'destinatario' 
 });

 Cita.hasMany(Comunicacion, { foreignKey: 'cita_id' });
 Comunicacion.belongsTo(Cita, { foreignKey: 'cita_id' });

 // Cita Reprogramacion
 Cita.hasMany(Historial, { foreignKey: 'cita_id' });
 Historial.belongsTo(Cita, { foreignKey: 'cita_id' });

*/
export {
  Usuario,
  Paciente,
  Psicologo,
  /*CuestionarioInicial,
  Cita,
  Sesion,
  Comunicacion,
  ProgresoPaciente,
  DisponibilidadPsicologo,
  Historial */
};
