import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

import ErrorHandler from "../handler/errorHandler";
import IApiClient from "../interfaces/apiClient.interface";
import IResponseBody from "../interfaces/responseBody.interface";
import { IResponse } from "../interfaces/response.interface";

class ApiClient implements IApiClient {
  public client: AxiosInstance;

  constructor(config: AxiosRequestConfig) {
    this.client = axios.create(config);
  }

  async request<TResponse extends IResponseBody, D>(
    config: AxiosRequestConfig
  ): Promise<IResponse<TResponse>> {
    try {
      const response = await this.client.request<
        TResponse,
        AxiosResponse<TResponse>,
        D
      >(config);
      return {
        data: response.data,
        error: null,
      };
    } catch (error) {
      const err = ErrorHandler(error);

      return {
        data: null,
        error: err,
      };
    }
  }

  async get<TResponse extends IResponseBody>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<IResponse<TResponse>> {
    return this.request({
      method: "GET",
      url,
      ...config,
    });
  }

  async post<TRequest, TResponse extends IResponseBody>(
    url: string,
    body?: TRequest,
    config?: AxiosRequestConfig
  ): Promise<IResponse<TResponse>> {
    return this.request({
      method: "POST",
      url,
      data: body,
      ...config,
    });
  }

  async patch<TRequest, TResponse extends IResponseBody>(
    url: string,
    body?: TRequest,
    config?: AxiosRequestConfig
  ): Promise<IResponse<TResponse>> {
    return this.request({
      method: "PATCH",
      url,
      data: body,
      ...config,
    });
  }

  async put<TRequest, TResponse extends IResponseBody>(
    url: string,
    body?: TRequest,
    config?: AxiosRequestConfig
  ): Promise<IResponse<TResponse>> {
    return this.request({
      method: "PUT",
      url,
      data: body,
      ...config,
    });
  }

  async delete<TResponse extends IResponseBody>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<IResponse<TResponse>> {
    return this.request({
      method: "DELETE",
      url,
      ...config,
    });
  }
}

export default ApiClient;
