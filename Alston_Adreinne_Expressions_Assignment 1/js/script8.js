// Adreinne Alston 11 February 2015 Expressions_Assignment

//Amelia wants to know how much she gets paid daily. She knows that monthly she make 2348.
// Amelia also know that every week her pay check totals $587.00. Amelia only works 5 days a weeks.
//How much does she make daily?


var paidMonthly = prompt ( "Enter monthly pay of 2348"); // user is entering the instructed amount
paidMonthly = 2348;// the amount Amelia makes monthly

var weekly = prompt ( "Enter weekly pay of 587"); // user is entering the instructed amount
weekly = paidMonthly/4; // the amount Amelia makes weekly

var daily // variable for what Amelia makes daily
daily = weekly /5;// what she makes weekly divided by the number of days she works per week
console.log(" Amelia makes " + daily + " on a daily basis ");//prints it out to the console.

var result = " Amelia makes " + daily + " on a daily basis ";
alert(result); // prompts the results of how much Amelia makes daily.

var moneyMAde = [2348, 587];// Arrays are the monthly and weekly amounts
var total = moneyMAde[0] / moneyMAde[1] // Arrays divided in order to calculate the number of weeks.
console.log(" It takes " + total + " weeks of 5 day work weeks for Amelia to make her monthly pay ");//prints into console
