import Toasts from "../toasts/Toasts";
import { ToastPosition } from "../../../interfaces/toast.interface";
import { getPosition } from "../../../utils/toast/toast.util";
import useToast from "../../../hooks/useToast/useToast";

export interface IToastNotification {
  position?: ToastPosition;
}

function ToastNotification({ position = "bottom-right" }: IToastNotification) {
  const { removeToast, toasts } = useToast();
  return (
    <div
      data-testid="toast-notification-container"
      className={`fixed z-50 ${getPosition[position]}`}
    >
      <Toasts toasts={toasts} position={position} removeToast={removeToast} />
    </div>
  );
}

export default ToastNotification;
