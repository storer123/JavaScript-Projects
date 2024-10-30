// Javascript  - can run on browser, client side scripting (console is a small run time environment.)
//             - dynamic interpreted language
//             - processing language like(php, python(flask or django framework))
//             - but what about server side, servers doesn’t run on browser, use nodejs-> allows you to run JavaScript on the server.(run time env for server side), and express built on top of it.
//             - safe language(privacy protection, ensured by community)
//             - write < script > just above body so that document gets ready till  script comes-> can be inline else need to load another script file
// 	           - can be written within html or a separate .js file
//             - ecma script - maintain standard while updating js, ES5, ES6(2015),...(EVERY YEAR)
// JSON - JavaScript Object Notation - light weight data-interchange format, 
//                                  easy for humans to read and write , and for machine to parse 
//                                     
// doesnt accept single quote

// not hard and fast rule but script if inline below style, if seperate then at the end of body
//cmd+k to clear terminal
// how to run on browser
cmd+opt+j or inspect->console or ctr+shift+j or view -> developer-> js console

// to change tabs
ctr+tab, to reverse press it together with shift
//to change applications
cmd+tab , to reverse shift as well , shift can also be denoted as up arrow
//1. javascript console API - ways to print
alert("hi");
console.log("namaste duniya");
console.warn("warning");
console.error("error");
console.assert(4 == (6 - 4))
console.assert(4 == (6 - 2))
//console.clear();
console.log("hi ", 4 + 3, "bye");
//alert("me")
// class ek se zyada element mai, id sirf ek element mai 
document.write("this is my document");

//2. javascript variables - containers to store data value
//variables can't start with numbers,reserved keywords(exception - name works even though reserved),special characted, , only _ a-z A-Z $ 
// variable names -> all upper case for constant PI, else camelCase, should be descriptive and self explanatory like job1, job2 bad firstJob, secondJob good
var number1=34
//2 data types in js - primitive or object
// js has dynamic typing - no need to explicitly or manually write datatype ,can be done automatically , why? since in js value has type not the variable
//use x=10, later x="drg" -> good but hard to find bug
//primitive 7 types - bool,symbol,string,undefined,null,number,bigint 
//number - decimals or integers
// NaN - not a number, typeof NaN = number, Number("jhon")= NaN
// white value in console is string and other color like purple is number
var number2=6
console.log(number1+number2);

//string - double or single quotes 
var str1 = "this is a string"
var str2 = 'this is a string'
console.log(str1+" "+str2);

//bool - can  be only true or false
let fullAge = true;

//null - means empty

//undefined - value taken by variable not defined
let children;

// symbol - value that is unique and cannot be changed

//bigint - so large that no.cant handel

console.log(typeof 'hi');// string
console.log(typeof true);// boolean
console.log(typeof null); // bug, null is not an object

// object
var marks = {
    ravi :24,
    shub :"gi",
    har : 34.34
}
console.log(marks);

//booleans
var a=true
var  b=false
console.log(a);

//undefined - kuch dala nahi
var und1=undefined;
console.log(und1)
var und2=undefined;
console.log(und2)

//null - emptiness ko dala
var n=null
console.log(n)


//array - collection of diff type of data
var arr = [1,2,"hi",4,5]
console.log(arr)
console.log(arr[0])
console.clear();

//4 operator
number1=4;
number2=3;
//arithmetic -%,/,*,+,-
console.log(number1%number2)
const result = Math.ceil(5 / 2);
console.log(result); // Output: 3
//assignment
number1=number2;
number1+=2;
console.log(number1);

// comparison
//== >=,<=,>,< // true and fals

//logical operator
console.log(true && false)
console.log(true || 1)
//logical not
console.log(!true)

console.clear();

//4.2 strings vs template literal (from e6 onwards, easier)
//string
const str = "I'm " + name + '\n my age is ' + age;
//template literal  - jss ke tass likh dena
const str = `I'm ${name} 
my age is ${age}`

//4.3 Type conversion(manual/explicitly) type coersion (automaticlly/implicitly)
//conversion
//String to Number:
let str = "123";
let num = Number(str); // Converts string to number
console.log(num); // 123
//Number to String:
let num = 123;
let str = String(num); // Converts number to string
console.log(str); // "123"
//Boolean Conversion:
let truthyValue = "Hello";
let boolValue = Boolean(truthyValue); // Converts to boolean
console.log(boolValue); // true

// coersion
//String and Number:
let result = "5" + 1; // Implicitly converts number to string
console.log(result); // "51" (string concatenation)
let result = "5" - 1; // Implicitly converts string TO NUMBER
console.log(result); // 4 (string concatenation)
//Boolean in Arithmetic Context:
let sum = 5 + true; // true is coerced to 1
console.log(sum); // 6
//Comparisons:
console.log("2" == 2); // true, because "2" is coerced to a number
console.log("2" === 2); // false, no coercion, types must match
// 5 function
function Avg(a, b=3){
    return (a+b)/2.0;
}
//or arrow function
fun = (a,b)=>{
    return (a+b)/2;
}

c1=Avg(2);
console.log(c1);

let x =3
console.log(x);
console.log(3);
console.log("3");

// 6 conditionals in js
if(x>3){
    console.log("hi");
}
else if(x==3) console.log("hoo");
else console.log("hui");
 
// 7 loop
var arr2 = [1,2,"hi",4,5]
for(var i=0; i<arr2.length;i++){
    console.log(arr[i]);
}
arr.forEach(function(element){
    console.log(element);
});
let j=0;//block level scope
//const a=0;
//a=a+1;
while(j<5){
    console.log(arr[j]);j++;
}
do{
    console.log(arr[j]);j++;
}while(j<arr[j]);

console.clear();
// 8 array methods
let myarr = ["Fan","Cam", 34, null, true];
console.log(myarr.length);
myarr.pop();//from back
myarr.push("hi");
myarr.shift();//pop from front
console.log(myarr);
myarr.unshift("hy");//add from front
console.log(myarr);
let st=myarr.toString();
console.log(st);
myarr.sort();// by default using sort, dictionary type
console.log(myarr);

//9 string methods in js
mystr="Ram is a good man";
console.log(mystr.length);
console.log(mystr.indexOf("is"));//4 1st occurence
console.log(mystr.lastIndexOf("a"));
console.log(mystr.slice(0,3));
console.log(mystr.replace("Ram","Shyam"));//only replaces 1st occurence

//10 date and there methods in js
let mydate =new  Date();
console.log(mydate);
console.log(mydate.getTime());
console.log(mydate.getFullYear());
console.log(mydate.getDay());
console.log(mydate.getHours());
console.log(mydate.getMinutes());

//11 DOM manipulatin (document object model)
//programming interface provided by browsers that allows JavaScript to interact with the HTML and XML documents. 
//methods , ancestors ,html docs, etc
//document.location
document.getElementById('click').style.color="red";
document.getElementById('click').style.border="2px solid blue";
let elemClass = document.getElementsByClassName("container")
console.log(elemClass);
//elemClass[0].style.backgroun = yellow;
//add another css class
//elemClass[0].classList.add("container");
elemClass[0].classList.add("test-success");
console.log(elemClass[0]);
console.log(elemClass[0].innerHTML);
console.log(elemClass[0].innerText);
console.clear();
tn = document.getElementsByTagName('button')
console.log(tn);
createdElement= document.createElement('p');
createdElement.innerText= "This is created para.";
tn[0].appendChild(createdElement);

createdElement= document.createElement('b');
createdElement.innerText= "This is created bold para.";
tn[0].appendChild(createdElement);
//remove child, replace child , etc

console.log(document.scripts);

//selecting using query

sel= document.querySelector('.container');
console.log(sel);
sel= document.querySelectorAll('.container');
console.log(sel);

// 12 JavaScript Event - any thing that is happening like moving of cursor, clicking buttons, hovering over buttons
function clicked(){
    console.log("the button was clicked");
}
window.onload = function(){
    console.log("window was loaded.");
}
// first_container.addEventListener('click',function(){
//     console.log("click hua first container");
// })
// first_container.addEventListener('mouseover',function(){
//     console.log("mouse in first container");
// })
// first_container.addEventListener('mouseout',function(){
//     console.log("mouse out of first container");
// })


let prevhtml=document.querySelectorAll('.container')[1].innerHTML;
first_container.addEventListener('mouseup',function(){
    document.querySelectorAll('.container')[1].innerHTML=prevhtml;
    console.log("mouse up/released of first container");
})
first_container.addEventListener('mousedown',function(){
    document.querySelectorAll('.container')[1].innerHTML="<b>we have clicked</b>";
    console.log("mouse down/clicked  first container");
})


// 13 settimeout and set interval
logKaro=()=>{
    console.log("I am your log");
}
setTimeout(logKaro,3000);//FUN,TIME
// setInterval(() => {
    
// }, interval);
clr = setInterval(logKaro,3000);
   clearInterval(clr);//clear interval or timeout to cancle setinterval/settimeout
   
   // 14 local storage in js - store data in form of string in
localStorage.setItem('name','harry');
console.log(localStorage);
localStorage.getItem('name');
localStorage.removeItem('name');
localStorage.clear();

//15 json
obj={name:"harry",length:1}
jso=JSON.stringify(obj);
console.log(typeof jso);
console.log(jso);
parsed=JSON.parse( jso)
console.log(parsed);

