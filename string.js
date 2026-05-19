let name = "chetan";
let name1 = new String("Ambiger");
console.log(name.length); //6//

console.log(name1.length); //7//
console.log(name1);
console.log(typeof(name1));
console.log(typeof(name));
console.log(name.toUpperCase());
console.log(name === name1);// false//
name[0] = "C";
console.log(name);// strings are not modified but they are updated//
name = "CHETAN_SA"
console.log(name); // strings are updated//
const a = 10;
b = a;
console.log(a,b); // 10,10//
b = 25;
console.log(a,b); // 10,25//
console.log( name1.slice(0,3)); //Amb//
console.log(name.at(4));    //A becaues chetan is updated as a CHETAN 4th index is A//
console.log(name.charAt(2)); // E 2nd index is E in CHETAN//
console.log(name.trim()); //CHETAN_SA//
console.log(name1.includes("ger")); // true//
console.log(name.startsWith("C")); //TRUE//
console.log(name.endsWith("_SA")); //true//
console.log(name.replaceAll("CHETAN_SA","CHETAN")); // CHETAN//
console.log(name); //CHETAN_SA BEACUSE ORGINAL STRING VALUE DOESN'T CHANEGED//
console.log(name.split(" .")); //['CHETAN_SA']//
// STRING OPERARTIONS//
const A = "10";
console.log(A+2); //102//
console.log(A-5); //10-5 = 5//
console.log(A*2); //20//
console.log(A/20); //0.5//
console.log(A**3); // 1000 power//
const B = "20"
console.log(A+B,A-B,A*B,A/B); // 1020,-10,200,0.5//
 // BACK CICK[`]//
 const NAME = "CHETAN AMBI";
 console.log(`Hello ${NAME}!
 You are selected SSOC 5 congrats heartly welcome to SSOC season 5 ${NAME}`); // [`]//




