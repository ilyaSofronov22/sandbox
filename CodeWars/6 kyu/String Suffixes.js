//Instructions
//Let's say take 2 strings, A and B, and define the similarity of the strings to be the length of the longest prefix common 
//to both strings. For example, the similarity of strings abc and abd is 2, while the similarity of strings aaa and aaab is 3.
//Write a function that calculates the sum of similarities of a string S with each of it's suffixes.

//Solution
function stringSuffix(s) {
    let newStr = s;
    let sumOfSimilarities = 0;
    while (newStr.length > 0) {
        for (let i = 0; i < newStr.length; i++) {
            if ((newStr[0] === s[0]) && (newStr[i] === s[i])) {
                sumOfSimilarities += 1;
            } else {
                break;
            }
        }
        newStr = newStr.slice(1);
    }
    return sumOfSimilarities;
}