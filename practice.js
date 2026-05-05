

//let,var,const//
//datatypes N,S,B,NUL,UND,SYMB,BIGI//
Name = "chetan";
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


let num = prompt("enter a number: ");
    if (num % 5 === 0){
        console.log(num, "is multiple of 5");
  }
  else{
    console.log(num,"is not a multiple of 5");
  }

  









