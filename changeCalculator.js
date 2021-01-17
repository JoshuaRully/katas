const calculateChange = (total, cash) => {
  let changeNum = cash - total;
  let change = {};
  
  while (changeNum > 0) {
    if (changeNum >= 2000) {
      change.twentyDollar = change.twentyDollar + 1 || 1;
      changeNum -= 2000;
    } else if (changeNum >= 1000) {
      change.tenDollar = change.tenDollar + 1 || 1;
      changeNum -= 1000;
    } else if (changeNum >= 500) {
      change.fiveDollar = change.fiveDollar + 1 || 1;
      changeNum -= 500;
    } else if (changeNum >= 200) {
      change.twoDollar = change.twoDollar + 1 || 1;
      changeNum -= 200;
    } else if (changeNum >= 100) {
      change.oneDollar = change.oneDollar + 1 || 1;
      changeNum -= 100;
    } else if (changeNum >= 25) {
      change.quarter = change.quarter + 1 || 1;
      changeNum -= 25;
    } else if (changeNum >= 10) {
      change.dime = change.dime + 1 || 1;
      changeNum -= 10;
    } else if (changeNum >= 5) {
      change.nickel = change.nickel + 1 || 1;
      changeNum -= 5;
    } else if (changeNum >= 1) {
      change.penny = change.penny + 1 || 1;
      changeNum -= 1;
    }  
  }
  return change;
}
console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));