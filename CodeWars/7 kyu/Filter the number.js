//Instructions
//You will be given a string of numbers and letters mixed up, 
//you have to return all the numbers in that string in the order they occur.

//Solution
var filterString = function(value) {
    let newStr = '';
    for (let i = 0; i < value.length; i++) {
        if ('0123456789'.includes(value[i])) {
            newStr += value[i];
        }
    }
    return Number(newStr);
}