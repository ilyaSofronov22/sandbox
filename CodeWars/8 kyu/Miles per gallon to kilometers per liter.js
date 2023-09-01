//Instructions
/*Create an application that will display the number of kilometers per liter (output) 
based on the number of miles per imperial gallon (input).
Make sure to round off the result to two decimal points.
Some useful associations relevant to this kata:
1 Imperial Gallon = 4.54609188 litres
1 Mile = 1.609344 kilometres*/

//Solution
function converter (mpg) {
    return Number(((mpg * 1.609344) / 4.54609188).toFixed(2));
};