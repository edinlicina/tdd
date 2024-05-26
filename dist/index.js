"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addShip = exports.generateMap = void 0;
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
    let map = "";
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
            map = map + ". ";
        }
        map = map + "\n";
    }
    return map;
}
exports.generateMap = generateMap;
function addShip(map, x, y) {
    return "";
}
exports.addShip = addShip;
//# sourceMappingURL=index.js.map