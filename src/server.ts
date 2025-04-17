import express from "express"
import { serverConfig } from "./config";
import v1Router from "./router/v1/index.router";
import { appErrorHandeler, genericErrorHandeler } from "./middleware/error.middleware";


const app = express() ; 

app.use(express.json()) ; 

app.use("/api/v1" , v1Router) ; 
app.use(appErrorHandeler) ; 
app.use(genericErrorHandeler) ; 

app.listen(serverConfig.PORT , () => {
    console.log("Server is running at Port : " + serverConfig.PORT) ; 
})