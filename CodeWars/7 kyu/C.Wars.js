//Instructions
//Write a function that takes the full name of a person, and returns the initials, separated by dots ('.'). 
//The initials must be uppercase. The last name of the person must appear in full, 
//with its first letter in uppercase as well.

//Solution
function initials(n) {
    let name = n.split(' ');
    let fullName = [name[name.length - 1][0].toUpperCase() +  name[name.length - 1].slice(1)];
    for (let i = name.length - 1; i > 0; i--) {
        fullName.unshift(name[i-1][0].toUpperCase());
    }
    return fullName.join('.');
}