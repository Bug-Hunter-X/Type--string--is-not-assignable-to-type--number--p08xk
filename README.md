# Type 'string' is not assignable to type 'number'

This repository demonstrates a common type error in TypeScript where a function expects numbers but receives strings.

The `bug.ts` file contains the erroneous code, and the `bugSolution.ts` file contains the corrected code.

## Bug

The bug occurs because the `add` function is defined to accept two numbers as arguments, but the code calls the function with two strings. TypeScript's type system detects this mismatch and throws an error.

## Solution

The solution is to ensure that the function's arguments are of the correct type before passing them to the function. This can be done using type guards or by explicitly converting the strings to numbers.