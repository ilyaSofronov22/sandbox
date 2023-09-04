//Instructions
//Your task is to write a function that takes a string and return a new string with all vowels removed.

//Solution
function disemvowel(str) {
    let newStr = str.split('');
    for (i = 0; i < newStr.length; i++) {
        if ('aeiouAEIOU'.includes(newStr[i])) {
           delete newStr[i];
        }
    }
    return newStr.join('');
};