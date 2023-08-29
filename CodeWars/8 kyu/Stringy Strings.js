//Instructions
//write me a function stringy that takes a size and returns a string of alternating 1s and 0s.
//the string should start with a 1.
//The size will always be positive and will only use whole numbers.

//Solution
function stringy(size) {
    let myArray = '';
    for (let i = 0; i < size; i++) {
        if (i % 2 === 0) {
            myArray += 1;
        } else {
            myArray += 0;
        }
    }
    
    return myArray;
};