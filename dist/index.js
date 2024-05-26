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
            map = map + ".";
        }
        map = map + "\n";
    }
    return map;
}
exports.generateMap = generateMap;
function addShip(map, x, y) {
    if (map.indexOf("X") > -1) {
        return "Only one ship is being supported";
    }
    if (x < 0) {
        return "Cannot add ship with negative x coordinate";
    }
    if (y < 0) {
        return "Cannot add ship with negative y coordinate";
    }
    const rows = map.split("\n");
    // Result: [".....", ".....", ".....", ".....", "....."]
    console.log(rows.length);
    if (rows.length - 1 < y) {
        return "Cannot add ship with excessive y coordinate";
    }
    const firstRow = rows.at(0);
    if (firstRow === undefined) {
        return "Error while parsing the map";
    }
    const columns = firstRow.length;
    if (columns < x) {
        return "Cannot add ship with excessive x coordinate";
    }
    const replaced = replaceAt(firstRow, x, "X");
    return replaced + "\n";
}
exports.addShip = addShip;
function replaceAt(source, index, replacement) {
    return (source.substring(0, index) +
        replacement +
        source.substring(index + replacement.length));
}
//# sourceMappingURL=index.js.map