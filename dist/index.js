"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateMap = void 0;
function generateMap(rows, columns) {
    if (columns < 0) {
        return "Cannot create map with negative number of columns.";
    }
    if (rows < 0) {
        return "Cannot create map with negative number of rows.";
    }
    if (rows > 10) {
        return "Cannot create map with excessive number of rows.";
    }
    if (columns > 10) {
        return "Cannot create map with excessive number of columns.";
    }
    return "";
}
exports.generateMap = generateMap;
//# sourceMappingURL=index.js.map