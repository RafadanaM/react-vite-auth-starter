import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import ToastNotification from "./common/components/toast/toastNotification/ToastNotification";
import ToastProvider from "./common/providers/toastProvider/Toast.provider";
import Root from "./routes/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ToastProvider>
      <ToastNotification />
      <RouterProvider router={router} />
    </ToastProvider>
  </React.StrictMode>
);
