//Instructions
//Numbers ending with zeros are boring.
//They might be fun in your world, but not here.
//Get rid of them. Only the ending ones.

//Solution
function noBoringZeros(n) {
    if (n === 0) {
        return 0;
    } else {
        while (n % 10 === 0) {
            n /= 10;
        }
        return n;
    }   
}