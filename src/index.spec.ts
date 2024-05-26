import { test, expect, describe } from "@jest/globals";
import { generateMap } from ".";

describe("app", () => {
  test("should create map", () => {
    const map = generateMap(1, 5);
    expect(map).toBe(". . . . .");
  });
  test("should create multiple columns and rows", () => {
    const map = generateMap(5, 5);
    expect(map).toBe(
      ". . . . . \n. . . . . \n. . . . . \n. . . . . \n. . . . . "
    );
  });
});
