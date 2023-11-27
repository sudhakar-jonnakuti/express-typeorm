interface IErrorResponse {
  statusCode: number;
  payload: IErrorPayload;
}

interface IErrorPayload {
  errorCode: number;
  errorName: string;
  errorMessage: string;
  errorRawMessage?: unknown;
}

interface ISuccessResponse {
  statusCode: number;
  payload: any;
}

export { IErrorPayload, IErrorResponse, ISuccessResponse };
