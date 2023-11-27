import CustomException from "@exception/custom.exception";
import status from "http-status";

export class InternalServeError extends CustomException {
  constructor(errorRawMessage?: unknown) {
    super({
      errorCode: Number(status["INTERNAL_SERVER_ERROR"]),
      errorName: String(status[`${status.INTERNAL_SERVER_ERROR}_NAME`]),
      errorMessage: String(status[`${status.INTERNAL_SERVER_ERROR}_MESSAGE`]),
      errorRawMessage: errorRawMessage
    });
  }
}
