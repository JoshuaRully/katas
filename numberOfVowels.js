const numberOfVowels = (str) => {
  let vowelList = 'aeiou'
  let vowelsCount = 0;
  
   for(let i = 0; i < str.length ; i++)
    {
      if (vowelList.indexOf(str[i]) !== -1)
      {
        vowelsCount += 1;
      }
    }
    return vowelsCount;
  }

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));