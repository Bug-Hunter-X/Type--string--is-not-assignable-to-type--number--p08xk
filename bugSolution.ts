function add(a: number, b: number): number {
  return a + b;
}

function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function addSafe(a: any, b: any): number {
  if (isNumber(a) && isNumber(b)) {
    return a + b;
  } else {
    console.error("Arguments are not numbers");
    return 0; // or throw an error
  }
}

let result1 = addSafe(10, 20); // Works fine
let result2 = addSafe("hello", "world"); // Handles strings gracefully
let result3 = addSafe(10, "world"); // Handles mixed types gracefully