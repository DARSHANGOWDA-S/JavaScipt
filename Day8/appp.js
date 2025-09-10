//global scope//
var a= 10;
let b= 20;
const c= 30;

console.log(a);
console.log(b);
console.log(c);

{
    console.log(a);
}

function demo(){
    console.log(a);
    console.log(b);
    console.log(c);
}

demo();

//local scope//
function demo1(){
    var a= 100;
    let b= 200;
    const c= 300;
    console.log(a);
    console.log(b);
    console.log(c);
}
demo1();
console.log(a);

//block scope//
{
    var x= 1000;
    let y= 2000;
    const z= 3000;
    console.log(x);
    console.log(y);
    console.log(z);
}

console.log(x);
console.log(y);
console.log(z);
