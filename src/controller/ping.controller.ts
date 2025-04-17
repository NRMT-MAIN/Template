import { NextFunction, Request, Response } from "express";

export const pingHandeler = (req : Request , res : Response , next : NextFunction) => {
    res.send("Ping Handler : Pong")
}