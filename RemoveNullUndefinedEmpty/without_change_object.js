//Without manipultion of main object
const componentData = {
  name: "ABC",
  location: "Bangalore",
  jobTitle: undefined,
  progress: "Ready to merge",
  validation: null,
  prviousCompany:[],
  hobbies: ["reading", undefined, "traveling"]
};
//pseudo code
/**
 * convert object into array as key value pair
 * Apply filter value with condition also with destructure [key,value] fromat
 * Apply reduce method with empty object
 */
// console.table(Object.values(componentData));
// console.table(Object.keys(componentData));
// console.table(Object.entries(componentData));
const filterObject = Object.entries(componentData)
  .filter(([key, value]) => value !== null && value !== undefined && value.length !== 0)
  .reduce((object, [key, value]) => {
    object[key] = value;
    return object;
  },{});
console.log("Old object", componentData);
console.log("New object", filterObject);
