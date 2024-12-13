import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js'; 

const Psicologo = sequelize.define('Psicologo', {
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
  },
  especialidad: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  numero_colegiatura: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  descripcion: {
    type: DataTypes.STRING(255),
    allowNull: false
  }
}, {
  timestamps: false,
  tableName: 'Psicologo'
});

export default Psicologo;
