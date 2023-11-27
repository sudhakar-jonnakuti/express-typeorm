import AppDataSource from "@database/app.datasource";

import { httpTerminator, server } from "./index";

class AppTerminator {
  public destroyDBConnection() {
    if (AppDataSource && AppDataSource.isInitialized) {
      console.log("Closing connection to database");
      AppDataSource.destroy();
    }
  }

  public async handleExit(code: number): Promise<void> {
    try {
      console.log(`Attempting a graceful shutdown with code ${code}`);

      if (server.listening) {
        this.destroyDBConnection();
        console.log("Terminating HTTP connections");
        await httpTerminator.terminate();
      }

      console.log(`Exiting gracefully with code ${code}`);
      process.exit(code);
    } catch (error) {
      console.log("Error shutting down gracefully");
      console.log(error);
      console.log(`Forcing exit with code ${code}`);
      process.exit(code);
    }
  }
}

export default AppTerminator;
