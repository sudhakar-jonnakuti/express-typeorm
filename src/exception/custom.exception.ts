import { ICustomExceptionArgs } from "@exception/exception.interface";

class CustomException extends Error {
  readonly errorCode: number;
  readonly errorName: string;
  readonly errorMessage: string;
  readonly errorRawMessage: unknown;

  constructor({ errorCode, errorName, errorMessage, errorRawMessage }: ICustomExceptionArgs) {
    super(errorMessage);

    this.errorCode = errorCode;
    this.errorName = errorName;
    this.errorMessage = errorMessage;
    this.errorRawMessage = errorRawMessage;

    Object.setPrototypeOf(this, new.target.prototype);
  }
}

export default CustomException;
