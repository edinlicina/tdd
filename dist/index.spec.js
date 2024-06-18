"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const _1 = require(".");
(0, globals_1.describe)("map", () => {
    (0, globals_1.test)("should create map", () => {
        const map = (0, _1.generateMap)(1, 5);
        (0, globals_1.expect)(map).toBe(".....\n");
    });
    (0, globals_1.test)("should create multiple columns and rows", () => {
        const map = (0, _1.generateMap)(5, 5);
        (0, globals_1.expect)(map).toBe(".....\n.....\n.....\n.....\n.....\n");
    });
    (0, globals_1.test)("should give errors for negative row", () => {
        const map = (0, _1.generateMap)(-1, 5);
        (0, globals_1.expect)(map).toBe("Cannot create map with negative number of rows.");
    });
    (0, globals_1.test)("should give errors for negative columns", () => {
        const map = (0, _1.generateMap)(5, -2);
        (0, globals_1.expect)(map).toBe("Cannot create map with negative number of columns.");
    });
    (0, globals_1.test)("should give errors for too big columns", () => {
        const map = (0, _1.generateMap)(5, 123);
        (0, globals_1.expect)(map).toBe("Cannot create map with excessive number of columns.");
    });
    (0, globals_1.test)("should give errors for too big rows", () => {
        const map = (0, _1.generateMap)(123, 5);
        (0, globals_1.expect)(map).toBe("Cannot create map with excessive number of rows.");
    });
});
(0, globals_1.describe)("add ship", () => {
    (0, globals_1.test)("should add ship to map with one row and 5 columns", () => {
        const map = (0, _1.generateMap)(1, 5);
        const editedMap = (0, _1.addShip)(map, 1, 0);
        (0, globals_1.expect)(editedMap).toBe(".X...\n");
    });
    (0, globals_1.test)("should add ship to map with 5 rows and 5 columns", () => {
        const map = (0, _1.generateMap)(5, 5);
        const editedMap = (0, _1.addShip)(map, 3, 2);
        (0, globals_1.expect)(editedMap).toBe(".....\n.....\n...X.\n.....\n.....\n");
    });
    (0, globals_1.test)("should only contain one ship max", () => {
        const map = (0, _1.generateMap)(5, 5);
        const editedMap = (0, _1.addShip)(map, 3, 2);
        const finalMap = (0, _1.addShip)(editedMap, 4, 2);
        (0, globals_1.expect)(finalMap).toBe("Only one ship is being supported");
    });
    (0, globals_1.test)("should return error with negative x coordinate", () => {
        const map = (0, _1.generateMap)(5, 5);
        const editedMap = (0, _1.addShip)(map, -3, 2);
        (0, globals_1.expect)(editedMap).toBe("Cannot add ship with negative x coordinate");
    });
    (0, globals_1.test)("should return error with negative y coordinate", () => {
        const map = (0, _1.generateMap)(5, 5);
        const editedMap = (0, _1.addShip)(map, 3, -2);
        (0, globals_1.expect)(editedMap).toBe("Cannot add ship with negative y coordinate");
    });
    (0, globals_1.test)("should return error with excessive x coordinate", () => {
        const map = (0, _1.generateMap)(5, 5);
        const editedMap = (0, _1.addShip)(map, 6, 2);
        (0, globals_1.expect)(editedMap).toBe("Cannot add ship with excessive x coordinate");
    });
    (0, globals_1.test)("should return error with excessive y coordinate", () => {
        const map = (0, _1.generateMap)(5, 5);
        const editedMap = (0, _1.addShip)(map, 3, 6);
        (0, globals_1.expect)(editedMap).toBe("Cannot add ship with excessive y coordinate");
    });
});
(0, globals_1.describe)("find ship", () => {
    (0, globals_1.test)("should find ship in map with one row and 5 columns", () => {
        const map = (0, _1.generateMap)(1, 5);
        const editedMap = (0, _1.addShip)(map, 1, 0);
        const result = (0, _1.findShip)(editedMap);
        (0, globals_1.expect)(result).toBe("Spaceship has been found!");
    });
    (0, globals_1.test)("should not find spaceship", () => {
        const map = (0, _1.generateMap)(5, 5);
        const result = (0, _1.findShip)(map);
        (0, globals_1.expect)(result).toBe("Spaceship lost forever.");
    });
});
//# sourceMappingURL=index.spec.js.map