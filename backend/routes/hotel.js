import express from 'express';
const router = express.Router();
import hotelController from '../controllers/hotelController.js';

router.post("/addHotels", hotelController.add_hotels);
router.get("/getHotels",hotelController.get_hotels);
router.post("/getHotelByName",hotelController.filter_hotel);

export default router;