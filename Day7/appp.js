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



