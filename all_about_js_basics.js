// Javascript  - can run on browser, client side scripting (console is a small run time environment.)
//             - dynamic interpreted language  , for example const x -> can become integer or string + earlier interpreter , now compiler but no object code directly compiled and run.
//             - processing language like(php, python(flask or django framework))
//             - but what about server side, servers doesn’t run on browser, use nodejs-> allows you to run JavaScript on the server.(run time env for server side), and express built on top of it.
//             - safe language(privacy protection, ensured by community)
//             - write < script > just above body so that document gets ready till  script comes-> can be inline else need to load another script file
// 	           - can be written within html or a separate .js file
//             - ECMA Script - maintain standard while updating js, ES5, ES6,ES15(2015),...(EVERY YEAR),   ES6+ SINCE FORM ES6 ALL ARE MOSTLY COMPATIBLE IN MOST BROWSER, ESNEXT ->2021+ not even a part of enigma script but people start using it
//             - All of these versions are backward compatible-> why ? concept of not breaking the web i.e. things are iteratively added in newer version not break and build like other languages? why to make it so that even olderwebsite made in say 2008 still exist and work
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
// either replaceall() or using regular expression
console.log(mystr.replace(/Ram/g,"Shyam"));
.startsWith();// words need not match , starting charecters should
.endsWith()
.includes() // if matches anywhere
srt[0];
str.indexOf('m');
str.lastIndexOf('m');
str.slice(4,7)//begin from index 4
str.slice(str.lastIndexOf(' ');,7)
str.slice(1,-2); from 1 to last 2ndth
// WHEN A METHOD IS CALLED ON STRING IT BECOMES AN OBJECT , THEN AFTER THAT AGAIN BECOMES A STRING
const passenger = "jONasS mAndela   !";
const pass=(str[0].toLocaleUpperCase() + str.slice(1).toLowerCase()).trim();
//oppposite of split is join
arr.join(" ") //(with space)

// example of split and join
const capitalize = function (name){
  const names =  name.split(" ");
 const upperName = [];
 for(const n of names){
  upperNames.push(n[0].toUpperCase()+n.slice(1));
  //or
  upperNames.push(n.replace(n[0],n[0].toUpperCase()))
 }
 console.log(upperName.join(" "));
}
//padding
let message = "hi, how are you";
console.log(message.padStart(25,"+").padEnd(35,"-"))// make padding so that total length of string is 25, and pad with a "+", and 10 "-" as 25 already done
//repeat
message.repeat(3)//message will be repeated 3 times


//10 date and there methods in js
let mydate =new  Date();
console.log(mydate);
console.log(mydate.getTime());
console.log(mydate.getFullYear());
console.log(mydate.getDay());
console.log(mydate.getHours());
console.log(mydate.getMinutes());

//11 DOM manipulatin (document object model)
//(API) application programming interface provided by browsers that allows JavaScript to interact with the HTML and XML documents. and manipulate them.
//methods , ancestors ,html docs, etc
// they are inline changes (changes will be made in html inline code, not in css)

'use strict';
//console.log('start guessing ...');
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.guess').value = 3;

const secret_number = Math.ceil(Math.random() * 20);
let score = 20;
document.querySelector('.number').textContent = secret_number;
console.log(secret_number);
document.querySelector('.check').addEventListener(  /*enent handler and listner works the same way*/
  'click',
  /*event handler function*/ function () {
    const guess = document.querySelector('.guess').value;
    console.log(guess);
    if (score == 0) {
      document.querySelector('.message').textContent = '🥹 You lost the game !';
    } else {
      if (!guess) {
        document.querySelector('.message').textContent = '👹 No number';
      } else if (Number(guess) === secret_number) {
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.message').textContent =
          '🎊 Congrats !!!, you WON.';
        document.querySelector('.highscore').textContent =
          document.querySelector('.score').textContent;
        score++;
      } else if (guess > secret_number)
        document.querySelector('.message').textContent =
          'Try again 😛, too high!';
      else {
        document.querySelector('.message').textContent =
          'Try again 😛, too low!';
      }
      document.querySelector('.score').textContent = --score;
    }
  }
);


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

sel= document.querySelector('.container'); // only selects 1st that is available
console.log(sel);
sel= document.querySelectorAll('.container');
console.log(sel);

//11.2. manipulate classes with javascript
// . is only for selecting classes, for add or remove no need of  .
//sample
'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
console.log(modal.textContent);
const btnsOpenModal = document.querySelectorAll('.show-modal');
console.log(btnsOpenModal);

const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keyup', function () {
  // will be called automatically
  console.log('a key was pressed');
});
document.addEventListener('keyup', function (e) {
  //e - key which was pressed
  console.log(e);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal(); //or code
});

//sample 2
'use strict';
//selecting elements
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const curr0El = document.getElementById('current--0');
const curr1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0El = document.querySelector(`.player--0`).classList;
const player1El = document.querySelector(`.player--1`).classList;

let currScore, scores, activePlayer, playing;
//initialization
const init = () => {
  scores = [0, 0];
  currScore = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  curr0El.textContent = 0;
  curr1El.textContent = 0;
  activePlayer = 0;
  playing = true;
  diceEl.classList.add('hidden');
  player0El.remove('player--winner');
  player1El.remove('player--winner');
  player0El.add('player--active');
  player1El.remove('player--active');
};
init();
// switching player
const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currScore = 0;
  activePlayer ^= 1;
  player0El.toggle('player--active'); // if class exist then remove , else add
  player1El.toggle('player--active');
};
//rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // roll dice / generate random no
    const val = Math.ceil(Math.random() * 6);
    //fisplay dice
    //if (diceEl.classList.contains('hidden')) //not needed
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${val}.png`;
    //operation
    if (val !== 1) {
      currScore += val;
      document.getElementById(`current--${activePlayer}`).textContent =
        currScore;
      //add in current player's score
    } else {
      //display current score and change player
      switchPlayer();
    }
  }
});

//hold functionality
btnHold.addEventListener('click', function () {
  if (playing) {
    //shift current score to real score
    scores[activePlayer] += currScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    currScore = 0;
    //check if activeplayers score>=10
    if (scores[activePlayer] > 10) {
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      playing = false;
    }

    //display current score and change player
    else switchPlayer();
  }
});

btnNew.addEventListener('click', function () {
  init();
});



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



////////////////////
//16 . behindTheScene of js
// earlier was and interpreter lang, now just-in-time compilation->  interpreter slow, compilation makes a portable object code for machine code, which can be executed any where,  jtc - enable to compile and run immediately , without making any portable file
// jit compilation i.e. conversion to machine code happens inside the engince, ex- for google chrome - v8 engine
//js runtime in browser - consist of 1.engine consist of 2 parts - 1.1 call stack 1.2 heap, but they alone are not enough , even 2. API's are needed like dom, fetch, timer,  3. callback queue like 3.1 click (a call back functiopn from dom event listner) 3.2 timer 3.3 data when call back queue stuff is called it goes to call stack -> this happens using event loop 
// high level - cant access resources like memory directly, is human understandable
// garbage collector is present (since high level)
//paradigm - approach or mindset of structuring code , which directs coding style and technique
// it is a multi-paradigm lang- 1. functionl PROGRAMMING 2. objected oriented programing 3. procedural programming (mixture)
// or prototype based object oriented approach - almost everything is obj (except primitive datatype)
// it is a lang with first class functions - i.e. functions are treated as variables, can be stored and passed as parameters
// dynamic lang / dynamically typed lang - let x=10; x="ram"; (we dont assign datatypes to variable , they becomes known when its executed in an engine) (advantage - easy, disadvantage - dont make it easy to identify bugs) (opposite is called strongly typed language)
//single threaded (handels one thing at a time) - so what if i/o or long running stuff , use event loop - make them run in background

//EXECUTION CONTEXT - 
//environment (like a box) in which js is executed, and which stores all the necessary info like variable environment(let const var declearation, function, arguments object), scope chain, this keyword, code(text) etc, of some code to be executed
// we get 1 for all global variables, and 1 each for every functions, but then 100s of execution function for 100s of function, so how to keep track of function call order->soln call stack (why? beacuse js works on single thread)
// arrow operator dont have -> this keyword, argument objects  ex function first [var1, var2 , arg[1,2,3..]], but arrow operator [var1, var2]
//call stack is the place where execution context get stacked on top of each other to keep track of where in execution we are. lets say [[global, first(), sec() -> first called -> [[global, first()  whatever is at top is the active one, after first execute [[global -> when we close the browser even global is poped
// scoping - where do variable live / how are they organized and accessed
//in js lexical scoping - scoping controlled by placement of function and blocks in the code
// scope : space or environment in which certain variables is declared. 1.global 2. function or local scope 3. block scope(es6+)-> (for strict mode - even a function itself is blocked scope, else function scope) only let and const are block scoped, var is function scoped ex if(werf){let a, const b,. var c};here var c is accesible, const and let a and b are not
// for a function variable environment and scope is same
// scope of variable : region in which our code where a certain variale can be accessed.
//  scope chain -> every scope has acess to variables from its outer scope. parents variable can be accessed ex let a function f1(){if(){let d}let b functionf2 (){ letc} }   f1 can access a and b, f2 can acess a,b, and c i.e. scope has acess to variable from outer scope, but nothing can acess d apart form if statement, if and f2 are sibling scope not parent thus cant acess each other
// variable lookup -> when a variable is noto in current scope , engine looks up for it in the scope chain until it finds, say fun1(){x++}; const x; fun1 doesnt find but later variable look up finds x in global scope

// Hoistion - make some types of variables accessible/usable in the code before they are actually declared. " variables lifted to the top of their scope", but behind the scene -> before execution , code is scanned for variable declaration , for each variable, a new property is created in the variable environment object
// function declearation - hoisted , initial value - actual function
// var variables - hoisted , initial value - undefined
// let and const - not hoisted (actually hoisted but), initial value uninitialized (so considered to be not hoisted) TDZ - Temporal Dead Zone (so we can't access before declared till declared)
// function expression and arrow function - depend on created with var, let or const  // this is also the reason why we can't write function expression before declearation
//Function declarations are hoisted, so you can call them before they appear in the code.
//Function expressions are not hoisted in the same way; you need to define them before you can call them.
// tdz- to make it easier to avoid and catch errors
//makes const variable actually work (if changed earlier?)
// if problems with hoisting why? 1. using function before declaration essential for some techniqes like  mutual recursion 2. var hoisting is just a byproduct (it was never intended to use this programming language for such large scale, and now it cant be removed)
// beifit of hoisting (best practices)  1. used const whenever possible else let, always declaer functions first then use it
if(!numProducts){ //undefined - if would have used const would have no issue
 deleteCart();
}
var numProducts =10;
function deleteCart(){
 console.log("all products are deleted);
}

var x =2;  // will create a property in window object that can cause some complications
console.log(x===window.x)

// this keyword - special keyword that is created for every execution context (every function), points to owner function , not static, depend on how function is called, and only assigned when function is actually called
//called like
// method this = object that is calling the method
// simple function call this = undefined in strict mode, else window object without it, in sloppy mode it will always become window object
// arrow function this = this of surrounding function (lexical this) ** arrow function don't get own this
// event listner this = dom element that the handler is attached to
//(new , call, apply, bind)
// this does not point to the function itself, and also not to the variable environment
console.log(this);//undefined
const calcAge = function(birthYear){
console.log(2037-birthYear);
console.log(this);// undefined
}
const calcAge = (birthYear)=>{
console.log(2037-birthYear);
console.log(this);// window (since doesn't own this/so of parent scope)
}

const jonas{
 year:1991,
 calcAge: function(){
  console.log(this); // this/jonas object -> why since jonas is calling this function  // the below one will point to matilda
  console.log(2037-this.year);
 }
}
jonas.calcAge();

// method borrowing
const matilda = {
 year:2017,
}
matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f=jonas.calcAge();
f();  // since no owner , no this function , thus no error

const jonas = {  // this is not a code block, so for greet function , its parent will be global scope  
firstName
 year:1991,
 calcAge: function(){
  console.log(this); // this/jonas object -> why since jonas is calling this function  // the below one will point to matilda
  console.log(2037-this.year);
 },
 greet: () => console.log(`Hey ${this.firstName}`), // hey undefined , since arrow operator, no this, calls global this
//solution 1 -> self  
//solution self=this; // self or that to prevent this
 const fun = function(){  // why? since it behaves same as a regular function decleration i.e. undefined, to solve it use self
  console.log(this);//undefined  // self
  console.log(this.year)//error, year of undefined?// self .year
 }
 fun();
//solution 2 , will work since arrow operator desnt have there own this so will use its parent's this.
const fun = ()=>{  // why? since it behaves same as a regular function decleration, to solve it use self
  console.log(this);//this== jonas
  console.log(this.year)
 }
 fun();
}
jonas.greet();

// argument keyword only exist in regular function decleration and expression but not in arrow function, in arrow operator error
const addExpr = function (a,b){
    console.log(arguments);
    return a+b;
}
undefined
addExpr(2,3);

Arguments(2) [2, 3, callee: ƒ, Symbol(Symbol.iterator): ƒ]
5
addExpr(2,3,4,5);
VM3184:2 
Arguments(4) [2, 3, 4, 5, callee: ƒ, Symbol(Symbol.iterator): ƒ]
0: 2
1: 3
2: 4
3: 5
..;


///// object (or reference type) vs premitive 
// js engine -> 1. call stack where execution context or object run 2. heap where object is stored
//primitive data type is stored in execution context
//primitive - number, bigint, string, boolean, undefined, null, symbol
// object - object literals, function, arrays, etc
              // in stack
let age =30;  // address - 0001 value - 30
let oldAge=age; // address - 0001 value - 30 (points to same address)
age = 31;  // address - 0002 value - 30 (points to different address) (value at an address is immutable)

//but for non premitive its same as call by reference
// call stack   // heap
// address - 0003 value - D304  /// address - D304 value -  { name: "mona", age: 20; }
const me = {
  name: "mona",
  age: 20;
}
//(FRIEND POINTS TO SAME ADDRESS)
const friend = me; // address - 0003 value - D304  /// address - D304 value -  { name: "mona", age: 20; }
// Doesnt create new in stack but goes to the place pointing in heap and change that 
// thus 1. change visible to all (new name not new object)
//2.  thus we are able to change const object as its value in call stack remains the same
me.age=27;  // changes in both

// but we dont want that, we want to create a new copy/object
// we can do shallow copy, deep copy
// shallow copy

const meCopy = Object.assign({},me); //combines but friend 2 will get a new copy
//now changing, me or friend2 wont change the other one but a new copy will be created
// a new example for shallow and deep copy
// as shallow copy will fail for object inside object

const me = {
  name: "mona",
  age: 20;
  family: ["alice", "bob"],
}

const meCopy = Object.assign({},me); // shallow copy
meCopy.family.push("mary")
both me and meCopy family got changed 

//deep copy
//will do using external library later

/*

Finally, before dismissing an employee, the employer has to hold disciplinary
proceedings (domestic enquiry) in a proper way. In case of discharge, he may
or may not go for it.*/
