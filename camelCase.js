const camelCase = function (input) {
  let camelString = input;
  for (let i = 0; i < input.length; i++){
    if(input[i] === ' '){
      camelString = input.replace(' ' + input[i+1], `${input[i+1]}`.toUpperCase());
      input = camelString;
    }
  }
  return camelString;
}

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));