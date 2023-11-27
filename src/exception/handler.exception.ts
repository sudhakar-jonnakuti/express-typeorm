import ErrorResponseBuilder from "@common/builder/error-response.builder";
import CustomException from "@exception/custom.exception";
import { InternalServeError } from "@exception/response/server.exception";
import { Request, Response } from "express";

class HandlerException {
  constructor(error: Error, request: Request, response: Response) {
    if (this.isTrustedError(error)) {
      this.handleTrustedError(error as CustomException, response);
    } else {
      this.handleUntrustedError(error, response);
    }
  }

  private isTrustedError(error: Error): boolean {
    return error instanceof CustomException;
  }

  private normalizeError(error: Error | string | object): Error {
    if (error instanceof Error) {
      return error;
    } else if (typeof error === "string") {
      return new Error(error);
    }
    return new Error(JSON.stringify(error));
  }

  private handleTrustedError(error: CustomException, response: Response): void {
    this.handleErrorResponse(error, response);
  }

  private handleUntrustedError(error: Error, response: Response): void {
    const normalizedError = this.normalizeError(error);
    const serialized = normalizedError.message;
    const internalError = new InternalServeError(serialized);
    this.handleErrorResponse(internalError as CustomException, response);
  }

  private handleErrorResponse(error: CustomException, response: Response): void {
    const { errorCode, errorName, errorMessage, errorRawMessage } = error;
    const payload = {
      errorCode,
      errorName,
      errorMessage,
      ...(errorRawMessage ? { errorRawMessage } : {})
    };

    response.status(errorCode).send(
      ErrorResponseBuilder({
        statusCode: errorCode,
        payload
      })
    );
  }
}

export default HandlerException;
