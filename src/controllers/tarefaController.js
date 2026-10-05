import {
	atualizarTarefa,
	buscarPorId,
	criarTarefa,
	deletarTarefa,
	listarTodas
} from "../services/tarefasService.js";

export function listar(req, res) {
	return res.status(200).json(listarTodas());
}

export function criar(req, res) {
	const { titulo } = req.body;

	if (!titulo) return res.status(400).json({ erro: "Titulo obrigatorio" });

	const tarefa = criarTarefa(titulo);

	return res.status(201).json(tarefa);
}

export function deletar(req, res) {
	const id = Number(req.params.id);

	const deleted = deletarTarefa(id);

	if (!deleted) return res.status(404).json({ erro: "Tarefa nao encontrada" });

	return res.json("Tarefa deletada");
}

export function buscarId(req, res) {
	const id = Number(req.params.id);
	const tarefa = buscarPorId(id);

	if (!tarefa) return res.status(404).json({ erro: "Tarefa nao encontrada" });

	return res.status(200).json(tarefa);
}

export function atualizarTarefas(req, res) {
	const id = Number(req.params.id);
	const tarefa = atualizarTarefa(id, req.body);

	if (!tarefa) return res.status(404).json({ erro: "Tarefa nao encontrada" });

	return res.status(200).json(tarefa);
}
