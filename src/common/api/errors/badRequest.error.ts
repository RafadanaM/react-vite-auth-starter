import StatusCode from "../../enums/statusCode.enum";
import BaseError from "./base.error";

class BadRequestError extends BaseError {
  message: string;

  status: number;

  constructor(message: string) {
    super(message);
    this.status = StatusCode.BadRequest;
    this.message = message;
  }
}

export default BadRequestError;
