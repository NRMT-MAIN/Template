import express from "express"
import { serverConfig } from "./config";
import v1Router from "./router/v1/index.router";

const app = express() ; 

app.use(express.json()) ; 

app.use("/api/v1" , v1Router) ; 

app.listen(serverConfig.PORT , () => {
    console.log("Server is running at Port : " + serverConfig.PORT) ; 
})