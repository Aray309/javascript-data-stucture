//ACTIVITY-I Array Creation & Access
//#Task 1
const array = [1, 2, 3, 4, 5];
console.log(array);
//#Task 2
console.log("FIRST : " + array[0] + " " + "LAST: " + array[array.length - 1]);

//ACTIVITY-II Array basic methods
//#Task 3
console.log(array.push(6) + " PUSH  " + array);
//#Task 4
console.log(array.pop() + " POP  " + array);
//#Task 5
console.log(array.shift(0) + " SHIFT " + array);
//#Task 6
console.log(array.unshift(1) + " UNSHIFT " + array);

//ACTIVITY-III
//Task#-7
console.log(
  "MAP",
  [1, 2, 3, 4, 5].map((element) => Math.pow(element, 2))
);
//#Task-8
console.log(
  "FILTER",
  [1, 2, 3, 4, 5].filter((element) => element % 2 === 0)
);
//#Task-9
console.log([1, 2, 3, 4, 5].reduce((acc, cur) => (acc += cur)));
//ACIVITY 5 Array Iteration
//#Task 10
for (let i = 0; i < array.length; i++) {
  console.log("ITERATE", array[i]);
}
//#Task#11
array.forEach((element, index, arr) => {
  console.log("FOREACH", element, index, array);
});
//ACTIVITY-5 Multi-dimensional array
const multiDimensional = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log("2D-Array", multiDimensional);
console.log(multiDimensional[1][2]);
//By Using flatMap
const addWithFlat = multiDimensional.flatMap((element) => element);
console.log("WITH_FLAT_MAP", addWithFlat);

//Perform Addition: Do not use Flat map
let sum = 0;
const add = multiDimensional
  .map((data) =>
    data.reduce((acc, cur) => {
      return acc + cur;
    })
  )
  .reduce((acc, cur) => acc + cur);
console.log("WITHOUT_FLAT_ADD", add);

//flat this array without flat
const flatArray = [];
multiDimensional.map((element) =>
  element.forEach((element) => flatArray.push(element))
);
console.log("FLATARRAY", flatArray);
