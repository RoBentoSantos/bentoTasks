export const tarefas = [
	{ id: 1, titulo: "Configurar ambiente Node", concluida: true },
	{ id: 2, titulo: "Aprender rotas com express", concluida: false },
];

export function listarTodas() {
	return tarefas;
}

export function criarTarefa(titulo) {
	id = Math.max(...tarefas.map((tarefa) => tarefa.id)) + 1;
    newTarefa = {
		id,
		titulo,
		concluida: false,
	}

    tarefas.push(newTarefa)

	return newTarefa;
}
