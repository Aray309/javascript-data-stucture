(new Promise((resolve,reject)=>{
    let server_data=false;
    const data={
        name:"abc",
        compName:"xyz",
        exp:"n year"
    }
    console.log("Fetching data...")
    setTimeout(()=>{
        if (server_data) {
            resolve(data)
        }else{
            reject({message:"unable to fetch"})
        }
    },3000)
})).then((data)=> console.log(data)).catch((error)=> console.log(error))