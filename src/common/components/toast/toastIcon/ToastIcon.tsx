import { createElement } from "react";
import { ToastType } from "../../../interfaces/toast.interface";
import { getIcon } from "../../../utils/toast/toast.util";

export interface IToastIcon {
  type: ToastType;
}

function ToastIcon({ type }: IToastIcon) {
  const component = getIcon[type];
  return createElement(component.icon, {
    className: `w-7 h-7 my-auto ${component.color}`,
    title: type,
  });
}

export default ToastIcon;
