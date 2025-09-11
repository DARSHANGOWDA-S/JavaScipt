let str= "welcome"
let char=str.split("")
console.log(char);

let sentence ="The sky is blue"
console.log(sentence.split(" "));
console.log(sentence.split("l"));
console.log(sentence.split(""));

let str2="Hello"
console.log(str2.split("").reverse().join(""));




//join(seperotor)
 let arr=[1,2,3,4,5]
 console.log(arr.join());
 console.log(arr.join(""));
 console.log(arr.join("-"));
 console.log(arr.join(" "));    


 let str1="Hello"
 let reverseStr=str1.split("").reverse().join("")
 console.log(reverseStr);
 

 let sentence1='The sky is blue'
 let reverseSentence=sentence1.split(" ").reverse().join(" ")   
console.log(reverseSentence);



//trim()
let str3="   Hello World   "
console.log(str3.length);
console.log(str3.trim().length);
console.log(str3.trimStart().length);
console.log(str3.trimEnd().length);
console.log(str3.trimStart());
console.log(str3.trimEnd());    
console.log(str3.trim());
console.log(str3);
console.log(str3.trim().toUpperCase());
console.log(str3.trim().toLowerCase());
console.log(str3.trim().charAt(0));
console.log(str3.trim().charAt(str3.trim().length-1));
console.log(str3.trim().substring(1,4));
console.log(str3.trim().slice(1,4));
console.log(str3.trim().slice(-3));
