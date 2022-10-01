const ftoc = (degree) => {
  return Number(((degree - 32) / 1.8).toFixed(1));
};

const ctof = (degree) => {
  return Number((degree * 1.8 + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
