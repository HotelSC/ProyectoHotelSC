//importamos express y controladores
import express from "express";
import empleadosRouter from './rutas/empleadosRouter.js'
import indexRouter from './rutas/indexRouter.js';
import cors from 'cors';
//instanciamos nueva aplicación express
const app = express();
app.use(cors({
    origin: 'http://localhost:3000',
}))
//necesario para poder recibir datos en json
app.use(express.json());

//las rutas que empiecen por /api/alumnes se dirigirán a alumnesRouter
app.use('/', indexRouter);
app.use("/api/empleados", empleadosRouter)

//arranque del servidor
const port = 3001
app.listen(port, () => console.log(`App listening on port ${port}!`))