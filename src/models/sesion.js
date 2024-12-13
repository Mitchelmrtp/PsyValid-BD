import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Sesion = sequelize.define('Sesion', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fecha: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  hora: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  tipo_sesion: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  informe: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  archivo_pdf: {
    type: DataTypes.STRING,
    allowNull: true,
  }

}, {
  freezeTableName: true,  
  timestamps: false,
  tableName: 'Sesion'
});

export default Sesion;
