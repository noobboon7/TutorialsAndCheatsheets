// example of explicitly saying will be the expected output
function add(n1: number, n2: number): number {
 return n1 + n2
}

// Void return type below
// void function is a function without a return 

function printResult(num:number) { //:void
 console.log(`Result:  ${num}`)
}

printResult(add(5,5 ))

// declaring variables as functions 

// this example tell Ts exactly what kind of function to expect 
let combineVal: (a: number, b: number) => number

// this example tell TS to expect a function, but not what kind
//  the example below excepts any function including void functions 
// this would defeat the purpose of being more specific using TS
// ********** //let combineVal: Function //***************//
