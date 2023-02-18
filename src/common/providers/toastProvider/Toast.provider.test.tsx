import { describe, it, vi } from "vitest";
import { fireEvent, render } from "@testing-library/react";
import useToast from "../../hooks/useToast/useToast";
import ToastProvider from "./Toast.provider";

function TestingComponent() {
  const { addToast, removeToast, toasts } = useToast();
  return (
    <div>
      <button
        type="button"
        onClick={() =>
          addToast({
            id: "1",
            type: "success",
            title: "title",
            description: "description",
          })
        }
      >
        Add
      </button>
      <button
        type="button"
        onClick={() =>
          addToast({
            type: "success",
            title: "title",
            description: "description",
          })
        }
      >
        Add Without Id
      </button>
      <button type="button" onClick={() => removeToast("1")}>
        Remove
      </button>
      <div data-testid="testing-children">
        {toasts.map((toast) => (
          <div id={toast.id} key={toast.id}>
            {toast.title}
          </div>
        ))}
      </div>
    </div>
  );
}

vi.mock("nanoid", () => ({ nanoid: () => "123" }));

describe("<ToastProvider />", () => {
  it("renders children component", () => {
    const screen = render(
      <ToastProvider>
        <TestingComponent />
      </ToastProvider>
    );
    expect(screen).toBeDefined();
    expect(screen.container.children.length).toBe(1);
  });

  it("addToast with id increase toast count by one", () => {
    const screen = render(
      <ToastProvider>
        <TestingComponent />
      </ToastProvider>
    );
    expect(screen.getByTestId("testing-children").children.length).toBe(0);
    fireEvent(
      screen.getByRole("button", {
        name: "Add",
      }),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    const { children } = screen.getByTestId("testing-children");
    expect(children.length).toBe(1);
    expect(children[0].textContent).toBe("title");
  });

  it("addToast withiout id increase toast count by one", () => {
    const screen = render(
      <ToastProvider>
        <TestingComponent />
      </ToastProvider>
    );
    expect(screen.getByTestId("testing-children").children.length).toBe(0);
    fireEvent(
      screen.getByRole("button", {
        name: "Add Without Id",
      }),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    const { children } = screen.getByTestId("testing-children");
    expect(children.length).toBe(1);
    expect(children[0].id).toBe("123");
  });

  it("removeToast decrease toast count by one", () => {
    const screen = render(
      <ToastProvider>
        <TestingComponent />
      </ToastProvider>
    );

    fireEvent(
      screen.getByRole("button", {
        name: "Add",
      }),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(screen.getByTestId("testing-children").children.length).toBe(1);

    fireEvent(
      screen.getByRole("button", {
        name: "Remove",
      }),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(screen.getByTestId("testing-children").children.length).toBe(0);
  });

  it("removeToast does not throw an error when toast is empty", () => {
    const screen = render(
      <ToastProvider>
        <TestingComponent />
      </ToastProvider>
    );

    expect(screen.getByTestId("testing-children").children.length).toBe(0);

    fireEvent(
      screen.getByRole("button", {
        name: "Remove",
      }),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(screen.getByTestId("testing-children").children.length).toBe(0);
  });
});
