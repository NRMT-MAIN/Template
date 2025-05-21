import express from "express"
import { serverConfig } from "./config";
import v1Router from "./router/v1/index.router";
import { appErrorHandeler, genericErrorHandeler } from "./middleware/error.middleware";
import logger from "./config/logger.config";
import { attachCorrelationIdMiddleware } from "./middleware/correlation.middleware";
import sequelize from "./db/models/sequelize";
import Hotel from "./db/models/hotel";


const app = express() ; 

app.use(express.json()) ; 

app.use(attachCorrelationIdMiddleware)
app.use("/api/v1" , v1Router) ; 
app.use(appErrorHandeler) ; 
app.use(genericErrorHandeler) ; 

app.listen(serverConfig.PORT , async () => {
    console.log("Server is running at Port : " + serverConfig.PORT) ; 
    logger.info("To exit press Ctrl + C" , {"hello":"hjk"}) ; 

    try {
        await sequelize.authenticate() ; // Test the connection to the database
        logger.info("Database Connection has been established successfully.") ; 

        // const hotel = await Hotel.create({
        //     name : "Hotel Calilo0nida" , 
        //     address : "123 Sunset Bird" , 
        //     location : 'Los Angeles' , 
        //     rating : 4.5 , 
        //     ratingCount : 100
        // })

        const hotel = await Hotel.findAll() ; 

        logger.info("All Hostels" , hotel) ;

    } catch (error){
        console.log(error) ; 
        logger.error("Something went wrong in the db queries.")
    }
})