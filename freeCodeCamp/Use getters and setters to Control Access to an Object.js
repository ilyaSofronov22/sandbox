//Instructions
//Use the class keyword to create a Thermostat class. The constructor accepts a Fahrenheit temperature.
//In the class, create a getter to obtain the temperature in Celsius and a setter to set the temperature in Celsius.

//Solution
// Only change code below this line
class Thermostat {
    constructor (Fahrenheit) {
      this._Celsius = 5/9 * (Fahrenheit - 32);
    }
  
    get temperature() {
      return this._Celsius;
    }
  
    set temperature(Celsius) {
      this._Celsius = Celsius;
    }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius