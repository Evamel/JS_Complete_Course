// VARIABLE AND VALUES

// Declare variables called 'country', 'continent' and 'population' and assign their values according to your own country (population in millions). Then, log their values in the console.

let country = "Belgium";
let continent = "Europe";
let population = 11.56;

console.log(country, continent, population);




//DATA TYPES

// Declare a variable called 'isIsland' and set its value according to your country. The variable should hold a Boolean value. Also declare a variable 'language', but don't assign it any value yet. Then, log the types in the console.

let isIsland = false;
let language;

console.log(isIsland);
console.log(language);




//LET, CONST AND VAR

//Set the value of 'language' to the language spoken where you live (some countries have multiple languages, but just choose one). 

language = "french";






// BASIC OPERATORS

//If your country split in half, and each half would contain half the population, then how many people would live in each half?

const halfPopulation = population / 2; 
console.log(halfPopulation); //Each half would have 5.78 millions people.


// Increase the population of your country by 1 and log the result to the console

console.log(++population);


// Finland has a population of 6 million. Does your country have more people than Finland?

const finPopulation = 6;
const comparisonCountryPop = population > finPopulation;
console.log(comparisonCountryPop); // Yes, Belgium has more people than Finland.


// The average population of a country is 33 million people. Does your country
// have less people than the average country?

const averagePop = 33;
const comparisonPop = population < averagePop;
console.log(comparisonPop);


// Based on the variables you created, create a new variable 'description'
// which contains a string with this format: 'Portugal is in Europe, and its 11 million people speak portuguese'

const description = country + ' is in ' + continent + ', ' + population + ' million people live there and most of them speak ' + language;
console.log(description);




//STRINGS AND TEMPLATES LITERAL

// Recreate the 'description' variable from the last assignment, this time using the template literal syntax

const newDesc = `${country} is in ${continent}, ${population} million people live there and most of them speak ${language}.`;
console.log(newDesc);






//IF / ELSE STATEMENTS

//If your country's population is greater that 33 million, log a string like this to the console: 'Portugal's population is above average'. Otherwise, log a string like 'Portugal's population is 22 million below average' (the 22 is the average of 33 minus the country's population).


if(population > averagePop){
    console.log(`${country}'s population is above average.`);
} else{
    console.log(`${country}'s population is ${averagePop - population} million below the average.`);
};





// TYPE CONVERSION AND COERCION

//Predict the result of these 5 operations without executing them:
// '9' - '5';
// '19' - '13' + '17';
// '19' - '13' + 17;
// '123' < 57;
// 5 + 6 + '4' + 9 - 4 - 2;
//Then, check if you were right.

console.log("9" - "5"); //4
console.log("19" - "13" + "17"); //617
console.log("19" - "13" + 17); //23
console.log("123" < 57); // False
console.log( 5 + 6 + "4" + 9 - 4 - 2); //1143






//EQUALITY OPERATORS == VS ===

// 1. Declare a variable 'numNeighbours' based on a prompt input like this: prompt('How many neighbour countries does your country have?');

const numNeighbours = prompt("How many neighbour countries does your contry have?");


// 2. If there is only 1 neighbour, log to the console 'Only 1 border!'. Then, use an else-if block to log 'More than 1 border' in case 'numNeighbours' is greater than 1. After that, use an else block to log 'No borders' (this block will be executed when 'numNeighbours' is 0 or any other value).
//After that, Change == to ===. Finally, convert 'numNeighbours' to a number, and watch what happens now when you input 1.

if(Number(numNeighbours) === 1){
    console.log(`Only one border!`);
} else if(Number(numNeighbours) === 0){
    console.log(`No borders at all.`);
} else{
    console.log(`More than one border!`);
};


// 8. Reflect on why we should use the === operator and type conversion in this
// situation