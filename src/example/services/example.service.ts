import { publicApiClient } from "../../common/api/api";
import { IResponse } from "../../common/api/interfaces/response.interface";
import IMantapResponse from "../responses/mantap.response";

const ExampleService = {
  mantap(): Promise<IResponse<IMantapResponse>> {
    return publicApiClient.get<IMantapResponse>("/users");
  },
};

export default ExampleService;
