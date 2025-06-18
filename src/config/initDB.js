const sequelize = require('./db');

const initDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexión a MySQL exitosa.');
  } catch (error) {
    console.error('Error de conexión a MySQL:', error);
  }
};

module.exports = initDB;
