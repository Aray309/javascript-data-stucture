// You Create Proxy with two parameter target and handler
const user = {
  name: "Anurag K Ray",
  designation: "Frontend Development",
  employeeId: "1234567",
};
const handler = {
  get(target, props, receiver) {
    console.log("target", target, "props", props, "receiver", receiver);
    if (props === "name") {
      return (target["name"] = "Anurag");
    }
  },
};
const proxy = new Proxy(user, handler);
console.log(proxy.name);
