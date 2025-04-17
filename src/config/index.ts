import dotenv from "dotenv"

type ServerConfig = {
    PORT : number , 
    NODE_ENV : string
}

function loadConfig(){
    dotenv.config() ; 
}

loadConfig() ; 

export const serverConfig : ServerConfig = {
    PORT : Number(process.env.PORT) || 3000 , 
    NODE_ENV : process.env.NODE_ENV || ""
}