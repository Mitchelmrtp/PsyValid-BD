import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Disponibilidad = sequelize.define('Disponibilidad', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fecha: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  hora: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  disponible: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  }
}, {
  freezeTableName: true,  
  timestamps: false,
  tableName: 'Disponibilidad'
});

export default Disponibilidad;
