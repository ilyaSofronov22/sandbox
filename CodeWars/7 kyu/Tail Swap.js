//Instructions
//You'll be given a list of two strings, and each will contain exactly one colon (":") 
//in the middle (but not at beginning or end). The length of the strings, before and after the colon, are random.
//Your job is to return a list of two strings (in the same order as the original list), 
//but with the characters after each colon swapped.

//Solution
function tailSwap(arr) {
    let indexColon1 = arr[0].indexOf(':');
    let indexColon2 = arr[1].indexOf(':');
    let firstElem = arr[0].slice(0,indexColon1 + 1) + arr[1].slice(indexColon2 + 1);
    let secondElem = arr[1].slice(0,indexColon2 + 1) + arr[0].slice(indexColon1 + 1);
    return [firstElem, secondElem];
}