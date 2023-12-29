//Primitive data types in javascript
//boolean,number,bigNumber,string,null,undefined,symbol
const str = "Anurag_K_Ray" //typeof string
const num= 1; //typeof number
const bigNum = 1n;//typeof bigint
const bool= false;//typeof boolean
const nu=null;//typeof object
const und = undefined;//typeof undefined
const symb=Symbol("My Symbol"); //typeof symbol but it will be unique.
console.log(typeof symb);
const anurag={
    name:"anurag",
    degree:null,
    designation:undefined,
    location:"bangalore"
}
for (const key in anurag) {
    if(!anurag[key]){
        delete anurag[key];
    }
}
console.log(anurag);