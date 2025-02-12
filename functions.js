/**
 * Task 1:
 * Create a function named `printName`
 * - take a name as a parameter
 * - that just prints that name on the screen
 */

let someName = "Abdullah";
function printName(someName){
    console.log(someName);
}
printName(someName);

/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */
function printAge(year){
  console.log(2025 - year)
}



/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */

function printHello(name, language) {
  if(language == "en"){
    console.log(`Hello ${name}`);
  }
    
  else if(language == "es"){
    console.log(`Hola ${name}`);
  }
  else if(language == "fr"){
    console.log(`Bonjour ${name}`);
  }
  else if(language == "tr"){
    console.log(`Merhaba ${name}`);
  } 

}

 
/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */
function printMax(num1, num2) {
  console.log(Math.max(num1, num2));
}
// TODO: Uncomment these functions as you work on them
// Make sure they're all uncommented before you push your solution!
module.exports = {
   printName,
   printAge,
   printHello,
   printMax,
};
