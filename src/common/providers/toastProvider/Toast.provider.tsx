import { ReactNode, createRef, useMemo, useState } from "react";
import { nanoid } from "nanoid";
import ToastContext, { IToastContext } from "../../contexts/toast.context";
import {
  IToastOption,
  IToastProperties,
} from "../../interfaces/toast.interface";
import ToastNotification from "../../components/toast/toastNotification/ToastNotification";

interface IToastProvider {
  children: ReactNode;
}

function ToastProvider({ children }: IToastProvider) {
  const [toasts, setToasts] = useState<IToastProperties[]>([]);

  const addToast = ({ id, ...rest }: IToastOption) => {
    setToasts((prevState) => [
      ...prevState,
      { id: id ?? nanoid(), ...rest, nodeRef: createRef() },
    ]);
  };

  const removeToast = (toastId: string) => {
    setToasts((prevState) => prevState.filter((x) => x.id !== toastId));
  };

  const memoedValue = useMemo<IToastContext>(
    () => ({
      addToast,
      removeToast,
      toasts,
    }),
    [toasts]
  );
  return (
    <ToastContext.Provider value={memoedValue}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
