import { describe, it, vi } from "vitest";
import { render } from "@testing-library/react";
import ToastNotification from "./ToastNotification";
import { IToastProperties } from "../../../interfaces/toast.interface";

vi.mock("../toasts/Toasts", () => {
  return {
    default: vi.fn(({ toasts }: { toasts: IToastProperties[] }) => (
      <>
        {toasts.map((toast) => (
          <div key={toast.id}>{toast.title}</div>
        ))}
      </>
    )),
  };
});

vi.mock("../../../hooks/useToast/useToast", () => {
  return {
    default: vi.fn(() => ({
      toasts: [],
      removeToast: vi.fn(),
    })),
  };
});

describe("<ToastNotification />", () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });
  describe("has the right classes", () => {
    it("when it's not given position prop", () => {
      const screen = render(<ToastNotification />);
      const container = screen.getByTestId("toast-notification-container");
      expect(container).toBeDefined();

      expect(container.classList.contains("right-3")).toBe(true);
      expect(container.classList.contains("bottom-3")).toBe(true);
    });

    it("when it has position prop of bottom-right", () => {
      const screen = render(<ToastNotification position="bottom-right" />);
      const container = screen.getByTestId("toast-notification-container");
      expect(container).toBeDefined();

      expect(container.classList.contains("right-3")).toBe(true);
      expect(container.classList.contains("bottom-3")).toBe(true);
    });

    it("when it has position prop of bottom-middle", () => {
      const screen = render(<ToastNotification position="bottom-middle" />);
      const container = screen.getByTestId("toast-notification-container");
      expect(container).toBeDefined();

      expect(container.classList.contains("left-1/2")).toBe(true);
      expect(container.classList.contains("-translate-x-1/2")).toBe(true);
      expect(container.classList.contains("bottom-3")).toBe(true);
    });

    it("when it has position prop of bottom-left", () => {
      const screen = render(<ToastNotification position="bottom-left" />);
      const container = screen.getByTestId("toast-notification-container");
      expect(container).toBeDefined();

      expect(container.classList.contains("left-3")).toBe(true);
      expect(container.classList.contains("bottom-3")).toBe(true);
    });

    it("when it has position prop of top-left", () => {
      const screen = render(<ToastNotification position="top-left" />);
      const container = screen.getByTestId("toast-notification-container");
      expect(container).toBeDefined();

      expect(container.classList.contains("left-3")).toBe(true);
      expect(container.classList.contains("top-3")).toBe(true);
    });

    it("when it has position prop of top-middle", () => {
      const screen = render(<ToastNotification position="top-middle" />);
      const container = screen.getByTestId("toast-notification-container");
      expect(container).toBeDefined();

      expect(container.classList.contains("left-1/2")).toBe(true);
      expect(container.classList.contains("-translate-x-1/2")).toBe(true);
      expect(container.classList.contains("top-3")).toBe(true);
    });

    it("when it has position prop of top-right", () => {
      const screen = render(<ToastNotification position="top-right" />);
      const container = screen.getByTestId("toast-notification-container");
      expect(container).toBeDefined();

      expect(container.classList.contains("right-3")).toBe(true);
      expect(container.classList.contains("top-3")).toBe(true);
    });
  });
});
