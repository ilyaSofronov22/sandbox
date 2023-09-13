//Instructions
//Given a string, you progressively need to concatenate the first letter from the left and the first letter 
//to the right and "1", then the second letter from the left and the second letter to the right and "2", and so on.
//If the string's length is odd drop the central element.

//Solution
function charConcat(string){
    let newStr = '';
    for (let i = 0; i < Math.floor(string.length / 2); i++) {
      newStr += string[i] + string[string.length-(i+1)] + (i+1);
    }
    return newStr;
}