import { createContext } from "react";
import { IToastOption } from "../interfaces/toast.interface";

export interface IToastContext {
  addToast: (options: IToastOption) => void;
}

const ToastContext = createContext<IToastContext>({
  addToast: () => {},
});

export default ToastContext;
