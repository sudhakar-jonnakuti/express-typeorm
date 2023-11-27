import { NotFound } from "@exception/response/client.exception";
import HealthCheckRoute from "@module/health/health.route";
import PostRoute from "@module/post/post.route";
import { Application, NextFunction, Request, Response } from "express";

export const appModuleRoute = (app: Application) => {
  const moduleRoute = () => [new HealthCheckRoute(), new PostRoute()];

  moduleRoute().forEach((appRoute) => {
    app.use("/api", appRoute.router);
  });
};

export const appDefaultRoute = (app: Application) => {
  app.use("*", (req: Request, res: Response, next: NextFunction) => {
    throw new NotFound();
  });
};
