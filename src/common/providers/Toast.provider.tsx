import { ReactNode, createRef, useMemo, useState } from "react";
import { nanoid } from "nanoid";
import ToastContext, { IToastContext } from "../contexts/toast.context";
import { IToastOption, IToastProperties } from "../interfaces/toast.interface";
import ToastNotification from "../components/toast/ToastNotification";

interface IToastProvider {
  children: ReactNode;
}

function ToastProvider({ children }: IToastProvider) {
  const [toasts, setToasts] = useState<IToastProperties[]>([]);

  const addToast = (options: IToastOption) => {
    setToasts((prevState) => [
      ...prevState,
      { id: nanoid(), ...options, nodeRef: createRef() },
    ]);
  };

  const removeToast = (toastId: string) => {
    setToasts((prevState) => prevState.filter((x) => x.id !== toastId));
  };

  const memoedValue = useMemo<IToastContext>(
    () => ({
      addToast,
    }),
    []
  );
  return (
    <ToastContext.Provider value={memoedValue}>
      <ToastNotification
        position="bottom-right"
        toasts={toasts}
        remove={removeToast}
      />
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
