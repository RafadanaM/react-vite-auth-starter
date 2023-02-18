import { ReactComponent as Close } from "Assets/x.svg";
import { IToastProperties } from "../../../interfaces/toast.interface";
import useTimeout from "../../../hooks/useTimeout/useTimeout";
import { getColor } from "../../../utils/toast/toast.util";
import ToastIcon from "../toastIcon/ToastIcon";

export interface IToast extends IToastProperties {
  removeToast: (toastId: string) => void;
}

function Toast({ id, type, title, description, nodeRef, removeToast }: IToast) {
  useTimeout(() => {
    removeToast(id);
  }, 2000);

  return (
    <div
      ref={nodeRef}
      className="flex gap-4 w-96 min-h-20 bg-white mt-2 p-2 border border-gray-200 rounded-md shadow-xl"
    >
      <span
        data-testid="toast-border"
        className={`w-1 rounded-full ${getColor[type]}`}
      />
      <ToastIcon type={type} />
      <div className="flex-1 flex flex-col justify-center">
        <p className="font-bold first-letter:capitalize">{title}</p>
        <p className="text-sm">{description}</p>
      </div>
      <button type="button" onClick={() => removeToast(id)}>
        <Close className="w-6 h-6 my-auto fill-gray-600" />
      </button>
    </div>
  );
}

export default Toast;
