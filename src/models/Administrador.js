import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js'; 

const Administrador = sequelize.define('Administrador', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombres: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  apellidos: {
    type: DataTypes.STRING(30),
    allowNull: false
  }
  
}, {
  
  freezeTableName: true,  
  timestamps: false,
  tableName: 'Administrador'
  
});

export default Administrador;
