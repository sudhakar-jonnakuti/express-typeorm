import "express-async-errors";
import "./app.process";
import "./config";

import http from "http";
import { createHttpTerminator } from "http-terminator";
import moduleAlias from "module-alias";

import App from "./app";

const sourcePath = __dirname;
const moduleAliasPath = {
  "@common": `${sourcePath}/common`,
  "@config": `${sourcePath}/config`,
  "@database": `${sourcePath}/database`,
  "@exception": `${sourcePath}/exception`,
  "@module": `${sourcePath}/module`
};

moduleAlias.addAliases(moduleAliasPath);

export const server = http.createServer(new App().getServer());
export const httpTerminator = createHttpTerminator({ server });

(async () => new App().serverListen())();
