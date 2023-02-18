import { CSSTransition, TransitionGroup } from "react-transition-group";
import {
  IToastProperties,
  ToastPosition,
} from "../../../interfaces/toast.interface";
import Toast from "../toast/Toast";
import { getAnimation } from "../../../utils/toast/toast.util";

interface IToasts {
  toasts: IToastProperties[];
  position: ToastPosition;
  removeToast: (toastId: string) => void;
}

function Toasts({ toasts, removeToast, position }: IToasts) {
  const animation = getAnimation(position);
  return (
    <TransitionGroup component={null}>
      {toasts.map(({ id, nodeRef, description, type, title }) => (
        <CSSTransition
          mountOnEnter
          unmountOnExit
          key={id}
          nodeRef={nodeRef}
          timeout={500}
          classNames={{
            enter: `${animation.enter}`,
            enterActive: `transition-transform duration-500 ${animation.enterActive}`,
            exit: `${animation.exit} opacity-1`,
            exitActive: `transition-[transform,opacity] duration-500 opacity-0 ${animation.exitActive}`,
          }}
        >
          <Toast
            id={id}
            nodeRef={nodeRef}
            type={type}
            title={title}
            description={description}
            removeToast={removeToast}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}

export default Toasts;
