import { render } from "@testing-library/react";
import { describe, it, vi } from "vitest";
import { createRef } from "react";
import Toasts from "./Toasts";
import { IToastProperties } from "../../../interfaces/toast.interface";

vi.mock("../../../utils/toast/toast.util", () => {
  return {
    getAnimation: vi.fn(() => ({
      enter: "",
      enterActive: "",
      exit: "",
      exitActive: "",
    })),
  };
});

vi.mock("react-transition-group", () => {
  const MockCSSTransition = vi.fn(({ children }) => children);

  const MockTransitionGroup = vi.fn(({ children }) => (
    <div data-testid="mock-transition-group">
      <MockCSSTransition>{children}</MockCSSTransition>
    </div>
  ));

  return {
    CSSTransition: MockCSSTransition,
    TransitionGroup: MockTransitionGroup,
  };
});

vi.mock("../toast/Toast", () => {
  return {
    default: vi.fn(() => <div>Mock Toast</div>),
  };
});

describe("<Toasts />", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });
  it("has no children when toasts prop is empty", () => {
    const mockRemove = vi.fn();
    const screen = render(
      <Toasts position="bottom-left" toasts={[]} removeToast={mockRemove} />
    );
    expect(screen.getByTestId("mock-transition-group").children.length).toBe(0);
  });

  it("has children with the same length as toasts prop length", () => {
    const mockRemove = vi.fn();
    const mockToasts: IToastProperties[] = [
      {
        id: "1",
        type: "success",
        title: "title",
        description: "description",
        nodeRef: createRef(),
      },
    ];
    const screen = render(
      <Toasts
        position="bottom-left"
        toasts={mockToasts}
        removeToast={mockRemove}
      />
    );
    expect(screen.getByTestId("mock-transition-group").children.length).toBe(
      mockToasts.length
    );
  });
});
