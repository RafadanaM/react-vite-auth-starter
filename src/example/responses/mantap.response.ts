import IResponseBody from "../../common/api/interfaces/responseBody.interface";

interface IMantapResponse extends IResponseBody {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  users: any[];
}

export default IMantapResponse;
