import express from 'express';
import { DataTypes } from "sequelize";
import sequelize from "../loadSequelize.js";
//DEFINICION DEL MODELO

const Inventario = sequelize.define('inventario', {
    tipoMaterial: DataTypes.STRING,
    unidad: DataTypes.STRING,
    cantidad: DataTypes.STRING,
    catMat: DataTypes.STRING,
}, { tableName: 'inventario', timestamps: false });

const router = express.Router();

router.get('/', function (req, res, next) {
    sequelize.sync().then(() => {
        Inventario.findAll()
            .then(inventario => res.json({
                ok: true,
                data: inventario
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

// GET de un solo inv
router.get('/:id', function (req, res, next) {
    sequelize.sync().then(() => {
        Inventario.findOne({ where: { id: req.params.id } })
            // .then(inv => inv.get({plain: true}))
            .then(inv => res.json({
                ok: true,
                data: inv
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

// // POST, creació d'un nou inv
// router.post('/', function (req, res, next) {
//     sequelize.sync().then(() => {
//         inv.create(req.body)
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
// // put modificació d'un inv
// router.put('/:id', function (req, res, next) {
//     sequelize.sync().then(() => {
//         inv.findOne({ where: { id: req.params.id } })
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

// // DELETE elimina l'inv id
// router.delete('/:id', function (req, res, next) {
//     sequelize.sync().then(() => {
//         inv.destroy({ where: { id: req.params.id } })
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