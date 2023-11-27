import { IErrorResponse } from "@common/builder/builder.interface";

const ErrorResponseBuilder = (output: IErrorResponse): IErrorResponse => {
  const { statusCode, payload } = output;
  const { errorCode, errorName, errorMessage, errorRawMessage } = payload;

  const refinedPayload = {
    errorCode,
    errorName,
    errorMessage,
    ...(errorRawMessage ? { errorRawMessage } : {})
  };

  return { statusCode, payload: refinedPayload };
};

export default ErrorResponseBuilder;
