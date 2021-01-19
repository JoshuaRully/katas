const urlDecode = function(text) {
  text = text.trim();
  obj = {};
  for (let i = 0; i < text.length; i++){
    if (text[i] === '='){
      text.key.push(obj) = text.substring(0, i);
      text.value.push(obj) = text.substring(i);
    } 
  } 
  return text;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);