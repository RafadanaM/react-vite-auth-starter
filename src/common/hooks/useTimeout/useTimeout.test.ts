import { describe, it, beforeEach, vi } from "vitest";
import { renderHook } from "@testing-library/react";
import useTimeout from "./useTimeout";

const delay = 1000;

describe("use Timeout", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.resetAllMocks();
    vi.useRealTimers();
  });

  it("has default delay of 500ms", () => {
    const mockFn = vi.fn();
    const { result } = renderHook(() => useTimeout(mockFn));
    expect(result.current).toBe(undefined);
    expect(mockFn).toBeCalledTimes(0);
    vi.advanceTimersByTime(500);
    expect(mockFn).toBeCalledTimes(1);
  });

  it("it does not execute function before delay", () => {
    const mockFn = vi.fn();
    const { result } = renderHook(() => useTimeout(mockFn, delay));
    expect(result.current).toBe(undefined);
    expect(mockFn).toBeCalledTimes(0);
  });

  it("it execute function after delay", () => {
    const mockFn = vi.fn();

    const { result } = renderHook(() => useTimeout(mockFn, delay));
    expect(result.current).toBe(undefined);
    vi.advanceTimersByTime(delay);
    expect(mockFn).toBeCalledTimes(1);
  });
});
