function calculator(numbers) {
  if (numbers === "") return 0;
  else if (numbers.length === 1 && isNumber(numbers)) return Number(numbers);
}
module.exports = calculator;

function isNumber(numbers) {
  let yes = true;
  let arr = numbers.split(",");

  for (let i = 0; i < arr.length; i++) {
    arr[i] = Number(arr[i]);

    if (Number.isNaN(arr[i])) yes = false;
  }
  return yes;
}
