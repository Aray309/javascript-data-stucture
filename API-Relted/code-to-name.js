const codeToNameGenertor=(input)=>{
    const result=[];
    let current="";
    input.split("").forEach((element)=>{
        if(!isNaN(element)){
            current += element;
        }else{
            if(current !==''){
                result.push(Number(current));
                current="";
            }
            result.push(element);
        }
    })
    if(current){
        result.push(Number(current))
    }
    const formatData = result.map((element)=>{
        if(!isNaN(element)){
            return element;
        }else if(element==="D"){
            return "Days"
        }
    });
    return formatData
}
const formatData = codeToNameGenertor("1D33")
console.log(formatData);
