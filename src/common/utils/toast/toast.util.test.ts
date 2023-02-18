import { describe, it } from "vitest";
import { getAnimation } from "./toast.util";

describe("execute getAnimation", () => {
  it("returns correct animation positions for bottom-left", () => {
    const { enter, enterActive, exit, exitActive } =
      getAnimation("bottom-left");

    expect(enter).toBe("-translate-x-full");
    expect(enterActive).toBe("-translate-x-px");
    expect(exit).toBe("-translate-x-0");
    expect(exitActive).toBe("-translate-x-full");
  });

  it("returns correct animation positions for top-left", () => {
    const { enter, enterActive, exit, exitActive } = getAnimation("top-left");

    expect(enter).toBe("-translate-x-full");
    expect(enterActive).toBe("-translate-x-px");
    expect(exit).toBe("-translate-x-0");
    expect(exitActive).toBe("-translate-x-full");
  });

  it("returns correct animation positions for bottom-right", () => {
    const { enter, enterActive, exit, exitActive } =
      getAnimation("bottom-right");

    expect(enter).toBe("translate-x-full");
    expect(enterActive).toBe("translate-x-px");
    expect(exit).toBe("translate-x-0");
    expect(exitActive).toBe("translate-x-full");
  });

  it("returns correct animation positions for top-right", () => {
    const { enter, enterActive, exit, exitActive } = getAnimation("top-right");

    expect(enter).toBe("translate-x-full");
    expect(enterActive).toBe("translate-x-px");
    expect(exit).toBe("translate-x-0");
    expect(exitActive).toBe("translate-x-full");
  });

  it("returns correct animation positions for top-middle", () => {
    const { enter, enterActive, exit, exitActive } = getAnimation("top-middle");

    expect(enter).toBe("-translate-y-full");
    expect(enterActive).toBe("-translate-y-px");
    expect(exit).toBe("-translate-y-0");
    expect(exitActive).toBe("-translate-y-full");
  });

  it("returns correct animation positions for bottom-middle", () => {
    const { enter, enterActive, exit, exitActive } =
      getAnimation("bottom-middle");

    expect(enter).toBe("translate-y-full");
    expect(enterActive).toBe("translate-y-px");
    expect(exit).toBe("translate-y-0");
    expect(exitActive).toBe("translate-y-full");
  });
});
