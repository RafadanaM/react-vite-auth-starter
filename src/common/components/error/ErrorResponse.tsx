import { Link, isRouteErrorResponse } from "react-router-dom";

interface IErrorResponse {
  error: unknown;
}
function ErrorResponse({ error }: IErrorResponse) {
  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      return (
        <div className="h-full flex flex-col items-center justify-center">
          <h1>This page does not exists</h1>
          <Link to="/"> Back To Home</Link>
        </div>
      );
    }
  }
  return <div>Something went wrong</div>;
}

export default ErrorResponse;
