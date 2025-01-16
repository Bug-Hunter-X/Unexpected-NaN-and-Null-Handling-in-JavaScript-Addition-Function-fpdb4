function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null inputs
  }
  return a + b; // Basic addition
}

console.log(foo(null, 5)); // Output: null
console.log(foo(2, null)); // Output: null
console.log(foo(2, 3));   // Output: 5

//Unexpected behavior: Consider the case where only one of the parameters is NaN
console.log(foo(NaN, 5)); //Output: NaN
console.log(foo(2, NaN)); //Output: NaN

//The unexpected behavior is that if we have one NaN then it returns NaN
//Solution: check for NaN values and handle it appropriately

function foo2(a,b){
    if(a === null || b === null || isNaN(a) || isNaN(b)){
        return 0; //Handle null and NaN appropriately
    }
    return a + b;
}

console.log(foo2(NaN, 5)); // Output: 0
console.log(foo2(2, NaN)); // Output: 0
console.log(foo2(null, 5));//Output: 0
console.log(foo2(2, 3));   // Output: 5