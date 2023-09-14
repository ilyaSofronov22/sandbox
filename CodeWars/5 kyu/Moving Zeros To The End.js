//Instructions
//Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

//Solution
function moveZeros(arr) {
    let newAr = '';
    let count = 0;
    for (let elem of arr) {
      if (elem === 0){
        newAr = arr.slice(arr.indexOf(elem) + 1);
        arr = arr.slice(0, arr.indexOf(elem)).concat(newAr)
        count += 1;
      };
    }
    
    for (let i = 0; i < count; i++) {
      arr.push(0)  
    }
    return arr;
}