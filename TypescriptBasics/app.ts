// bit more stricter than any core-type
let userInput: unknown;


// never type function is relativity new c.2020, 
// and is meant to stop/break your code so it never returns a value.
// this similar to the void type 
function generateError(message:string, code:number):never { 
 throw {message: message, errorCode: code};
}

// command that with compile your code automatically, but first 
// navigate into the right directory 
// creates a tsconfig file 

// tsc --init 
// combine w/ tsc -w || tsc --watch 

// sourceMap helps simplify the debugging process in larger applications 

//outDir will be the route to where my js file are stored ex. dist

// in the tsconfig you can write watch: true to auto compile your tsc 