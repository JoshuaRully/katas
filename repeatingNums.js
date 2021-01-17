const repeatNumbers = data => {
  let repeatedNums = [];

  for (let i = 0; i < data.length; i++) {
    let num = '';
    
    for (let j = 0; j < data[i][1]; j++) {
      num += data[i][0];
    }
    repeatedNums.push(num);
  }
  return repeatedNums.join(', ');
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));