const axios = require('axios');
const domicilioService = require('../services/domicilioService');

const CIUDADANO_API = process.env.CIUDADANO_API || 'http://localhost:3000/api/ciudadanos';

async function crearDomicilio(req, res) {
  const { ciudadano_curp } = req.body;

  try {
    // Validar existencia del ciudadano con curp
    const resp = await axios.get(`${CIUDADANO_API}/curp/${ciudadano_curp}`);
    if (!resp.data) return res.status(404).json({ message: 'Ciudadano no encontrado' });

    const nuevo = await domicilioService.createDomicilio(req.body);
    res.status(201).json(nuevo);
  } catch (error) {
    if (error.response?.status === 404) {
      return res.status(404).json({ message: 'Ciudadano no encontrado' });
    }
    console.error(error.message);
    res.status(500).json({ message: 'Error al crear domicilio' });
  }
}

async function listarDomicilios(req, res) {
  const domicilios = await domicilioService.getAllDomicilios();
  res.json(domicilios);
}

async function obtenerDomicilio(req, res) {
  const domicilio = await domicilioService.getDomicilioById(req.params.id);
  if (!domicilio) return res.status(404).json({ message: 'No encontrado' });
  res.json(domicilio);
}

async function obtenerDomicilioPorCurp(req, res) {
  const { curp } = req.params;

  try {
    const domicilio = await domicilioService.getDomicilioByCurp(curp);
    if (!domicilio) return res.status(404).json({ message: 'No encontrado' });
    res.json(domicilio);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al buscar el domicilio por CURP' });
  }
}


async function actualizarDomicilio(req, res) {
  const actualizado = await domicilioService.updateDomicilio(req.params.id, req.body);
  if (!actualizado) return res.status(404).json({ message: 'No encontrado' });
  res.json(actualizado);
}

async function eliminarDomicilio(req, res) {
  const eliminado = await domicilioService.deleteDomicilio(req.params.id);
  if (!eliminado) return res.status(404).json({ message: 'No encontrado' });
  res.json({ message: 'Eliminado correctamente' });
}

module.exports = {
  crearDomicilio,
  listarDomicilios,
  obtenerDomicilio,
  obtenerDomicilioPorCurp,
  actualizarDomicilio,
  eliminarDomicilio,
};
