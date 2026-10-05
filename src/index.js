import express from "express";
import router from "./routes/tarefaRoutes.js";

const app = express();

app.use(express.json());

app.use('/tarefas', router)

app.listen(3000, () => {
	console.log("Servidor rodando na porta 3000");
});
