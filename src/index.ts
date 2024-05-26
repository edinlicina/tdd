export function generateMap(rows: number, columns: number): string {
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

export function addShip(map: string, x: number, y: number): string {
  return "";
}
