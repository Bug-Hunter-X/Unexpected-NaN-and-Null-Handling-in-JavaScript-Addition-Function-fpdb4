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