import StatusCode from "../../enums/statusCode.enum";
import BaseError from "./base.error";

class UnauthorizedError extends BaseError {
  message: string;

  status: number;

  constructor(message: string) {
    super(message);
    this.status = StatusCode.Unauthorized;
    this.message = message;
  }
}
export default UnauthorizedError;
