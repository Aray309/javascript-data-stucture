//  ACTIVITY-I IF-ELSE-STATEMENT
function checkNumber(num) {
  if (num > 0) return "Number is positive";
  else if (num < 0) return "Number is negative";
  else return "Number is neither postive nor negative";
}
checkNumber(-12);

//# Task-2
function isEligible(age) {
  if (age >= 18) return "Person is eligible to vote";
  else return "Person is not eligible to vote";
}
isEligible(11);

//ACTIVITY-2 #Task-3
function largest(...number) {
  const [first, second, third] = number;
  if (first > second) {
    if (first > third) return first;
    else return third;
  } else {
    if (second > third) return second;
    else return third;
  }
}
largest(1, -12, -3);

//ACTIVITY-3 #Task-4
function dayDisplay(key) {
  let result;
  switch (key) {
    case 1:
      result = "Monday";
      break;
    case 2:
      result = "Tuesday";
      break;
    case 3:
      result = "Wednessday";
      break;
    case 4:
      result = "Thursday";
      break;
    case 5:
      result = "Friday";
      break;
    case 6:
      result = "Saturday";
      break;
    case 7:
      result = "Sunday";
      break;
    default:
      console.log("An Error occure");
      break;
  }

  return result;
}
dayDisplay(7);

//#Task-5
function gradeCalculation(number) {
  let grade;
  switch (number > 0) {
    case number >= 90:
      grade = "Grade A";
      break;
    case number > 80 && number < 90:
      grade = "Grade B";
      break;
    case number > 70 && number < 80:
      grade = "Grade C";
      break;
    case number > 60 && number < 70:
      grade = "Grade D";
      break;
    case number > 50 && number < 60:
      grade = "Grade E";
      break;
    default:
      grade = "Fail";
      break;
  }
  return grade;
}
gradeCalculation(50);

//Activity-4 #Task-6
function oddEven(num) {
  const value =
    num < 0 || num === 0
      ? "Cannot consider this number"
      : num % 2 === 0
      ? "Number is even"
      : "Number is odd";
  return value;
}
oddEven(1);

//ACTIVITY 5 #Task-7
function isLeapYear(year) {
  const check =
    (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
      ? "Leap Year"
      : "Not Leap Year";
  return check;
}
isLeapYear(2100);
