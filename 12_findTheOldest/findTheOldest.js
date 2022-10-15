const findTheOldest = function (people) {
  let maxYear = 0;
  let oldest;
  people.forEach((person) => {
    if (person.yearOfDeath == undefined) {
      let date = new Date();
      person.yearOfDeath = date.getFullYear();
    }
    let year = person.yearOfDeath - person.yearOfBirth;
    if (year > maxYear) {
      maxYear = year;
      oldest = person;
    }
  });

  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
