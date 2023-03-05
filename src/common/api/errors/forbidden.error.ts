import StatusCode from "../../enums/statusCode.enum";
import BaseError from "./base.error";

class ForbiddenError extends BaseError {
  message: string;

  status: number;

  constructor(message: string) {
    super(message);
    this.status = StatusCode.Forbidden;
    this.message = message;
  }
}

export default ForbiddenError;
