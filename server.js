require('dotenv').config();
const app = require('./src/app');
const initDB = require('./src/config/initDB');

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
  initDB(); // Verifica conexión a la base de datos al iniciar
});
