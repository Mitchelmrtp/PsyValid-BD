import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Comunicacion = sequelize.define('Comunicacion', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  tipo_comunicacion: {
    type: DataTypes.STRING(30),
    allowNull: true,
  }
}, {
  timestamps: false
});

export default Comunicacion;
