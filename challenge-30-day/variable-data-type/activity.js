//Activity 1
var inputValue = 1_23_45_678;
console.log(inputValue);

let stringVal = "xyz";
console.log(stringVal);

//Activity 2
const booleanValue = true;
console.log(booleanValue);
//Activity 3
const numberValue = 123,
  stringValue = "abc",
  boolValue = true,
  objectValue = { numberValue, stringVal, boolValue },
  arrayValue = [1, 2, 3];
(nullValue = null),
  (bigIntValue = 123n),
  (symbol = Symbol()),
  (undefinedValue = undefined);

console.table([
  typeof numberValue, //number
  typeof boolValue, //boolean
  typeof objectValue, //object
  typeof arrayValue, //object
  typeof nullValue, //object
  typeof bigIntValue, //bigInt
  typeof symbol, // symbol
  typeof undefinedValue, //undefined
  typeof function () {}, //function
  typeof class {}, //function
]);

//Activity 4
let binaryNum = 11010101;
let copybinaryNum = binaryNum;
copybinaryNum = 11111111;
console.table([binaryNum, copybinaryNum]);
/* CONCLUSION : When we are initilizing the variable and copy it to another variable
                the copy of variable assign to another variable not exact value
                this will we conclude as copy of value assign not exact value*/

//Activity 5
const companyName = "PQRS";
const serviceName = companyName;
serviceName = "ABCD"; // ERROR:-TypeError: Assignment to constant variable.
