import { createElement } from "react";
import { ToastType } from "../../interfaces/toast.interface";
import { getIcon } from "../../utils/toast.util";

interface IToastIcon {
  type: ToastType;
}

const ToastIcon = ({ type }: IToastIcon) => {
  const component = getIcon[type];
  return createElement(component.icon, {
    className: `w-7 h-7 my-auto ${component.color}`,
  });
};

export default ToastIcon;
