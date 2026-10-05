export const tarefas = [
	{ id: 1, titulo: "Configurar ambiente Node", concluida: true },
	{ id: 2, titulo: "Aprender rotas com express", concluida: false },
];

export function listarTodas() {
	return tarefas;
}

export function buscarPorId(id) {
	return tarefas.find((tarefa) => tarefa.id === id);
}

export function atualizarTarefa(id, { titulo, concluida }) {
	const tarefa = buscarPorId(id);
	if (!tarefa) return null;

	if (titulo !== undefined) tarefa.titulo = titulo;
	if (concluida !== undefined) tarefa.concluida = concluida;

	return tarefa;
}

export function deletarTarefa(id) {
	const idxTarefa = tarefas.findIndex(tarefa => tarefa.id === id)
	if (idxTarefa === -1) return false;

	tarefas.splice(idxTarefa, 1);

	return true;
}

export function criarTarefa(titulo) {
	const id =
		tarefas.length === 0
			? 1
			: Math.max(...tarefas.map((tarefa) => tarefa.id)) + 1;

	const newTarefa = {
		id,
		titulo,
		concluida: false,
	};

	tarefas.push(newTarefa);

	return newTarefa;
}
