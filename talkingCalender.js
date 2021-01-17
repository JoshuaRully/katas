const talkingCalendar = date => {
  let year = date.slice(0, 4);
  let monthNum = date.slice(5, 7);
  let day = date.slice(8, 10);
  
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  let monthName = months[Number(monthNum) - 1];
  //change monthNum to monthName depending on value of monthNum

  if (day[0] === '0') {
    day = day[1];
  }
  if (day === '1' || day === '21' || day === '31') {
    day += 'st';
  } else if (day === '2' || day === '22') {
    day += 'nd';
  } else if (day === '3' || day === '23') {
    day += 'rd';
  } else {
    day += 'th';
  }
  //add appropriate suffix to end of day

  return "" + monthName + " " + day + ", " + year + " ";
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
/*
December 2nd, 2017
November 11th, 2007
August 24th, 1987
*/