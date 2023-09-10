//Instructions
//Write a function, taking two strings in parameter, that tests whether or not the first string contains 
//all of the letters of the second string, in order.
//The function should return true if that is the case, and else false. Letter comparison should be case-INsensitive.

//Solution
function nameInStr(str, name){
    let array = '';
    for (let i = 0; i < name.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (name.toLowerCase()[i] === str.toLowerCase()[j]) {
                array += name[i];
                str = str.slice(j+1);
                break;
            }
        }
        if (array[i] !== name[i]) {
          return false;
        }
    }
    return true;
}