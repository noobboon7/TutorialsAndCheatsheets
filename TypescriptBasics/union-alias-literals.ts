// alias 
type AliasUnionType = number | string

// unionTypes: union is written with a pipe operator  
function combine(input1: AliasUnionType, input2: number | string) {
 let result 
 if (typeof input1 === "number" && typeof input2 === "number"){
  result = input1 + input2
 }
 else{
  result = input1.toString() + input2.toString()
 }
		return result
}

// literal-types: an argument that will say what the data type the output should be.
// function combine(input1: AliasUnionType, input2: AliasUnionType, literalType: 'as-num' | 'as-string');