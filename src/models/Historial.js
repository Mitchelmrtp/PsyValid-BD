import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Historial = sequelize.define('Historial', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fecha_reprogramacion: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  fecha_original: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  fecha_nueva: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  razon_reprogramación: {
    type: DataTypes.STRING(250),
    allowNull: true,
  }

}, {
  freezeTableName: true,  
  timestamps: false,
  tableName: 'Historial'
});

export default Historial;
