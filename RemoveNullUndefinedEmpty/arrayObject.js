//Array_Of_Object
const arrayofObject = [
  {
    name: "Abc",
    location: null,
    breakFast: "fruits",
    lunch: undefined,
    allPrice: [],
    pincode: 560016,
  },
  {
    name: "Def",
    location: null,
    breakFast: "Milks with bread",
    lunch: "Rice and Curry",
    allPrice: [99,10],
    pincode: 560017,
  },
];
//Apply logic to seperate Null,Undefined and []
const filterData = arrayofObject.map((item) => {
  const itemObject = Object.entries(item).filter(
    ([key, value]) =>
      value !== null && value !== undefined && value.length !== 0
  ).reduce((currentObject,[key,value])=>{
    currentObject[key]=value
    return currentObject;
  },{});
  return itemObject;
});
console.log("itemObject",filterData);