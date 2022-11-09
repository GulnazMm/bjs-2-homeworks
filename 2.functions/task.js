// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = Infinity;
  max = -Infinity;
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max)
      max = arr[i];
    if (arr[i] < min)
      min = arr[i];
    sum = arr[i] + sum;
  }
  avg = Number((sum / arr.length).toFixed(2));
  return { min: min, max: max, avg: avg };
}

// Задание 2
function worker(arr) {
  let sum;
  for (let i = 0; i < arr.length; i++){
  sum = sum + arr[i];
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max;
  for (let i = 0; i < arrOfArr.length; i++) {
    let sum = worker(arrOfArr[i]);
    if (sum > max) {
      max = sum;
    }
  }

  return max;
}

// Задание 3
function worker2(arr) {
  let result =  getArrayParams(arr);
 return Math.abs(result.max - result.min);
}
makeWork (arrOfArr, worker2);

