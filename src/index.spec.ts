import { test, expect, describe } from "@jest/globals";
import { addShip, generateMap } from ".";

describe("map", () => {
  test("should create map", () => {
    const map = generateMap(1, 5);
    expect(map).toBe(". . . . . \n");
  });

  test("should create multiple columns and rows", () => {
    const map = generateMap(5, 5);
    expect(map).toBe(
      ". . . . . \n. . . . . \n. . . . . \n. . . . . \n. . . . . \n"
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

describe("add ship", () => {
  test("should add ship to map with one row and 5 columns", () => {
    const map = generateMap(1, 5);
    const editedMap = addShip(map, 1, 0);
    expect(editedMap).toBe(". X . . . \n");
  });

  test("should add ship to map with 5 rows and 5 columns", () => {
    const map = generateMap(5, 5);
    const editedMap = addShip(map, 3, 2);
    expect(editedMap).toBe(
      ". . . . . \n. . . . . \n. . . X . \n. . . . . \n. . . . . \n"
    );
  });

  test("should only contain one ship max", () => {
    const map = generateMap(5, 5);
    const editedMap = addShip(map, 3, 2);
    const finalMap = addShip(editedMap, 4, 2);
    expect(finalMap).toBe("Only one ship is being supported");
  });

  test("should return error with negative x coordinate", () => {
    const map = generateMap(5, 5);
    const editedMap = addShip(map, -3, 2);
    expect(editedMap).toBe("Cannot add ship with negative x coordinate");
  });

  test("should return error with negative y coordinate", () => {
    const map = generateMap(5, 5);
    const editedMap = addShip(map, 3, -2);
    expect(editedMap).toBe("Cannot add ship with negative y coordinate");
  });
  test("should return error with excessive x coordinate", () => {
    const map = generateMap(5, 5);
    const editedMap = addShip(map, 6, 2);
    expect(editedMap).toBe("Cannot add ship with excessive x coordinate");
  });
  test("should return error with excessive y coordinate", () => {
    const map = generateMap(5, 5);
    const editedMap = addShip(map, 3, 6);
    expect(editedMap).toBe("Cannot add ship with excessive y coordinate");
  });
});
