import { Router } from "express";
import * as produtoController from "../controllers/tarefaController.js";

const router = Router();

router.get("/tarefas", produtoController.listar);
router.post("/tarefas", produtoController.criar);

router.get("/tarefas/:id", produtoController.buscarId);
router.put("tarefas/:id", produtoController.atualizarTarefas);
router.delete("/tarefas/:id", produtoController.deletar);

export default router;