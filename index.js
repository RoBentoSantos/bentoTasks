import express from 'express';
const app = express();

app.use(express.json());

app.get("/tarefas", (req, res) => {
	return res.json(tarefas);
});

app.post("/tarefas", (req, res) => {
	const { titulo } = req.body;
	const id = Math.max(...tarefas.map((tarefa) => tarefa.id)) + 1;

	const newTarefa = {
		id,
		titulo,
		concluida: false,
	};

	tarefas.push(newTarefa);

	return res.status(201).json(newTarefa);
});

app.get("/tarefas/:id", (req, res) => {
	const id = Number(req.params.id);
	const resposta = tarefas.find((tarefa) => tarefa.id === id);

	if (!resposta)
		return res.status(404).json({ erro: "Tarefa nao encontrada" });

	return res.json(resposta);
});

app.put("/tarefas/:id", (req, res) => {
	const id = Number(req.params.id);
	const tarefa = tarefas.find((tarefa) => tarefa.id === id);

	if (!tarefa) return res.status(404).json({ erro: "Tarefa nao encontrada" });

	const { titulo, concluida } = req.body;

	if (titulo !== undefined) tarefa.titulo = titulo;
	if (concluida !== undefined) tarefa.concluida = concluida;

	return res.status(200).json(tarefa);
});

app.delete("/tarefas/:id", (req, res) => {
	const id = Number(req.params.id);
	const index = tarefas.findIndex((tarefa) => tarefa.id === id);

	if (index === -1)
		return res.status(404).json({ erro: "Tarefa não encontrada" });

	tarefas.splice(index, 1);
	return res.status(200).json({ mensagem: "Tarefa excluida com sucesso" });
});

app.listen(3000, () => {
	console.log("Servidor rodando na porta 3000");
});
