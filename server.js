import express from "express";
import dotenv from "dotenv";
import vehiculosRoutes from "./routes/vehiculosRoutes.js";

dotenv.config();
const app = express();

// Middlewares
app.use(express.json());

// Rutas
app.use("/api/vehiculos", vehiculosRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
