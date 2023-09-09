//Instructions
//John is a typist. He has a habit of typing: he never use the Shift key to switch case, just using only Caps Lock.
//Given a string s. Your task is to count how many times the keyboard has been tapped by John.
//You can assume that, at the beginning the Caps Lock light is not lit.

//Solution
function typist(s){
    let caps = false;
    let count = 0;
    let capsNew = caps;
    for (let i = 0; i < s.length; i++) {
        count += 1;
        s.charCodeAt(i) <= 90 ? caps = true 
          : caps = false;
        if (caps != capsNew) {
          count += 1
        }
        capsNew = caps;
    }
    return count;      
}