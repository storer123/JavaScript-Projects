// Javascript  - can run on browser, client side scripting (console is a small run time environment.)
//             - dynamic interpreted language
//             - processing language like(php, python(flask or django framework))
//             - but what about server side, servers doesn’t run on browser, use nodejs-> allows you to run JavaScript on the server.(run time env for server side), and express built on top of it.
//             - safe language(privacy protection, ensured by community)
//             - write < script > just above body so that document gets ready till  script comes-> can be inline else need to load another script file
// 	           - can be written within html or a separate .js file
//             - ECMA Script - maintain standard while updating js, ES5, ES6(2015),...(EVERY YEAR),   ES6+ SINCE FORM ES6 ALL ARE MOSTLY COMPATIBLE IN MOST BROWSER, ESNEXT ->2021+ not even a part of enigma script but people start using it
//             - All of these versions are backward compatible-> why ? concept of not breaking the web i.i. things are iteratively added in newer version not break and build like other languages? why to make it so that even olderwebsite made in say 2008 still exist and work
//             - but not forward compatible, that is say 2020's code run on 2008;s browser, that wont work
//             - after development during production ,bable to transpile and polyfill code - since users browser might not be up to date, and forward compatiblity is required
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

// expression is a piece if cide that produces a value
a>=b?"yes":"no";
3+4
a&&b
// statement - bigger piece of code that is executed, and does not produce a value by itself
if(a&&b){
 console.log("statement vs expression");
}
//or
let a= "statement vs expression";  // herer the string part is expression but this whole line is statement

//in template literal , can only insert expression , not statement

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
// Object (jenerates a key-value, or key-property pair)
//in arr [1,2,[3,4,5]] how we dont have name for each stuff, obj is more dynamic and semantic
//obj literal syntax
const mark = {
  name: "evans",
  age:1923-1913,
  trophies : [1,2,3]
  //function can be added in object, its called as object method
  //+ here we need expression, decleration doesnt work here
  fun : function (x) {
   return this.age+x;
  }
}
//in object unlike array , order of stuffs does not matter
// for ordered data use array , else use object
//they order themself alphabetically

// to get data from object
. notation
.name
[] bracket notation
expression can be used
let x="me"
mark["na"+x];||mark.name

or

const proper = promt ("what property do you want to know?");//namer
mark.proper//error
mark[proper]// evans

//to add new
mark.locaton="japan"
mark[location]="japan"
this.location="japan"//if inside


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


//array - collection of diff type of data (special type of object)
var arr = [1,2,"hi",4,5]
console.log(arr)
console.log(arr[0])
console.clear();
const arra=["hg"]
arra[0]="ko"  // can be changed even though const , since only primitive value are immutable
// but cant change its structure
arra=["hu","hh"] //error, will not work if const

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
// loose == , strict ==, loose !=, strict !==,   loose can follow type coersion
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
let result = "5" - 1; // Implicitly converts string TO NUMBER   SAME FOR * AND /
2+3+5+'5' ===== '95'
'10'-'4' == 6
10-11-'2'+'3' === '-33'
console.log(result); // 4 (string concatenation)
//Boolean in Arithmetic Context:
let sum = 5 + true; // true is coerced to 1
console.log(sum); // 6
//Comparisons:
console.log("2" == 2); // true, because "2" is coerced to a number
console.log("2" === 2); // false, no coercion, types must match

//4.4 falsey and truthly
falsley :  false, 0 ,NaN, ''(EMPTY STRING), null, undefined , //after conversion these change to false all others true , all 
even empty obj Boolean({})====true (since not included in above)

// 5 function
// use let if you want to reassign else use const


//5.0 strict mode 
/*Using "use strict"; is a best practice that can help you write cleaner, more robust, and more maintainable JavaScript code by enforcing stricter parsing and error handling on your code. It’s generally recommended to use strict mode, especially in larger codebases or when working in teams.*/
Catches Errors: Converts silent errors into throw errors, making bugs easier to spot.

Prevents Globals: Disallows accidental creation of global variables by throwing errors for undeclared variables.

No Duplicate Parameters: Prevents function parameters from having the same name, reducing confusion.

Disallows Problematic Syntax: Bans certain syntax (like with and eval) that can lead to errors.

Improves Performance: Some engines optimize code better in strict mode.

Changes this Behavior: In strict mode, this is undefined in non-method functions, preventing unintentional global access.

let a = Avg(2); // will work
//function decleration
function Avg(a, b=3){
    return (a+b)/2.0;
}

//function expression
let a = Avg(2); // will not work
const Avg = function(a,b=3){
    return (a+b)/2;
}

//or arrow function (also a function expression)   // in arrow function no need to write "function"
const Avg = (a,b) => (a+b)/2; // in 1 liner no need of braces 
console.log(Avg(2,3));
VM3090:1 2.5


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
 
let day='monday'

switch{
    case 'monday: // day=== monday (strict)
        console.log("hi");                    // since no break next case statement will also print
    case 'tue':
        console.log("hello");
        break;
    case 'wed':
        console.log("woho");
        break;
    default : 
        day=prompt("enter a valid day");  // will prompt the user to enter a valid day
}

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
myarr.include("hi");
myarr.indexOf("hi");
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





