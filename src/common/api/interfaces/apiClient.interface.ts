import { AxiosInstance, AxiosRequestConfig } from "axios";
import IResponseBody from "./responseBody.interface";
import { IResponse } from "./response.interface";

interface IApiClient {
  client: AxiosInstance;
  get<TResponse extends IResponseBody>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<IResponse<TResponse>>;
  post<TRequest, TResponse extends IResponseBody>(
    url: string,
    body: TRequest,
    config?: AxiosRequestConfig
  ): Promise<IResponse<TResponse>>;
  patch<TRequest, TResponse extends IResponseBody>(
    url: string,
    body: TRequest,
    config?: AxiosRequestConfig
  ): Promise<IResponse<TResponse>>;
  put<TRequest, TResponse extends IResponseBody>(
    url: string,
    body: TRequest,
    config?: AxiosRequestConfig
  ): Promise<IResponse<TResponse>>;
  delete<TResponse extends IResponseBody>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<IResponse<TResponse>>;
}

export default IApiClient;
