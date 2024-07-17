//ACTIVITY-I Task-I For Loop
for (let i = 1; i <= 10; i++) console.log(i);

//# Task II
for (let i = 1; i <= 10; i++) console.log(`5 * ${i} = ${5 * i}`);

// ACTIVITY II #Task III
let i = 1;
let sum = 0;
while (i <= 10) {
  sum += i;
  i++;
}
console.log("SUM:-", sum);

//TASK IV
let index = 10;
while (index > 0) {
  console.log(index);
  index--;
}

//ACTIVITY IV #Task V
let doIndex = 1;
do {
  console.log(doIndex);
  doIndex++;
} while (doIndex <= 5);

//#Task VI
let number = 4;
let summation = 1;
let sumIndex = 1;
do {
  summation = summation * sumIndex;
  sumIndex++;
} while (number >= sumIndex);
console.log(summation);

// #Task VII
for (let i = 1; i <= 5; i++) {
  let space = "";
  for (let j = 1; j <= i; j++) {
    space += "*" + " ";
  }
  console.log(space);
}
//ACTIVITY V #Task VIII
const indexArray = [];
for (let i = 1; i <= 10; i++) {
  if (i === 5) continue;
  indexArray.push(i);
}
console.log(indexArray);

//#Task IX
const breakArrayStore = [];
for (let index = 1; index <= 10; index++) {
  if (index === 7) break;
  breakArrayStore.push(index);
}
console.log(breakArrayStore);

//#Prime Number Task
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
const prime = [];
for (let i = 0; i < list.length; i++) {
  let flag = true;
  for (let index = 2; index <= Math.floor(list[i] / 2); index++) {
    if (list[i] % index === 0) {
      flag = false;
    }
  }
  if (flag && list[i] > 1) {
    prime.push(list[i]);
  }
  //Top three
  if (prime.length > 3) {
    break;
  }
}
console.log("Prime", prime);
