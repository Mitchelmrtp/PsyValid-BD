import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';  // No importes Usuario aquí

const Psicologo = sequelize.define('Psicologo', {
  id_psicologo: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  especialidad: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  Usuario_id_usuario: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Usuario',
      key: 'id_usuario',
    },
    onDelete: 'CASCADE',
  }
}, {
  timestamps: false,
  tableName: 'Psicologo'
});

export default Psicologo;
