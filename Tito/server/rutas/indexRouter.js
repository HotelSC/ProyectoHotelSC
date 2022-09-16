import express from 'express';
const router = express.Router();
router.get('/', function (req, res, next) {
res.end("Welcome to our API HotelSC");
});
export default router;