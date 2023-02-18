import { fireEvent, render } from "@testing-library/react";
import { describe, it, vi } from "vitest";
import { createRef } from "react";
import Toast, { IToast } from "./Toast";
import { IToastIcon } from "../toastIcon/ToastIcon";

vi.mock("../toastIcon/ToastIcon", () => {
  return {
    default: vi.fn(({ type }: IToastIcon) => (
      <div data-testid="mocked-icon">{type}</div>
    )),
  };
});

vi.mock("../../../hooks/useTimeout/useTimeout", () => {
  return {
    default: vi.fn((cb) =>
      setTimeout(() => {
        cb();
      }, 500)
    ),
  };
});

describe("<Toast />", () => {
  beforeEach(() => {
    // tell vitest we use mocked time
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.restoreAllMocks();
    vi.useRealTimers();
  });

  const mockedProps: IToast = {
    id: "1",
    nodeRef: createRef(),
    type: "success",
    title: "title",
    description: "description",
    removeToast: vi.fn(),
  };

  it("renders correctly", () => {
    const screen = render(
      <Toast
        id={mockedProps.id}
        nodeRef={mockedProps.nodeRef}
        type={mockedProps.type}
        title={mockedProps.title}
        description={mockedProps.description}
        removeToast={mockedProps.removeToast}
      />
    );

    expect(screen).toBeDefined();
    expect(screen.getByText(mockedProps.title).textContent).toBe(
      mockedProps.title
    );
    expect(screen.getByText(mockedProps.description).textContent).toBe(
      mockedProps.description
    );
    expect(
      screen.getByTestId("toast-border").classList.contains("bg-green-500")
    ).toBe(true);
    expect(screen.getByTestId("mocked-icon").textContent).toBe(
      mockedProps.type
    );
    expect(screen.getByRole("button").onclick).toBeDefined();
    expect(mockedProps.removeToast).toBeCalledTimes(0);
  });

  it("executes remove prop function on click", () => {
    const mockRemoveFn = vi.fn();
    const screen = render(
      <Toast
        id={mockedProps.id}
        nodeRef={mockedProps.nodeRef}
        type={mockedProps.type}
        title={mockedProps.title}
        description={mockedProps.description}
        removeToast={mockRemoveFn}
      />
    );
    fireEvent(
      screen.getByRole("button"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(mockRemoveFn).toBeCalledTimes(1);
  });

  it("executes remove prop function after delay", () => {
    const mockRemoveFn = vi.fn();
    render(
      <Toast
        id={mockedProps.id}
        nodeRef={mockedProps.nodeRef}
        type={mockedProps.type}
        title={mockedProps.title}
        description={mockedProps.description}
        removeToast={mockRemoveFn}
      />
    );
    vi.advanceTimersByTime(1000);

    expect(mockRemoveFn).toBeCalledTimes(1);
  });
});
