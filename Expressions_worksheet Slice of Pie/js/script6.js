// Adreinne Alston 11 February 2015 Expression_Worksheet Slice of Pie I


//Slice of Pie part 1

//A bunch of students are having a party and somebody ordered pizza. Create an expression that
// calculates how much pizza each party goer will get at the party.  (Assume all pizzas have the same number of slices and that the person dividing the pizza is really precise, so this can be a decimal, like 3.52 slices, etc.)
//Given:

//Number of slices per pizza
//Number of people at the party
//Number of pizzas ordered.

    //Result Variables:

    //Number of slices per person. (Can be a decimal or floating point).

//Result to Print:

    //“Each person ate X slices of pizza at the party.”


var people = prompt ( "We are calculating the slices of pizza eaten per person. \nPlease Enter the number of people.");
var pizzaOrdered = prompt ( "Enter the amount of Pizza ordered. ")
//prompt allowing user to input the amount of pizza ordered
var slicesPerPizza = 8; // 1 pizza equals 8 slices when divided equally
var slicePerPerson = slicesPerPizza / people;// slices per person = slices per pizza divided by people which slices were
// to 8 slices per pizza.


var result = " Each person ate " + slicePerPerson + " slices of pizza at the party ";
alert(result); // the total amount slices people ate at the party when split evenly.