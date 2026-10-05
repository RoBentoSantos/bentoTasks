import express from "express";
import {
	tarefas,
	listarTodas,
	buscarPorId,
	atualizarTarefa,
	criarTarefa,
	deletarTarefa,
} from "./src/services/tarefasService.js";

const app = express();

app.use(express.json());

app.get("/tarefas", (req, res) => {
	return res.json(tarefas);
});

app.post("/tarefas", (req, res) => {
	const { titulo } = req.body;
	const newTarefa = criarTarefa(titulo);

	return res.status(201).json(newTarefa);
});

app.get("/tarefas/:id", (req, res) => {
	const id = Number(req.params.id);
	const tarefa = buscarPorId(id);
	if (!tarefa) return res.status(404).json({ erro: "Tarefa nao encontrada" });

	return res.json(tarefa);
});

app.put("/tarefas/:id", (req, res) => {
	const id = Number(req.params.id);
	const tarefa = atualizarTarefa(id, req.body);

	if (!tarefa) return res.status(404).json({ erro: "Tarefa nao encontrada" });

	return tarefa;
});

app.delete("/tarefas/:id", (req, res) => {
	const id = Number(req.params.id);
	const deleted = deletarTarefa(id);

	if (!deleted)
		return res.status(404).json({ erro: "Tarefa nao encontrada" });

	return res.json("Tarefa apagada");
});

app.listen(3000, () => {
	console.log("Servidor rodando na porta 3000");
});
