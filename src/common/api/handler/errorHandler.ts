import axios, { AxiosError } from "axios";
import BadRequestError from "../errors/badRequest.error";
import BaseError from "../errors/base.error";
import ForbiddenError from "../errors/forbidden.error";
import InternalServerError from "../errors/internalServer.error";
import NotFoundError from "../errors/notFound.error";
import UnauthorizedError from "../errors/unauthorized.error";
import IResponseBody from "../interfaces/responseBody.interface";

function ErrorHandler(error: unknown) {
  if (axios.isAxiosError(error)) {
    const axiosError = error as AxiosError<IResponseBody>;
    const statusCode = axiosError.response?.status;

    const message = axiosError.response?.data.message ?? error.message;
    switch (statusCode) {
      case 400:
        return new BadRequestError(message);
      case 401:
        return new UnauthorizedError(message);
      case 403:
        return new ForbiddenError(message);
      case 404:
        return new NotFoundError(message);
      case 500:
        return new InternalServerError(message);

      default:
        return new BaseError(message, statusCode);
    }
  }

  let message = "Unknown Error";
  if (typeof error === "object" && error !== null && "toString" in error) {
    message = error.toString();
  }

  return new BaseError(message);
}

export default ErrorHandler;
