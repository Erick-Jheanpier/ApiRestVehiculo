import pool from "../config/db.js";

export const getVehiculos = async () => {
  const [rows] = await pool.query("SELECT * FROM vehiculos");
  return rows;
};

export const getVehiculoById = async (id) => {
  const [rows] = await pool.query("SELECT * FROM vehiculos WHERE id = ?", [id]);
  return rows[0];
};

export const searchVehiculos = async (keyword) => {
  const like = `%${keyword}%`;
  const [rows] = await pool.query(
    "SELECT * FROM vehiculos WHERE marca LIKE ? OR modelo LIKE ? OR color LIKE ? OR placa LIKE ?",
    [like, like, like, like]
  );
  return rows;
};

export const createVehiculo = async (vehiculo) => {
  const { marca, modelo, color, precio, placa } = vehiculo;
  const [result] = await pool.query(
    "INSERT INTO vehiculos (marca, modelo, color, precio, placa) VALUES (?, ?, ?, ?, ?)",
    [marca, modelo, color, precio, placa]
  );
  return { id: result.insertId, ...vehiculo };
};

export const updateVehiculo = async (id, vehiculo) => {
  const { marca, modelo, color, precio, placa } = vehiculo;
  await pool.query(
    "UPDATE vehiculos SET marca=?, modelo=?, color=?, precio=?, placa=? WHERE id=?",
    [marca, modelo, color, precio, placa, id]
  );
  return { id, ...vehiculo };
};

export const deleteVehiculo = async (id) => {
  await pool.query("DELETE FROM vehiculos WHERE id = ?", [id]);
  return { message: "Vehiculo eliminado" };
};
