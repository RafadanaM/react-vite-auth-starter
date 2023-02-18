import { createContext } from "react";
import { IToastOption, IToastProperties } from "../interfaces/toast.interface";

export interface IToastContext {
  addToast: (options: IToastOption) => void;
  removeToast: (toastId: string) => void;
  toasts: IToastProperties[];
}

const ToastContext = createContext<IToastContext>({
  addToast: () => {},
  removeToast: () => {},
  toasts: [],
});

export default ToastContext;
