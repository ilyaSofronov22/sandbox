//Instructions
//Write a function that takes an array of numbers (integers for the tests) and a target number. 
//It should find two different items in the array that, when added together, give the target value. 
//The indices of these items should then be returned in a list.

//Solution
function twoSum(numbers, target) {
    let num1, num2;
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i+1; j < numbers.length; j++) {
            if ((numbers[i] + numbers[j]) === target && (numbers[i] !== numbers[j])) {
                return [i, j];
            }
        }
    }
}