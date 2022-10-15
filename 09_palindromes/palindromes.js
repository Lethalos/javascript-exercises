const palindromes = function (str) {
  const regex = /[^a-z0-9]/gi;
  const replaced = str.replace(regex, "").toLowerCase();

  for (let i = 0; i < replaced.length; i++) {
    if (replaced[i] != replaced[replaced.length - (i + 1)]) {
      return false;
    }
  }

  return true;
};
// Do not edit below this line
module.exports = palindromes;
