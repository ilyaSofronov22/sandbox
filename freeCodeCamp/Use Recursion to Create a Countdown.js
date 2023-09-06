//Instructions
//The function should use recursion to return an array containing the integers n through 1 based on the n parameter. 
//If the function is called with a number less than 1, the function should return an empty array.
//Your function must use recursion by calling itself and must not use loops of any kind.

//Solution
// Only change code below this line
function countdown(n){
    if (n < 1) {
      return [];
    } else {
      const newArray = countdown(n - 1);
      newArray.unshift(n);
      return newArray;
    }
  }
  // Only change code above this line