import appDev from "@config/app/app.dev";
import { envDevValidate } from "@config/env/env.dev";

const setAppConfig = (): any => {
  switch (process.env.ENV_NAME) {
    case "DEV":
      envDevValidate();
      return appDev;
    default:
      return appDev;
  }
};

const appConfig = setAppConfig();

export default appConfig;
