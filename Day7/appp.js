let str="welome"
console.log(str.slice(0,4));
console.log(str.slice(3));
console.log(str.slice(-4));

let str10="Welcome"
console.log(str10.charAt(2));
console.log(str10.charAt(20));//""
console.log(str10[2]);
console.log(str10[20]);//undefined');


console.log("A".charCodeAt(0));
console.log("a".charCodeAt(0));
console.log(str10.charCodeAt(3));


console.log(str10.includes("Come"));
console.log(str10.startsWith("come"));
console.log(str10.endsWith("ome"));
console.log(str10.toLowerCase());
console.log(str10.toUpperCase());
console.log(str10.trim());
console.log(str10.trimStart());
console.log(str10.trimEnd());
console.log('   hello   '.trim());


let str11="hello welcome to js";
console.log(str11.repeat(3));






let card="1234-5678-9876-5432";
let last4=card.slice(-4);
console.log(last4);

let maskedCard=last4.padStart(card.length,"*");
console.log(maskedCard);

let phone="1234567890";
let last3=phone.slice(0,3);
let maskedPhone=last3.padEnd(phone.length,"*");
console.log(maskedPhone);



