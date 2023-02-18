import { describe, it, vi } from "vitest";
import { act, renderHook } from "@testing-library/react";
import useToast from "./useToast";

describe("use useToast", () => {
  it("addToast is executed", () => {
    const { result } = renderHook(() => useToast());
    vi.spyOn(result.current, "addToast");

    act(() => {
      result.current.addToast({
        type: "success",
        title: "title",
        description: "desc",
      });
    });

    expect(result.current.addToast).toBeCalledTimes(1);
  });

  it("removeToast is executed", () => {
    const { result } = renderHook(() => useToast());

    vi.spyOn(result.current, "removeToast");

    act(() => {
      result.current.removeToast("1");
    });
    expect(result.current.removeToast).toBeCalledTimes(1);
  });

  it("toasts is defined", () => {
    const { result } = renderHook(() => useToast());

    expect(result.current.toasts).toBeDefined();
    expect(result.current.toasts.length).toBe(0);
  });
});
