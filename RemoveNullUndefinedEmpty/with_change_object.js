//manipultion of main object and filter null empty and undefined
const componentData = {
    name: "ABC",
    location: "Bangalore",
    jobTitle: undefined,
    progress: "Ready to merge",
    validation: null,
    prviousCompany:[],
    hobbies: ["reading", undefined, "traveling"]
  };
//First method using loop
for (const key in componentData) {
  if(!componentData[key]){
    delete componentData[key];
  }else if(Array.isArray(componentData[key])){
    if(componentData[key].length===0)
    delete componentData[key];
  }
}
// console.log(componentData);
//Second method using loop

const data = {
    name: "John",
    age: undefined,
    address: {
      city: "New York",
      state: undefined,
    },
    hobbies: ["reading", undefined, "traveling"],
  };
 const removeUndefinedValuesFromObject =(data)=>{
     Object.keys(data).forEach((key) => data[key] === undefined && delete data[key]);
    return data;
 }
 const cleanData = removeUndefinedValuesFromObject(data);
 console.log("Clean_Data",cleanData);
 