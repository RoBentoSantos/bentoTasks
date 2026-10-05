import { Router } from "express";
import * as tarefaController from "../controllers/tarefaController.js";

const router = Router();

router.get("/", tarefaController.listar);
router.post("/", tarefaController.criar);

router.get("/:id", tarefaController.buscarId);
router.put("/:id", tarefaController.atualizarTarefas);
router.delete("/:id", tarefaController.deletar);

export default router;