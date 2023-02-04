function isValidBracket(str) {
  const openBrackets = ['(', '{', '['];
  const closeBrackets = [')', '}', ']'];

  const brackets = [];

  for (let i = 0; i < str.length; i++) {
      if (openBrackets.includes(str[i])) {
          brackets.push(str[i]);
      } else if (closeBrackets.includes(str[i])) {
          let lastOpenBracket = brackets.pop();
          if (openBrackets.indexOf(lastOpenBracket) !== closeBrackets.indexOf(str[i])) {
              return 'not valid';
          }
      }
  }
  return brackets.length === 0 ? 'valid' : 'not valid';
};

console.log(isValidBracket("(")); 
console.log(isValidBracket("()[]{]"));
console.log(isValidBracket("(){[]"));
console.log(isValidBracket("([{}])(){}"));
console.log(isValidBracket("(){()}[]"));
console.log(isValidBracket("]"));