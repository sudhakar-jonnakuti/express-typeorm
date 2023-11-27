import { ISuccessResponse } from "@common/builder/builder.interface";

const SuccessResponseBuilder = (statusCode: number, payload: any): ISuccessResponse => {
  return { statusCode, payload };
};

export default SuccessResponseBuilder;
