//Instructions
//Your task is to write a function that takes a String and returns an Array/list 
//with the length of each word added to each element.

//Solution
function addLength(str) {
    let words = str.split(" ");
    let wordsLength = [];
    for (let i = 0; i < words.length; i++) {
        wordsLength.push(words[i] + " " + words[i].length);
    }
    return wordsLength;
};
    