import HandlerException from "@exception/handler.exception";
import { Application, NextFunction, Request, Response } from "express";

const appException = (app: Application) => {
  app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    new HandlerException(error, request, response);
  });
};

export default appException;
