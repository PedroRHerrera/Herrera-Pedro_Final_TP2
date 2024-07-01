import { Router } from "express";
import SondaController from "../controllers/SondaController.js";

const routes = Router();
const sondaController = new SondaController();


routes.get("/estadisticas", sondaController.obtenerEstadisticas);
routes.post("/", sondaController.agregarSonda);
routes.get("/", sondaController.listarSondas);
routes.get("/:id", sondaController.listarSondasPorId);

export default routes;