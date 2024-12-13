import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js'; 

const Cuestionario = sequelize.define('Cuestionario', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  preguntas: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  respuestas: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  resultado_diagnotico: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  fecha_realizacion: {
    type: DataTypes.STRING(30),
    allowNull: false
  }
}, {
  freezeTableName: true,  
  timestamps: false,
  tableName: 'Cuestionario'
});

export default Cuestionario;
