const sumLargestNumbers = (data) => {
  let intOne = 0;
  let intTwo = 0;
  for (let i = 0; i < data.length; i++) { //loop through data array
    if (data[i] > intOne) { //if the data value is larger than the largest value, let intOne equal that value
      intTwo = intOne; 
      intOne = data[i];
    } else if (data[i] > intTwo) { //if the data value is larger than the second largest integer, let intTwo equal that value
      intTwo = data[i];
    } else {
      continue; //keep looping until the two largest integers are found
    }
  }
  return intOne + intTwo;
}
console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));