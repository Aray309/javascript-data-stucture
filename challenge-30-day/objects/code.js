//Activity 1
const object_1 = {
  title: "The avengers",
  author: "Josh Whedan",
  release: "20212",
};
// console.log("OBJECT_1", object_1);
// console.log(object_1.author);
//Activity 2
const books = {
  title: "Eloquent Javascript",
  author: "Marijan Haverbeke",
  book_1: {
    title: "You don't know JS series",
    author: "Kyle Simpon",
  },
  book_2: {
    title: "Javascript:The good parts",
    author: "Dougles crockford",
  },
  method() {
    return `${this.title} - ${this.book_1.title}`;
  },
  method2(params) {
    this.title = params;
    return this.title;
  },
};
// console.log("BOOKS", books.method());
// console.log("Title-change", books.method2("ABCDEF"));
// console.log("OBJECT", books);
for (let key in books) {
  console.log(books[key]);
}
console.log(Object.keys(books));
console.log(Object.values(books));
