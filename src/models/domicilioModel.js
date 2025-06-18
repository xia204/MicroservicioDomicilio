const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Domicilio = sequelize.define('domicilio', {
  id: {
    type: DataTypes.CHAR(36),
    primaryKey: true,
  },
  ciudadano_curp: {
    type: DataTypes.CHAR(18),
    allowNull: false,
  },
  calle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  colonia: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  municipio: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'domicilios',
  timestamps: false,
});

module.exports = Domicilio;
