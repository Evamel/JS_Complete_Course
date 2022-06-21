// VALUES AND VARIABLES

// let js = "amazing";
// if (js === "amazing") alert("JS is fun!");

// console.log(40 + 8 + 23 - 10);
// console.log("Jonas");
// console.log(21);

// let firstName = "Bob";
// console.log(firstName);






// // DATA TYPES

// true;
// console.log(true);

// let javascriptIsFun = true;
// console.log(javascriptIsFun);


// //Knowing the type of a value

// console.log(typeof true);
// console.log(typeof 23);


// //Dynamic typing
// //Reassign a value to an existing variable = don't write the "let", just the name of the variable you want to change.

// javascriptIsFun = 'YES!';
// console.log(javascriptIsFun);
// console.log(typeof javascriptIsFun);


// //Undefined = no value in the variable

// let year;
// console.log(year);
// console.log(typeof year);







//LET, VAR AND CONST


// //let is used to mutate (change) values of the variable

// let age = 30;
// age = 31;

// let myAge;
// myAge = 28;


// //A value from a const can not be change (mutate). So it also can't be an empty variable (undefined).

// const birthYear = 1994;


// //var is no more used. A value from a var can be change, like in a let

// var job = "Programmer";
// job = "Coder";







// BASIC OPERATORS

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3)
// // 2 ** 3 = 2 puissance 3 ou 2 * 2 * 2

// const firstName = "Jonas";
// const lastName = "Smith";
// console.log(lastName + " " + firstName);

// let x = 5 + 10; // 15
// x += 10; // x = x + 10 Donc x = 25
// x *= 4 // x = x * 4 Donc x = 100
// x++ // x = x + 1 Donc x = 101
// x-- // x = x - 1 Donc x = 100
// console.log(x);

// console.log(ageJonas > ageSarah); //check if ageJonas is greater than ageSarah. So answer will be true in the console.
// console.log(ageSarah >= 18); //Check if ageSarah is greater or equal to 18.
// const isFullAge = ageSarah >= 18; //Rather to just display the answer in the console, you can store the result in a variable
// console.log(now - 1991 > now - 2018); //Do the calculation and compare the results




// OPERATOR PRECEDENCE
//How JS knows the order of execution of the calculations ?

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// console.log(25 - 10 - 5) //10

// let x, y; //Declaring 2 empty variables
// x = y = 25 - 10 - 5; // x = y = 10 => y = 10 => x = y => x = 10
// console.log(x, y); // 10 10


// //Calculate the average
// // const averageAge = ageJonas + ageSarah / 2; //The division happens before the addition so ageSarah is going to be divided by 2 before being added to ageJonas. => 55.5
// const averageAge = (ageJonas + ageSarah) / 2; //Now, with the parenthesis, hte addition is done first and after, it's divided by 2. => 32.5
// console.log(ageJonas, ageSarah, averageAge);





// STRINGS AND TEMPLATE LITERALS

// const firstName = "Jonas";
// const job = "Programmer";
// const birthYear = 1991;
// const nowYear = 2022;

// const jonas = "I'm " + firstName + ", a " + (nowYear - birthYear) + ' years old ' + job;
// console.log(jonas)

// const jonasNew = `I'm ${firstName}, a ${nowYear - birthYear} years old ${job}`;
// console.log(jonasNew);

// console.log(`Creating a \n\ new string \n\ and \n\ another one`);
// console.log(`String
// with
// multiple
// lines`)





// TAKING DECISIONS: IF / ELSE STATEMENTS

// let age = 15;

// if(age >= 18){
//     console.log("You can start drinving licence! 🚗")
// }else{
//     const yearsLeft = 18 - age;
//     console.log(`Sorry you're too young too start driving licence. Try again in ${yearsLeft} years.`)
// }


// const birthYear = 1991;
// let century;

// if(birthYear <= 2000){
//     century = 20;
// }else{
//     century = 21;
// }
// console.log(century);






// TYPE CONVERSION AND COERCION

// //Type conversion
// let inputYear = "1994";
// console.log(Number(inputYear), inputYear);

// console.log(String(23), 23);

// //Type coercion
// console.log("I am " + 23 + " years old"); //23 (the number), is change to a string
// console.log("23" - "10" - 3); //In the console, the output will be 10. The minus sign changed the string types to number.
// console.log("23" + "10" + 3); // It gives us the string 23103. Because the plus sign changes number to string.
// console.log("23" * "2"); //It will give us 46. Because the * sign changed strings to number. Same for the / sign.

// //With JS, you can convert to 3 types (Number, String or Boolean).

// let n = "1" + 1; //11
// n = n - 1; //11 - 1
// console.log(n); //10

// let ex = 2 + 3 + 4 + "5"; //9 + "5"
// console.log(ex); //95

// let test = "10" - "4" - "3" - 2 + "5"; //3 - 2 + "5"
// console.log(test); //15





//TRUTHY AND FALSY VALUES

// // 5 flasy values : 0, "" (empty string), undefined, null and NaN (Not a Number).
// //This values will become false when we will convert them to boolean type.

// console.log(Boolean(0)); //False
// console.log(Boolean(undefined)); //False
// console.log(Boolean("Jonas")); //True
// console.log(Boolean("")); //False
// console.log(Boolean({})); //Empty object = True


// const money = 0;

// if(money){
//     console.log("Yeah");
// } else{
//     console.log("Too bad");
// }
// //Money is set to 0 so it's a falsy value, it's turned into "False". In the If else statement, we said that if money is "true" display "Yeah" but if it's "false", display "too bad".

// //Checking if a variable is defined:
// let height;

// if(height){
//     console.log("Yay! height is defined");
// }else{
//     console.log("Too bad, height is not defined");
// };
// //height is not defined because the variable as no value. Undifined is a falsy value so it's "false". The else console.log is displayed.
// //The issue is that if height is defined to 0 for some reason, it's defined but as it's a falsy value, the "Too bad, height is not defined" will be displayed even if it has a number. You can fix the issue by using logical operators.






//EQUALITY OPERATORS: == VS ===

// const age = 18;


// if(age === 18) console.log("You just became an adult");

// console.log('18' == 18); //true
// console.log("18" === 18); //false
// //The === comparison evaluates if the 2 values are strictly the same (same type and same value). And the == sign compares only the values.

// const favourite = prompt("What's your favorite number"); //It will store the input in the variable.
// console.log(favourite);
// console.log(typeof favourite); //String

// if(favourite == 23){
//     console.log("Nice, this is an amazing number!");
// } else if(favourite == 7){
//     console.log("Seven is a nice choice");
// } else if(favourite === 4){
//     console.log(`Four is also my favourite number`)
// } else{
//     console.log(`Let me guess... Your number isn't 4, 7 or 23...`);
// };
// //Here we have to use the == signs because the type of the input is string but we compared it to a number type.

// if(favourite !== 7) console.log("You didn't choose seven, good choice.");







//BOOLEAN LOGIC

