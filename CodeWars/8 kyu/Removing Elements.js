//Instructions
//Take an array and remove every second element from the array. 
//Always keep the first element and start removing with the next element.

//Solution
function removeEveryOther(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
};