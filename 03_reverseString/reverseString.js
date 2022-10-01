const reverseString = function (str) {
  let reverseStr = [];
  str.split("").forEach((char) => {
    reverseStr.unshift(char);
  });

  return reverseStr.join("");
};

// Do not edit below this line
module.exports = reverseString;
