export function mapStringToArray(str) {
  return str
    .split(/\n/)
    .filter(Boolean)
    .slice(1)
    .map((item) => item.split(" ").map((value) => +value))
}
