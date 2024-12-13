import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const ProgresoPaciente = sequelize.define('ProgresoPaciente', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  descripcion_progreso: {
    type: DataTypes.STRING(30),
    allowNull: true,
  },
  fecha_actualizacion: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  porcentaje_progreso: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: true,
  },
}, {
  freezeTableName: true,  
  timestamps: false,
  tableName: 'ProgresoPaciente'
});

export default ProgresoPaciente;
