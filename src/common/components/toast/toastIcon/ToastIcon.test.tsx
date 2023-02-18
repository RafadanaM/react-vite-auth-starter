import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import ToastIcon from "./ToastIcon";

describe("<ToastIcon />", () => {
  it("should render correctly given success type", () => {
    const screen = render(<ToastIcon type="success" />);

    expect(screen.getByTitle("success")).toBeDefined();
  });

  it("should render correctly given error type", () => {
    const screen = render(<ToastIcon type="error" />);

    expect(screen.getByTitle("error")).toBeDefined();
  });

  it("should render correctly given warning type", () => {
    const screen = render(<ToastIcon type="warning" />);

    expect(screen.getByTitle("warning")).toBeDefined();
  });

  it("should render correctly given info type", () => {
    const screen = render(<ToastIcon type="info" />);

    expect(screen.getByTitle("info")).toBeDefined();
  });
});
