function apiCall(){
  return new Promise((resolve,reject)=>{
    let server_response=true;
    console.log("Fetching Data...")
    setTimeout(()=>{
      const data = {
        name:"anurag",
        comp:"XYX",
        duration:"3Year"
      }
      if(server_response){
        resolve(data);
      }else{
        reject({message:"unable to find data"})
      }
    },3000)
  })
}
const fetchData = async()=>{
  try {
    const response = await apiCall();
    console.log(response);
  } catch (error) {
    console.log(error)
  }
}
fetchData()