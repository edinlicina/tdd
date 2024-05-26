import { test, expect } from "@jest/globals";
import { generateMap } from ".";

test("should create map", () => {
  const map = generateMap();
  expect(map).toBe("");
});
