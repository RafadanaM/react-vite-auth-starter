import StatusCode from "../../enums/statusCode.enum";
import BaseError from "./base.error";

class NotFoundError extends BaseError {
  message: string;

  status: number;

  constructor(message: string) {
    super(message);
    this.status = StatusCode.NotFound;
    this.message = message;
  }
}

export default NotFoundError;
