import StatusCode from "../../enums/statusCode.enum";
import BaseError from "./base.error";

class InternalServerError extends BaseError {
  message: string;

  status: number;

  constructor(message: string) {
    super(message);
    this.status = StatusCode.InternalServerError;
    this.message = message;
  }
}

export default InternalServerError;
