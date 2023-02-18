import { useRouteError } from "react-router-dom";
import ErrorResponse from "../common/components/error/ErrorResponse";

function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="h-full">
      <ErrorResponse error={error} />
    </div>
  );
}

export default ErrorPage;
