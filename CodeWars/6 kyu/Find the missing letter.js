//Instructions
//Write a method that takes an array of consecutive (increasing) letters as input 
//and that returns the missing letter in the array.

//Solution
function findMissingLetter(array) {
    let letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let indexOfFirstLetter = letters.indexOf(array[0]);
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] !== letters[indexOfFirstLetter + i]) {
             return letters[indexOfFirstLetter + i];
        }
    }
}