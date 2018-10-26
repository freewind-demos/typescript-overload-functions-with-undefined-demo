function reverse(string: string): string;
function reverse<T>(array: T[]): T[];
function reverse<T>(stringOrArray: string | T[]): string | T[] {
  return typeof stringOrArray === "string"
      ? stringOrArray.split("").reverse().join("")
      : stringOrArray.slice().reverse();
}
