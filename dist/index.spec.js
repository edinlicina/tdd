"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const globals_1 = require("@jest/globals");
const _1 = require(".");
(0, globals_1.test)("should create map", () => {
    const map = (0, _1.generateMap)();
    (0, globals_1.expect)(map).toBe("");
});
//# sourceMappingURL=index.spec.js.map