const makeCase = (string, format) => {
  let caseString = string;
  const precedence = {
    first: ['camel', 'pascal', 'snake', 'kebab', 'title'],
    second: ['vowel, consonant'],
    third: ['upper', 'lower']
  }
  let order = {first: [], second: [], third: []};
  Array.isArray(format) === true ? format = format : format = [format];
  for (let c of format){
    if (precedence.first.includes(c)){
      order.first.push(c);
    } else if (precedence.second.includes(c)){
      order.second.push(c);
    } else {
      order.third.push(c);
    }
  }
  for (let o in order){
    order[o].forEach((e) => {
      switch(e){
        case 'camel':
          caseString = camelCase(caseString);
          break;
        case 'pascal':
          caseString = pascalCase(caseString);
          break;
        case 'snake':
          caseString = snakeCase(caseString);
          break;
        case 'kebab':
          caseString = kebabCase(caseString);
          break;
        case 'title':
          caseString = titleCase(caseString);
          break;
        case 'vowel':
          caseString = vowelCase(caseString);
          break;
        case 'consonant':
          caseString = consonantCase(caseString);
          break;
        case 'upper':
          caseString = upperCase(caseString);
          break;
        case 'lower':
          caseString = lowerCase(caseString);
          break;
        default:
          caseString = caseString;
      }
    })
  }
  return caseString;
}
const camelCase = (string) => {
  let camelString = string;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      camelString = string.replace(' ' + string[i + 1], `${string[i + 1]}`.toUpperCase());
      string = camelString;
    }
  }
  return camelString;
}

const pascalCase = (string) => {
  let pascalString = string;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      pascalString = string.replace(' ' + string[i + 1], `${string[i + 1]}`.toUpperCase());
      string = pascalString;
    }
  }
  return pascalString.charAt(0).toUpperCase() + pascalString.slice(1);
}

const snakeCase = (string) => {
  let snakeString = string;
  for (let i = 0; i < string.length; i++){
    if(string[i] === ' '){
      snakeString = string.replace(' ', '_');
      string = snakeString;
    }
  }
  return snakeString;
}

const kebabCase = (string) => {
  let kebabString = string;
  for (let i = 0; i < string.length; i++){
    if(string[i] === ' '){
      kebabString = string.replace(' ', '-');
      string = kebabString;
    }
  }
  return kebabString;
}

const titleCase = (string) => {
  const words = string.split(" ");
  for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  return words.join(" ");
}

const vowelCase = (string) => {
  const arrayOne = [];
  for (let i = 0; i < string.length; i++){
    let ch = string.charAt(i);
    if (('aeiou').indexOf(ch) !== -1) {
      arrayOne.push(ch.toUpperCase());
    } else {
      arrayOne.push(ch.toLowerCase());
    }
  }
  return arrayOne.join("");
}

const consonantCase = (string) => {
  const arrayTwo = [];
  for (let i = 0; i < string.length; i++){
    let ch = string.charAt(i);
    if (('qwrtpsdfghjklzxcvbnm').indexOf(ch) !== -1) {
      arrayTwo.push(ch.toUpperCase());
    } else {
      arrayTwo.push(ch.toLowerCase());
    }
  }
  return arrayTwo.join("");
}

const upperCase = (string) => {
  return string.toUpperCase();
}

const lowerCase = (string) => {
  return string.toLowerCase();
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));