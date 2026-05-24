

//let,var,const//
//datatypes N,S,B,NUL,UND,SYMB,BIGI//
/*Name = "chetan";
ishuman = true;
older = null;
currency = Symbol("$chetan");
cur = BigInt ("123");
console.log(cur)
const product = {
    Pname : "ballpen",
    price : 270,
    offer : '5%',
    rating : 7.0002,
    isdeal : true
}
console.log(product)
product.pname = "jel pen";
product.price = product.price + 29 ;

//  arithematic operators//
{  let a = 20;
    let b = 40;
    let x = 12;
    x += 5;
    x -=2;
    x *=2;
    x/=3;
    x++
    console.log(++x);
    console.log(x--);
    console.log(--x)
    console.log(x);
    sum = a + b;
    sub = a -b;
    mul = a * b;
    div = a / b;
    modul = a % b;
    pow = a ** b;
    console.log(sum);
    console.log(sub);
    console.log(mul);
    console.log(div);
    console.log(modul);
    console.log(pow);
    console.log(a+1);
    console.log(10%2); 
    A = 10;
    B = 9;
    //comparision operators//
    console.log(A>B);
    console.log(A<B); 
    console.log(A<=B); 
    console.log(A>=B);  
    console.log(A==B); 
    console.log(A===B); // strict equality//
    console.log(A!=B); 
    console.log(5 == "5"); //true/ loose equality//
    console.log(5 === "5");//false/strict equality//

}
{
  s = "chetan";
  bb = 124;
  cc = s + bb ;
  console.log(cc);
   console.log(typeof(cc));  
}
{
console.log("50"+5);
console.log("10"-4);
console.log("5"/5); 
console.log("5"*5);

}
// CONDITIONAL STATEMENTS//
let age = 29;
if(age>=18){
    console.log("you are eligible");
}
else{
    console.log("you are not eligible");
}
let mode = "dark";
let color;
if(mode === "dark"){
    color = "black";
}
else{
    color = "white";
}
console.log(color);
let marks = 95;
let grade;
if (marks>=90 && marks<=100){
    grade = "A";
}
else if (marks>=80 && marks<=89){
    grade = "B";
}
else if( marks>=70 && marks<=79){ 
    grade = "C";

}
else{
    grade = "fail";
}
console.log(grade);

let eligibility = age >= 18 ? "you are eligible to lead" : "you are not eligible to lead";
console.log(eligibility);
for(let a = 1; a<=10; a++){
    console.log("i = ",a);
    
}
AA = 10;
while(AA<=20){
    console.log("AA = ",AA);
    AA++;
}
X = "hello buddies";
for(let i = 200; i>X.length; i--){
    console.log(X);
}
C = 10;
do{
    console.log("welcome to my profile role");
    C--;

} while(C>1);
const fruits = ["apple","banana","grapes","orange"];
for (fruit of fruits){
    console.log(fruit);
}
const people = {
    name :"chetan",
    age : 21,
    role:"softwareengineer",

}
for ( i in  people){
    console.log(i, ':',people[i]);
}




/*let num = prompt("enter a number: ");
    if (num % 5 === 0){
        console.log(num, "is multiple of 5");
  }
  else{
    console.log(num,"is not a multiple of 5");
  }
 */
//arrays//
let items = ["apple","banana","citrus","dragon", "egg"];
let mix = ["chetan",2,2.5,true,null,undefined];
console.log(mix);
console.log(items[0]);
console.log(items[2]);
console.log(items[1]);
console.log(items[items.length-1]);
items[1] = 2;
console.log(items); // modified//

mix.push(25); // push used to add a last element//
console.log("last element is added i.e:-",mix);
items.pop(); // last element deleted like a popped//
console.log(items);
mix.shift();// first element deleted//
console.log(mix); // first element deleted//
items.unshift("CHETAN"); // first element added //
console.log(items);
for ( let i=0; i<items.length; i++){
    console.log(items[i]);
}
for ( let i=0; i<mix.length; i++){
    console.log(mix[i]);
}
for (let value of mix){
    console.log(value); //same value printed like a above for loop//

}
const users = [
    {name: "asthonall", income:2500000},
    {name : "indian asthonall", income:1000000},
];
const income = users.map(user => user.income);
console.log(income);
console.log(users[0]); // asthonall details,object//
console.log(users[1]);// indian  asthonall, object// 
console.log(users); // both details with prototype is:- array(0)






