import { CSSTransition, TransitionGroup } from "react-transition-group";
import {
  IToastProperties,
  ToastPosition,
} from "../../interfaces/toast.interface";
import Toast from "./Toast";
import { getAnimation } from "../../utils/toast.util";

interface IToasts {
  toasts: IToastProperties[];
  position: ToastPosition;
  removeToast: (toastId: string) => void;
}

const Toasts = ({ toasts, removeToast, position }: IToasts) => {
  const animation = getAnimation(position);
  return (
    <>
      <TransitionGroup component={null}>
        {toasts.map((props) => (
          <CSSTransition
            mountOnEnter
            unmountOnExit
            key={props.id}
            nodeRef={props.nodeRef}
            timeout={500}
            classNames={{
              enter: `${animation.enter}`,
              enterActive: `transition-transform duration-500 ${animation.enterActive}`,
              exit: `${animation.exit} opacity-1`,
              exitActive: `transition-[transform,opacity] duration-500 opacity-0 ${animation.exitActive}`,
            }}
          >
            <Toast {...props} removeToast={removeToast} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
};

export default Toasts;
