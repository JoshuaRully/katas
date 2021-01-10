const conditionalSum = function (data, type) {
  let evenNums = 0;
  let oddNums = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] % 2 === 0) {
      evenNums = evenNums + data[i];
    } else {
        oddNums = oddNums + data[i]
    }
  }
  if (type === "even") {
    return evenNums;
  } else if (type === "odd") {
    return oddNums;
  }
}

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));