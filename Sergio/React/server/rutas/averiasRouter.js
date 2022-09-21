import express from 'express';
import { DataTypes } from "sequelize";
import sequelize from "../loadSequelize.js";
//DEFINICION DEL MODELO

const Averias = sequelize.define('averias', {
    desperfecto: DataTypes.STRING,
    fechaAveria: DataTypes.STRING,
    correccion: DataTypes.STRING,
    idhabitacion: DataTypes.STRING,
}, { tableName: 'averias', timestamps: false });

const router = express.Router();

router.get('/', function (req, res, next) {
    sequelize.sync().then(() => {
        Averias.findAll()
            .then(averias => res.json({
                ok: true,
                data: averias
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
        Averias.findOne({ where: { id: req.params.id } })
            // .then(Alumne => Alumne.get({plain: true}))
            .then(ave => res.json({
                ok: true,
                data: ave
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