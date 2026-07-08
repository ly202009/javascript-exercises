const removeFromArray = function(arr, ...args) { // This is example of rest 
    return arr.filter(x => !args.includes(x));
};

// Do not edit below this line
module.exports = removeFromArray;
