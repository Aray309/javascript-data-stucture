//ACTIVITY-I
const name = "xyz",
  age = 21;
// console.log(`${name}- ${age}`);
//ACTIVITY-II
const needtoDestruct = [1, 2, 3, 4, 5];
const [one, two, ...rest] = needtoDestruct;
// console.log("ONE " + one + " Two " + two + " Rest " + rest);
const book = {
  title: "Shrimad bhagwad Geeta",
  author: "Maharshi ved vyas",
};
const { title: titl, author: authr } = book;
// console.log("TITLE", titl, "AUTHOR", authr);
const ramayana = "Valmiki";
const rigVed = "Agni rishi";
const yajurVed = "Vayashu rishi";
const samVed = "Aditya rishi";
const attharvVed = "Agira rishi";
const mahabharata = "Maharshi ved vayas";

const traditionalBook = new Object({
  ramayana,
  rigVed,
  yajurVed,
  samVed,
  attharvVed,
});
const blank = {};
console.log(
  "ASSIGN_TO_BLANK",
  Object.assign(blank, { ramayana }, { mahabharata })
);
const traditionalBook_1 = Object.create(traditionalBook);
console.log(traditionalBook === traditionalBook_1);
