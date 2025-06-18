const Domicilio = require('../models/domicilioModel');
const { v4: uuidv4 } = require('uuid');

const getAllDomicilios = async () => {
  return await Domicilio.findAll();
};

const getDomicilioById = async (id) => {
  return await Domicilio.findByPk(id);
};

const getDomicilioByCurp = async (curp) => {
  return await Domicilio.findOne({ where: { ciudadano_curp: curp } });
};

const createDomicilio = async (data) => {
  const newDomicilio = {
    id: uuidv4(),
    ...data
  };
  return await Domicilio.create(newDomicilio);
};


const updateDomicilio = async (id, data) => {
  const domicilio = await Domicilio.findByPk(id);
  if (!domicilio) return null;
  return await domicilio.update(data);
};

const deleteDomicilio = async (id) => {
  const domicilio = await Domicilio.findByPk(id);
  if (!domicilio) return null;
  await domicilio.destroy();
  return domicilio;
};

module.exports = {
  getAllDomicilios,
  getDomicilioById,
  getDomicilioByCurp,
  createDomicilio,
  updateDomicilio,
  deleteDomicilio
};
