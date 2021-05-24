/* 
Write a function that accepts a target string and an array of strings. 

The function should return a boolean indicating whether or not the "target" can be constructed by concatenating elements of the "wordBank" array.

You may reuse elements of 'wordBank' as many times as needed.
*/

const canConstruct = (target, wordBank) => {
	const table = Array(target.length+1).fill(false);
  table[0] = true;

  for (let i = 0; i < target.length; i++) {
    if (table[i] === true){
      for (const word of wordBank) {
        // if "word" matches the characters starting at position i 
        if (target.slice(i, i+word.length) === word){
          table[i+word.length] = true;
        }

      }
    }
  }
  return table[target.length];
};


console.log(canConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
console.log(canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));
console.log(
	canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"]),
);
