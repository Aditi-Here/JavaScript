const name = "aditi";
const repoCount = 50;

// console.log(name + repoCount+ "value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("aditihhc");
// console.log(gameName[0]);
// console.log(gameName.length);
// console.log(gameName.toUpperCase);
// console.log(gameName.charAt(5));

const newString = gameName.substring(0,4);
// console.log(newString)

const anotherString  = gameName.slice(-8,4);
// console.log(anotherString);

const newString1 = "   aditi  ";
// console.log(newString1.trim());

const url = "https://aditi.com/aditi%20here";

console.log(url.replace('%20','-'));