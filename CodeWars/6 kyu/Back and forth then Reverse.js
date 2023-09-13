//Instructions
//A list S will be given. You need to generate a list T from it by following the given process:
//Remove the first and last element from the list S and add them to the list T.
//Reverse the list S
//Repeat the process until list S gets emptied.

//Solution
function arrange(s) {
    let arrayS = s.slice();
    let arrayT = [];
    while (arrayS.length > 0) {
        if (arrayS.length > 1) {
          arrayT.push(arrayS[0],  arrayS[arrayS.length-1]);
        } else {
          arrayT.push(arrayS[0]);
        }
        arrayS.pop();
        arrayS.shift();
        arrayS = arrayS.reverse();
    }
    return arrayT;
}