const express = require('express');
const cors = require('cors');
const domicilioRoutes = require('./routes/domicilioRoutes');

const app = express();

app.use(cors());
app.use(express.json());


app.use('/api/domicilio', domicilioRoutes);

module.exports = app;
