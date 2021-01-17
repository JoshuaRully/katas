const makeCase = function(input, typeStyle) {
  switch(typeStyle) {

    case "camel": 
      for (let i = 0; i < input.length; i++){
        if(input[i] === ' '){
          camelString = input.replace(' ' + input[i+1], `${input[i+1]}`.toUpperCase());
          input = camelString;
        }
      }
      return camelString;
    
    case "pascal":
      for (let i = 0; i < input.length; i++){
        if(input[i] === ' '){
          pascalString = input.replace(' ' + input[i+1], `${input[i+1]}`.toUpperCase());
          input = pascalString;
        }
      }
      return pascalString.charAt(0).toUpperCase() + pascalString.slice(1);
    
    case "snake":
      for (let i = 0; i < input.length; i++){
        if(input[i] === ' '){
          snakeString = input.replace(' ', '_');
          input = snakeString;
        }
      }
      return snakeString;

    case "kebab":
      for (let i = 0; i < input.length; i++){
        if(input[i] === ' '){
          kebabString = input.replace(' ', '-');
          input = kebabString;
        }
      }
      return kebabString;

    case "title":
      const words = input.split(" ");
      for (let i = 0; i < words.length; i++) {
          words[i] = words[i][0].toUpperCase() + words[i].substr(1);
      }
      return words.join(" ");
    
    case "vowel":
      const arrayOne = [];
      for (let i = 0; i < input.length; i++){
        let ch = input.charAt(i);
        if (('aeiou').indexOf(ch) !== -1) {
          arrayOne.push(ch.toUpperCase());
        } else {
          arrayOne.push(ch.toLowerCase());
        }
      }
      return arrayOne.join("");

    case "consonant":
      const arrayTwo = [];
      for (let i = 0; i < input.length; i++){
        let ch = input.charAt(i);
        if (('qwrtpsdfghjklzxcvbnm').indexOf(ch) !== -1) {
          arrayTwo.push(ch.toUpperCase());
        } else {
          arrayTwo.push(ch.toLowerCase());
        }
      }
      return arrayTwo.join("");

    case "upper":
      return input.toUpperCase();

    case "lower":
      return input.toLowerCase();  
}   
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));
/*
OUTPUT
thisIsAString
ThisIsAString
this_is_a_string
this-is-a-string
This Is A String
thIs Is A strIng
THiS iS a STRiNG
THIS_IS_A_STRING
*/