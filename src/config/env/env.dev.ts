import { cleanEnv, str } from "envalid";

const envDev = {
  POSTGRES_HOST: str(),
  POSTGRES_PORT: str(),
  POSTGRES_USER: str(),
  POSTGRES_PASSWORD: str(),
  POSTGRES_DB: str()
};

const envDevValidate = () => {
  cleanEnv(process.env, envDev);
};

export { envDevValidate };
