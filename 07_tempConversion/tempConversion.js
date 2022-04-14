const ftoc = function(fTemp) {
  if (!typeof fTemp == "number") return "ERROR";
  let result = ((fTemp - 32) * 0.5556);
  return Math.round(result * 10) / 10;
};

const ctof = function(cTemp) {
  if (!typeof cTemp == "number") return "ERROR";
  let result = ((cTemp * 1.8) + 32);
  return Math.round(result * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
