export function generateMap(rows: number, columns: number) {
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
