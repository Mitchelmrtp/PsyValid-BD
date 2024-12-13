import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
import Paciente from './paciente.js';

const Cita = sequelize.define('Cita', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  fecha: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  hora: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  cantidad_reprogramaciones: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  descripcion_motivo: {
    type: DataTypes.STRING,
    allowNull: true,
  }
  
}, {
  tableName: 'Cita',
  freezeTableName: true,  
  timestamps: false,
});

export default Cita;
