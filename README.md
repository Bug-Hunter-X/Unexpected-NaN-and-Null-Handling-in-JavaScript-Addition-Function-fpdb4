# Unexpected NaN and Null Handling in JavaScript

This repository demonstrates a common, yet subtle, error in JavaScript related to handling `null` and `NaN` values in arithmetic operations.

## The Bug
The `bug.js` file contains a simple addition function that fails to handle `null` and `NaN` values gracefully.  If either input is `NaN`, the function returns `NaN`, which might not be the desired behavior in all situations.

## The Solution
The `bugSolution.js` file provides an improved version of the function that explicitly checks for both `null` and `NaN`, returning 0 in these cases. This ensures more predictable and robust behavior.

## How to Reproduce
1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` in your preferred JavaScript environment.
3. Run the code to observe the different behaviors of the original and improved functions.

## Lessons Learned
* Always consider edge cases when writing functions, especially when dealing with potentially unexpected input values like `null` and `NaN`.
* Explicitly handling these values helps prevent unexpected results and makes your code more reliable.