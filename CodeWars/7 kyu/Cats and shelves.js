//Instructions
//An infinite number of shelves are arranged one above the other in a staggered fashion.
//The cat can jump either one or three shelves at a time: from shelf i to shelf i+1 or i+3 
//(the cat cannot climb on the shelf directly above its head)
//Start and finish shelf numbers (always positive integers, finish no smaller than start)
//Find the minimum number of jumps to go from start to finish

//Solution
function solution(start, finish) {
    let jump = 0;
    let shelf = start;
    while (shelf < finish) {
        if (shelf + 3 <= finish) {
            jump += 1;
            shelf += 3;
        } else if (shelf + 1 <= finish) {
            jump += 1;
            shelf += 1;
        }
    }
    return jump;
}