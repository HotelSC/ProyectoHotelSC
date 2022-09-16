import express from 'express';
import { DataTypes } from "sequelize";
import sequelize from "../loadSequelize.js";
//DEFINICION DEL MODELO

const Empleado = sequelize.define('empleados', {
    nombre: DataTypes.STRING,
    usuario: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    dni: DataTypes.STRING,
    email: DataTypes.STRING,
    pass: DataTypes.STRING,
    categoria: DataTypes.STRING,
    telefono: DataTypes.STRING,
    fechaNacimiento: DataTypes.DATE,
    direccion: DataTypes.STRING,
    localidad: DataTypes.STRING
}, { tableName: 'empleados', timestamps: false });

const router = express.Router();

router.get('/', function (req, res, next) {
    sequelize.sync().then(() => {
        Empleado.findAll()
            .then(empleados => res.json({
                ok: true,
                data: empleados
            }))
            .catch(error => res.json({
                ok: false,
                error: error
            }))
    }).catch((error) => {
        res.json({
            ok: false,
            error: error
        })
    });
});

// GET de un solo alumne
router.get('/:id', function (req, res, next) {
    sequelize.sync().then(() => {
        Alumne.findOne({ where: { id: req.params.id } })
            // .then(Alumne => Alumne.get({plain: true}))
            .then(Alumne => res.json({
                ok: true,
                data: Alumne
            }))
            .catch(error => res.json({
                ok: false,
                error: error
            }))
    }).catch((error) => {
        res.json({
            ok: false,
            error: error
        })
    });
});

// // POST, creació d'un nou alumne
// router.post('/', function (req, res, next) {
//     sequelize.sync().then(() => {
//         Alumne.create(req.body)
//             .then((item) => item.save())
//             .then((item) => res.json({ ok: true, data: item }))
//             .catch((error) => res.json({ ok: false, error: error }))
//     }).catch((error) => {
//         res.json({
//             ok: false,
//             error: error
//         })
//     });
// });
// // put modificació d'un alumne
// router.put('/:id', function (req, res, next) {
//     sequelize.sync().then(() => {
//         Alumne.findOne({ where: { id: req.params.id } })
//             .then((al) =>
//                 al.update(req.body)
//             )
//             .then((ret) => res.json({
//                 ok: true,
//                 data: ret
//             }))
//             .catch(error => res.json({
//                 ok: false,
//                 error: error
//             }));
//     }).catch((error) => {
//         res.json({
//             ok: false,
//             error: error

//         })
//     });
// });

// // DELETE elimina l'alumne id
// router.delete('/:id', function (req, res, next) {
//     sequelize.sync().then(() => {
//         Alumne.destroy({ where: { id: req.params.id } })
//             .then((data) => res.json({ ok: true, data }))
//             .catch((error) => res.json({ ok: false, error }))
//     }).catch((error) => {
//         res.json({
//             ok: false,
//             error: error
//         })
//     });
// });
export default router;