const removeFromArray = (arr, ...items) => {
  let tempArr = arr.slice(0);

  for (item of items) {
    let index = tempArr.indexOf(item);
    if (index < 0) {
      continue;
    }
    tempArr.splice(index, 1);
  }

  return tempArr;
};

// Do not edit below this line
module.exports = removeFromArray;
