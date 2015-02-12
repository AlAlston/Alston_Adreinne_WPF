// Adreinne Alston 11 February 2015 Expression_Worksheet Dog Years

// Dogs age 7 times faster than humans so a dog that is 1 year old in human years is 7 years old in “dog years.”
// Calculate how old Sparky the pit bull is in dog years based on his actual age.
//Givens:

   // Sparky’s age.

    //Result Variable:

    //Sparky’s age in dog years.

    //Result to Print:

    //“Sparky is X human years old which is X in dog years.



var humanYears = prompt ( "We are calculating human years into dog years. \nPlease Enter the human years.");
//prompt allowing user to input the amount of human years

var dogYears = 7; //the number of dog years when multiplied by 1 human years( 1 human year equals 7 dog years)
var dogAge = humanYears * dogYears;// dog age = humanYears * dogYears
//console.log(dogYears);//prints it out to the console.

var result = " Sparky is " + humanYears + " human years old " + " which is " + dogAge + " in dog years. ";
alert(result); // the results show the amount of human years enter and the result of the years being multiplied in dog