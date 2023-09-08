//Instructions
//In this Kata, you will be given an array and your task will be to determine if an array is in ascending 
//or descending order and if it is rotated or not.

//Solution
function solve (arr) {
    let sortArr = arr.slice(0).sort((a, b) => a - b);
    if (sortArr[0] === arr[0] && sortArr.at(-1) === arr.at(-1)) {
        return 'A';
    } else if (sortArr[0] === arr.at(-1) && sortArr.at(-1) === arr[0]) {
        return 'D';
    } else {
        if (arr.at(-1) < arr[0]) {
            return 'RA';
        } else {
            return 'RD';
        }
    }
}