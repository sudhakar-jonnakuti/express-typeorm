import appConfig from "@config/index";
import appDataSource from "@database/app.datasource";
import appException from "@exception/app.exception";
import cors from "cors";
import express from "express";

import { appDefaultRoute, appModuleRoute } from "./app.route";

class App {
  private serverPort = Number(appConfig.server.port);
  private app: express.Application;

  constructor() {
    this.app = express();

    this.initAppMiddlewares();
    this.initAppRoutes();
    this.initAppException();
  }

  public getServer() {
    return this.app;
  }

  private async initDatabase() {
    try {
      const dataInit = await appDataSource.initialize();
      console.log(`App database initialized : ${dataInit.isInitialized}`);
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  }

  public serverListen() {
    return this.getServer().listen(this.serverPort, async () => {
      await this.initDatabase();
      console.log(`App listening port : ${this.serverPort}`);
      console.log(`App listening environment : ${process.env.ENV_NAME}`);
    });
  }

  private initAppMiddlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  private initAppRoutes() {
    appModuleRoute(this.app);
    appDefaultRoute(this.app);
  }

  private initAppException() {
    appException(this.app);
  }
}

export default App;
