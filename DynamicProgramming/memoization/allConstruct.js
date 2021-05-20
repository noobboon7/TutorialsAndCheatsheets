/* 
Write a function that accepts a target string and an array of strings. 

The function should return a 2D array containing all of the ways that the target can be constructed by concatenating elements of the wordBank array.
Each element of teh 2D array should represent one combination that constructs the target.

You may reuse elements of wordBank as many times as needed.
*/

const allConstruct = (target, wordBank, memo={}) => {
  if(target in memo) return memo[target];
  if (target === '') return [[]];

  const result = [];

  for (const word of wordBank) {
    if(target.indexOf(word) === 0){
      const suffix = target.slice(word.length);
      const suffixWays = allConstruct(suffix, wordBank, memo);
      const targetWays = suffixWays.map(wayArray => [word, ...wayArray]);
      result.push(...targetWays);
    }
  }

  memo[target] = result; 
  return result
}

console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
console.log(allConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));
console.log(
	allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"]),
);