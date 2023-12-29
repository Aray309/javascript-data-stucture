const promise = new Promise(function (resolve, reject) {
  let condition = false;
  console.log("Data Fetching is in Progress...");
  setTimeout(() => {
    console.log("your Data is Below");
    if (condition) {
      const payload = {
        name: "Anurag K Ray",
        companyName: "PwC",
      };
      resolve(payload);
    } else {
      console.log("Occuring some error");
      const payload = {
        error: "Not Able to Fetch",
      };
      reject(payload);
    }
  }, 3000);
});
promise
  .then((response) => console.log(response))
  .catch((error) => console.log(error));
