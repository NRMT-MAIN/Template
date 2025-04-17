import express from "express"
import { serverConfig } from "./config";
import pingRouter from "./router/ping.router";

const app = express() ; 

app.use("/ping" , pingRouter) ; 

app.listen(serverConfig.PORT , () => {
    console.log("Server is running at Port : " + serverConfig.PORT) ; 
})