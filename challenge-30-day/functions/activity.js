//ACTIVITY 1 Function_Declaration # Task-1
function addEven(num) {
  if (num === 0) return "Neither odd nor even";
  return num % 2 === 0 ? "Even" : "Odd";
}
console.log(addEven(3));

//#Task 2
function square(num) {
  return Math.pow(num, 2);
}
console.log(square(10));

//ACTIVITY 2 Function_Expression # Task 3
const expression_1 = function (value_1, value_2) {
  return value_1 > value_2 ? value_1 : value_2;
};
console.log(expression_1(2, 3));

//#Task 4
const expression_2 = function (value_1, value_2) {
  return value_1 + " " + value_2;
};
console.log(expression_2("abc", "xyz"));

//ACTIVITY 3 Arrow Function #Task 5

const arrowFunc = (value_1, value_2) => {
  return value_1 + value_2;
};
console.log("Arrow_Sum", arrowFunc(10, 20));
//#Task 6
const arrowFunc_1 = function (params, char) {
  let index = 0;
  let flag = false;
  function helper(index) {
    if (params.charAt(index) === char) return (flag = true);
    if (index === params.length - 1) return flag;
    index++;
    return helper(index);
  }
  return helper(index);
};

console.log("ARROW_CHAR", arrowFunc_1("abcdefghi", "z"));

//ACTIVITY_4 Higher order function #Task-7
function default_1(value_1, value_2 = 10) {
  return value_1 * value_2;
}
console.log("DEFAULT-1", default_1(20));

//#Task-8
function default_2(name, age = 21) {
  return name + "Age :" + age;
}
console.log(default_2("PQR"));
//ACTIVITY_5 Higher order function #Task-9
function callBack(name) {
  console.log("Hi call back " + name);
}
function higher(callBack, num) {
  for (let index = 0; index < num; index++) {
    callBack();
  }
}
higher(callBack.bind(this, "kumar"), 3);

//#Task-10
function callBack_1() {
  return 10;
}
function callBack_2() {
  return 100;
}
function higherOrder(fun1, fun2, number) {
  const value_1 = fun1();
  const result = value_1 + fun2() + number;
  return result;
}
console.log("Act-10", higherOrder(callBack_1, callBack_2, 1000));
