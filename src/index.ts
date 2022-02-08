import express from "express";
import errorHandler from "./middlewares/error-handler.middleware";
import statusRoute from "./routes/status.route";
import usersRoute from './routes/users.route';

const app = express();

// Config. da aplicação
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Config. das Rotas
app.use(usersRoute);

app.use(statusRoute);

//Config dos Handlers de Error

app.use(errorHandler);

// Inicialização do servidor
app.listen(3000, () => {
    console.log('aplicação executando na porta 3000!');
});