const ticket = [
  { name: "anurag", confired: "yes", trainNo: "15004" },
  { name: "amit", confired: "yes", trainNo: "15004" },
  { name: "praful", confired: "no", trainNo: "15004" },
  { name: "kp", confired: "pending", trainNo: "15004" },
  { name: "vinit", confired: "pending", trainNo: "15004" },
];
const result = ticket.reduce((acc, cur) => {
  (acc[cur.confired] = acc[cur.confired] ?? []).push(cur);
  return acc;
}, {});
console.log(result);
//yes = []
