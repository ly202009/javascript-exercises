const fibonacci = function(n) {
    n = Number(n);
    if(n < 0){
        return "OOPS";
    }
    let previous = 1;
    let total = 0;
    for(let i = 0; i < n; i++){
        total += previous;
        previous = Math.abs(total - previous);
    }
    return total;
};

// Do not edit below this line
module.exports = fibonacci;
