const findTheOldest = function(arr) {

    return arr.reduce((oldest, current) => {
        // Get year of death, if yearOfDeath key not found then get present year
        const died = Object.keys(current).includes("yearOfDeath") ? current.yearOfDeath : (new Date()).getFullYear();

        if(died - current.yearOfBirth >= oldest.age){
            return {name: current.name, age: died - current.yearOfBirth};
        }else{
            return oldest;
        }
    }, {name: "", age: 0})
};

// Do not edit below this line
module.exports = findTheOldest;
