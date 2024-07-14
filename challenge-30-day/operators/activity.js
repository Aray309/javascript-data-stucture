//ACTIVITY: 1
const operator = {
  add: "ADD",
  sub: "SUBSTRACT",
  mul: "MULTIPLY",
  div: "DIVIDE",
  mod: "MODULUS",
};
function numberTransformation(...switchParams) {
  const [key, value1, value2] = switchParams;
  let result;
  switch (key) {
    case operator.add:
      result = value1 + value2;
      break;
    case operator.sub:
      result = Math.abs(value1 - value2);
      break;
    case operator.mul:
      result = value1 * value2;
      break;
    case operator.div:
      result = value1 / value2;
      break;
    case operator.mod:
      result = value1 % value2;
      break;
    default:
      result = key;
      break;
  }
  return result;
}
console.log(numberTransformation(operator.add, 2, 3)); //5
console.log(numberTransformation(operator.sub, 2, 3)); //1
console.log(numberTransformation(operator.mul, 2, 4)); //8
console.log(numberTransformation(operator.div, 100, 10)); //10
console.log(numberTransformation(operator.mod, 100, 10)); //0
console.log(numberTransformation(undefined, 100, 10)); //undefined

//ACTIVITY-2
let value1 = 5;
let value2 = 10;
value1 -= value2;
console.log(((value1 += value2), value1)); //5 Perfoming the operation and then assigning
console.log(5 - 10); //-5

//ACTIVITY-3
console.log(2 > 3); //false
console.log(3 >= 3); //true
console.log(1 < 1); //false
console.log(1 <= 1); //true

//Activity-4
console.table([2 && 3, 2 || 3, !2]); // 3, 2, false
console.table([2 && 3, undefined || 3, !null]); // 3,3,true

//Activity-5
function checkNumber(num) {
  return num === 0
    ? "Neither Negative or Postive"
    : num > 0
    ? "Positive"
    : "Negative";
}
console.table([checkNumber(2), checkNumber(-2), checkNumber(0)]);
