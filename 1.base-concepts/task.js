'use strict'
function solveEquation(a, b, c) {
  let arr;
  let diskriminant = b ** 2 - 4 * a * c;
  console.log('diskriminant = ' + diskriminant);
  if (diskriminant < 0) {
    return false;
  } else if (diskriminant == 0) {
      arr = -b / (2 * a);
      console.log(arr);
  }
  if (diskriminant > 0) {
    let roots = [];
    roots.push((-b + Math.sqrt(diskriminant)) / (2 * a));
    roots.push((-b - Math.sqrt(d)) / (2 * a));
      arr = roots;
  }
  return arr;
  console.log(solveEquation(1, 2, 3));
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}
