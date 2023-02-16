import Toasts from "./Toasts";
import {
  IToastProperties,
  ToastPosition,
} from "../../interfaces/toast.interface";
import { getPosition } from "../../utils/toast.util";

interface IToastNotification {
  position?: ToastPosition;
  toasts: IToastProperties[];
  remove: (toastId: string) => void;
}

function ToastNotification({
  position = "bottom-right",
  toasts,
  remove,
}: IToastNotification) {
  return (
    <div className={`fixed z-50 ${getPosition[position]}`}>
      <Toasts toasts={toasts} position={position} removeToast={remove} />
    </div>
  );
}

export default ToastNotification;
