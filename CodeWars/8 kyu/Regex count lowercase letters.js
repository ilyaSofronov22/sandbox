//Instructions
//Your task is simply to count the total number of lowercase letters in a string.

//Solution
function lowercaseCount(str) {
    let a_z = 'abcdefghijklmnopqrstuvwxyz';
    let count = 0;
    for (i = 0; i < str.length; i++) {
        if (a_z.includes(str[i])) {
            count += 1;
        }
    }
    return count;  
};