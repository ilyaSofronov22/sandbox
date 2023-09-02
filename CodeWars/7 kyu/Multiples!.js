//Instructions
//Make a program that takes a value (x) and returns "Bang" if the number is divisible by 3, 
//"Boom" if it is divisible by 5, "BangBoom" if it divisible by 3 and 5, 
//and "Miss" if it isn't divisible by any of them. Note: Your program should only return one value

//Solution
function multiple(x) {
    if (x % 3 === 0 && x % 5 === 0) {
        return 'BangBoom';
    } else if (x % 3 === 0) {
        return 'Bang';
    } else if (x % 5 === 0) {
        return 'Boom';
    } else {
        return 'Miss';
    }
};