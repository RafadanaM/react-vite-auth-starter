import { ToastPosition, ToastType } from "../interfaces/toast.interface";
import { ReactComponent as Success } from "Assets/check-circle.svg";
import { ReactComponent as Info } from "Assets/info-circle.svg";
import { ReactComponent as Warning } from "Assets/exclamation-circle.svg";
import { ReactComponent as Error } from "Assets/x-circle.svg";

/**
 * get animation properties given a toast position
 * @param {ToastPosition} position toast position
 * @returns {{ enter: string; enterActive: string; exit: string; exitActive: string }} properties of the animation
 */
const getAnimation = (
  position: ToastPosition
): { enter: string; enterActive: string; exit: string; exitActive: string } => {
  let initialPosition: string,
    finalEnterPosition: string,
    initialExitPosition: string;

  // IDK why I have to do this horribleness to make the animation work
  if (position === "bottom-left" || position === "top-left") {
    initialPosition = "-translate-x-full";
    finalEnterPosition = "-translate-x-[0%]";
    initialExitPosition = "-translate-x-0";
  } else if (position === "bottom-right" || position === "top-right") {
    initialPosition = "translate-x-full";
    finalEnterPosition = "translate-x-[0%]";
    initialExitPosition = "translate-x-0";
  } else if (position === "top-middle") {
    initialPosition = "-translate-y-full";
    finalEnterPosition = "-translate-y-[0%]";
    initialExitPosition = "-translate-y-0";
  } else {
    initialPosition = "translate-y-full";
    finalEnterPosition = "translate-y-[0%]";
    initialExitPosition = "translate-y-0";
  }

  return {
    enter: initialPosition,
    enterActive: finalEnterPosition,
    exit: initialExitPosition,
    exitActive: initialPosition,
  };
};

const getPosition: Record<ToastPosition, string> = {
  "bottom-right": "right-3 bottom-3",
  "bottom-middle": "left-1/2 bottom-3 -translate-x-1/2",
  "bottom-left": "left-3 bottom-3",
  "top-right": "right-3 top-3",
  "top-middle": "left-1/2 top-3 -translate-x-1/2",
  "top-left": "left-3 top-3",
};

const getColor: Record<ToastType, string> = {
  success: "bg-green-500",
  error: "bg-red-500",
  info: "bg-blue-500",
  warning: "bg-yellow-500",
};

const getIcon: Record<
  ToastType,
  {
    icon: React.FunctionComponent<
      React.SVGProps<SVGSVGElement> & {
        title?: string | undefined;
      }
    >;
    color: string;
  }
> = {
  success: { icon: Success, color: "fill-green-500" },
  error: { icon: Error, color: "fill-red-500" },
  info: { icon: Info, color: "fill-blue-500" },
  warning: { icon: Warning, color: "fill-yellow-500" },
};

export { getColor, getIcon, getPosition, getAnimation };
