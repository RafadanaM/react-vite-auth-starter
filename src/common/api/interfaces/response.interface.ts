import BaseError from "../errors/base.error";
import IResponseBody from "./responseBody.interface";

export interface IResponse<TResponse extends IResponseBody> {
  data: TResponse | null;
  error: BaseError | null;
}
