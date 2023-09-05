//Instructions
//An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
//Implement a function that determines whether a string that contains only letters is an isogram. 
//Assume the empty string is an isogram. Ignore letter case.

//Solution
function isIsogram(str){
    let lowerStr = str.toLowerCase().split('');
    for (let i = 0; i < str.length; i++) {
        if (lowerStr.slice(i+1).includes(lowerStr[i])) {
            return false;
        } else {
            lowerStr[i] = '';
        }
    }
    return true;
}