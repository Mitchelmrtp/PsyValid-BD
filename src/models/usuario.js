import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';
const Usuario = sequelize.define('Usuario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  rol: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'Paciente',
  }
}, {
  freezeTableName: true,  
  timestamps: false,
  tableName: 'Usuario'

});


export default Usuario;
