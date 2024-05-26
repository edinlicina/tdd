"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const _1 = require(".");
(0, globals_1.describe)("app", () => {
    (0, globals_1.test)("should create map", () => {
        const map = (0, _1.generateMap)(1, 5);
        (0, globals_1.expect)(map).toBe(". . . . .");
    });
    (0, globals_1.test)("should create multiple columns and rows", () => {
        const map = (0, _1.generateMap)(5, 5);
        (0, globals_1.expect)(map).toBe(". . . . . \n. . . . . \n. . . . . \n. . . . . \n. . . . . ");
    });
});
//# sourceMappingURL=index.spec.js.map