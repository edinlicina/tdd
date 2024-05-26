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

  test("should give errors for negative row", () => {
    const map = generateMap(-1, 5);
    expect(map).toBe("Cannot create map with negative number of rows.");
  });

  test("should give errors for negative columns", () => {
    const map = generateMap(5, -2);
    expect(map).toBe("Cannot create map with negative number of columns.");
  });

  test("should give errors for too big columns", () => {
    const map = generateMap(5, 123);
    expect(map).toBe("Cannot create map with excessive number of columns.");
  });

  test("should give errors for too big rows", () => {
    const map = generateMap(123, 5);
    expect(map).toBe("Cannot create map with excessive number of rows.");
  });
});
