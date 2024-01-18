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
    const mapping= {
        "A": "Actual date",
        "B": "Business day",
        "D": "Day",
        "E": "End of month",
        "M": "Month",
        "N": "Next business date",
        "P": "Previous business date",
        "W": "Week",
        "Y": "Year"
      };
    
      const formatData = result.map((element) => {
        if (typeof element === 'string') {
          const key = element.toUpperCase();
          return mapping[key];
        }
        return element;
      });
      return formatData;
}
const formatData = codeToNameGenertor("1D33")
console.log(formatData);
