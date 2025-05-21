import logger from "../config/logger.config";
import Hotel from "../db/models/hotel";
import { createHotelDTO } from "../dto/hotel.dto";
import { NotFoundError } from "../utils/Error/app.error";

export async function createHotel(hotelData: createHotelDTO){
    const hotel = await Hotel.create(hotelData) ; 

    logger.info("Hotel created : " , hotel.id) ; 
    return hotel ; 
}

export async function getHotelById(id : number){
    const hotel = await Hotel.findByPk(id) ; 

    if(!hotel){
        logger.error(`Hotel not found: ${id}`) ; 
        throw new NotFoundError(`Hotel with id ${id} not found`) ; 
    }

    logger.info(`Hotel found : ${hotel.id}`) ; 
    return hotel ; 
}


export async function getAllHotels() {
    const hotels = await Hotel.findAll();

    if(!hotels) {
        logger.error(`No hotels found`);
        throw new NotFoundError(`No hotels found`);
    }

    logger.info(`Hotels found: ${hotels.length}`);
    return hotels;
}