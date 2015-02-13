// Adreinne Alston 11 February 2015 Expression_Worksheet Slice of Pie II

//Slice of Pie part II

//At the pizza party Sparky, the host’s dog is excited, because he gets the leftover pizza after the slices have been divided up evenly among the guests. Assume guests get whole slices, how many whole slices will Sparky feast on?

    //Example data set: 10 people, 4 pizzas and 8 slices per pizza will mean each person eats 3 slices and Sparky gets 2 slices. (Note that this is an example, your code should work and give me the accurate results no matter what numbers I put in for those given variables.)
//Given:

    //Don’t make new given variables/constants for this. Instead use the givens you set up for Slice of Pie I.

   // Result Variables:

    //Number of slices Sparky gets to eat.

    //Result to Print:

    //“Sparky got X slices of pizza.”

var people = prompt ( "We are calculating the slices of pizza eaten per person. \nPlease Enter the number of people.");
var pizzaOrdered = prompt ( "Enter the amount of Pizza ordered. ")
//prompt allowing user to input the amount of pizza ordered
var slicesPerPizza = 8; // 1 pizza equals 8 slices when divided equally
var slicePerPerson = slicesPerPizza / people;
var result = " Each person ate " + slicePerPerson  + " slices of pizza at the party ";
alert(result);