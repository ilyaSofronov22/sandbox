//Instructions
//Write a function that removes the spaces from the values and returns an array showing the space decreasing.

//Solution
function spacey (array) {
    let newArray = [array[0]];
    for (let i = 1; i < array.length; i++) {
        newArray.push(newArray[i-1] + array[i])
    }
    return newArray;
}