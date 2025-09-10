let str1="Hello";
console.log(str1);
console.log(typeof str1);//string

let str2=new String("Hello")
console.log(str2);
console.log(typeof str2);//object

console.log(str1==str2);//true
console.log(str1==str2);//false

let str8="welcome";
console.log(str8.length);//7

console.log(str[0]);//w
console.log(str[8]);//undefined
console.log(str[str.length-1]);//0

console.log("******"); 0


for(let i=0;i<str.length;i++){
    console.log(str[i]);
}

console.log("*****");

for(let ch of str){
    console.log(ch);
}

console.log(str[8]);//undefined
console.log(str[str.length])

let a=10;
let b=20;
let sum=a+b;
console.log("the sum of "+a+" and "+b+" is "+sum);
console.log(`the sum of ${a} and ${b} is ${sum}`);


let str="welome"
console.log(str.slice(0,4));
console.log(str.slice(3));
console.log(str.slice(-4));


let card="1234-5678-9876-5432";
let last4=card.slice(-4);
console.log(last4);

let maskedCard=last4.padStart(card.length,"*");
console.log(maskedCard);

let phone="1234567890";
let last3=phone.slice(0,3);
let maskedPhone=last3.padEnd(phone.length,"*");
console.log(maskedPhone);
