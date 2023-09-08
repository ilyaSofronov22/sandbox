//Instructions
//Write a function that receives two strings and returns n, where n is equal to the number of characters 
//we should shift the first string forward to match the second. The check should be case sensitive.
//If the second string isn't a valid rotation of the first string, the method returns -1.

//Solution
function shiftedDiff (first,second) {
    if (first === second) {
      return 0;
    }
    for (let i = 0; i < first.length; i++) {
      first = first.charAt(first.length - 1) + first.substr(0, first.length - 1);
      if (first === second) {
        return i + 1
      }
    }
    return -1;
}