import { createRef, useState } from "react";
import { nanoid } from "nanoid";
import Toasts from "./Toasts";
import {
  IToastProperties,
  IToastOption,
  ToastPosition,
} from "../../interfaces/toast.interface";
import { getPosition } from "../../utils/toast.util";

interface IToastNotification {
  position?: ToastPosition;
  toasts: IToastProperties[];
  remove: (toastId: string) => void;
}

const ToastNotification = ({
  position = "bottom-right",
  toasts,
  remove,
}: IToastNotification) => {
  return (
    <div className={`fixed z-50 ${getPosition[position]}`}>
      <Toasts toasts={toasts} position={position} removeToast={remove} />
    </div>
  );
};

export default ToastNotification;
