/* 
Write a function that accepts a target string and an array of strings. 

The function should return a boolean indicating whether or not the "target" can be constructed by concatenating elements of the "wordBank" array.

You may reuse elements of 'wordBank' as many times as needed.
*/

const canConstruct = (target, wordBank, memo={}) => {
  if (target in memo) return memo[target];
  if (target === '') return true;

  for (const word of wordBank) {
    //check if the current word that you are iterating, is a prefix
    if(target.indexOf(word) === 0 ){
      const suffix = target.slice(word.length);
      if (canConstruct(suffix, wordBank, memo)){
        memo[target] = true
        return true; 
      } 
    }
  }

  memo[target] =  false; 
  return false;
}


console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
console.log(canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]));
console.log(canConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"]));
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeef", ["e", "ee", "eee", "eeee", "eeeee", "eeeeee"]));