//importamos express y controladores
import express from "express";
import indexRouter from './rutas/indexRouter.js';
import habitacionesRouter from './rutas/habitacionesRouter.js'
import empleadosRouter from './rutas/empleadosRouter.js'
import inventarioRouter from './rutas/inventarioRouter.js'
import asignacionHabRouter from './rutas/asignacionHabRouter.js'
import asignacionMatRouter from './rutas/asignacionMatRouter.js'
import averiasRouter from './rutas/averiasRouter.js'
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
app.use("/api/habitaciones", habitacionesRouter)
app.use("/api/empleados", empleadosRouter)
app.use("/api/inventario", inventarioRouter)
app.use("/api/asignacionHab", asignacionHabRouter)
app.use("/api/asignacionMat", asignacionMatRouter)
app.use("/api/averias", averiasRouter)

//arranque del servidor
const port = 3001
app.listen(port, () => console.log(`App listening on port ${port}!`))