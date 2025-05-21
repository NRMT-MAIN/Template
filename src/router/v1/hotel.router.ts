import express from 'express';
import { validateRequestBody } from '../../validators';
import { createHotelHandler, getAllHotelsHandler, getHotelByIdHandler } from '../../controller/hotel.controller';
import { hotelSchema } from '../../validators/hotel.validator';

const hotelRouter = express.Router();

hotelRouter.post(
    '/', 
    validateRequestBody(hotelSchema),
    createHotelHandler); 

hotelRouter.get('/:id', getHotelByIdHandler); 

hotelRouter.get('/', getAllHotelsHandler);

export default hotelRouter;