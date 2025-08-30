import express from "express";
import {
  obtenerVehiculos,
  obtenerVehiculo,
  buscarVehiculos,
  crearVehiculo,
  actualizarVehiculo,
  eliminarVehiculo,
} from "../controllers/vehiculosController.js";

const router = express.Router();

// CRUD
router.get("/", obtenerVehiculos);           // GET todos
router.get("/:id", obtenerVehiculo);         // GET por id
router.get("/search/all", buscarVehiculos);  // GET búsqueda ?q=...
router.post("/", crearVehiculo);             // POST crear
router.put("/:id", actualizarVehiculo);      // PUT actualizar
router.delete("/:id", eliminarVehiculo);     // DELETE eliminar

export default router;
