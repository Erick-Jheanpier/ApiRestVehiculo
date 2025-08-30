import {
  getVehiculos,
  getVehiculoById,
  searchVehiculos,
  createVehiculo,
  updateVehiculo,
  deleteVehiculo,
} from "../models/vehiculosModel.js";

export const obtenerVehiculos = async (req, res) => {
  try {
    const data = await getVehiculos();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const obtenerVehiculo = async (req, res) => {
  try {
    const data = await getVehiculoById(req.params.id);
    if (!data) return res.status(404).json({ error: "Vehículo no encontrado" });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const buscarVehiculos = async (req, res) => {
  try {
    const data = await searchVehiculos(req.query.q || "");
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const crearVehiculo = async (req, res) => {
  try {
    const nuevo = await createVehiculo(req.body);
    res.status(201).json(nuevo);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const actualizarVehiculo = async (req, res) => {
  try {
    const actualizado = await updateVehiculo(req.params.id, req.body);
    res.json(actualizado);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const eliminarVehiculo = async (req, res) => {
  try {
    const eliminado = await deleteVehiculo(req.params.id);
    res.json(eliminado);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
