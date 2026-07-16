const palindromes = function (str) {
    const cleanString = str.replace(/[^\w]/g, "").toLowerCase(); // Use RegEx to get non character/numerical chars
    for(let i = 0; i < cleanString.length/2; i++){
        if(cleanString[i] !== cleanString[cleanString.length-i-1]) return false;
    }
    return true;
    
};

// Do not edit below this line
module.exports = palindromes;
