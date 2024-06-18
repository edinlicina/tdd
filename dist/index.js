"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findShip = exports.addShip = exports.generateMap = void 0;
const map = generateMap(5, 5);
const editedMap = addShip(map, 3, 2);
console.log(editedMap);
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
    const rows = map.split("\n").filter((s) => s.length > 0);
    // Result: [".....", ".....", ".....", ".....", "....."]
    if (rows.length < y) {
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
    let rowIndex = 0;
    const editedMap = [];
    for (let index = rows.length - 1; index >= 0; index--) {
        const row = rows.at(index);
        if (rowIndex === y) {
            const replaced = replaceAt(firstRow, x, "X");
            editedMap.push(replaced);
        }
        else {
            editedMap.push(row);
        }
        rowIndex++;
    }
    return editedMap.join("\n") + "\n";
}
exports.addShip = addShip;
function replaceAt(source, index, replacement) {
    return (source.substring(0, index) +
        replacement +
        source.substring(index + replacement.length));
}
function findShip(map) {
    if (map.indexOf("X") === -1) {
        return "Spaceship lost forever.";
    }
    else {
        return "Spaceship has been found!";
    }
}
exports.findShip = findShip;
//# sourceMappingURL=index.js.map