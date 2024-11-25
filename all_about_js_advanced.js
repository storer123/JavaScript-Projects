
//In JavaScript, destructuring is a shorthand syntax that allows you to unpack values from arrays or objects into distinct variables. 
// nested and default destructuring
const arr = [1,2,[3,4]]
let [a,,[c,d],e=1]=arr
a->1
c->3
d->4
e->1/ undefined if not default as will start unpacking thing that doesnt exist

//destructuring object
// we need curly braces to destructure it
// we dont need to leave empty spaces as order doesnt matter in object

//destructuring object
// we need curly braces to destructure it
// we dont need to leave empty spaces as order doesnt matter in object
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
};
const { name, openingHours, categories } = restaurant;
// providing them with new names
const {
  name: restaurantName = 'starbucks', //default menue
  openingHours: hours,
  categories: tags = [],
} = restaurant;
console.log(restaurantName, hours, tags);

//nested objects
let {
  fri: { open: o, close: c },
  sat: { open, close },
} = hours;
open++;
console.log(open, close);

//real application for destructuring, order will not matter for parameters, just name should remain the same
restaurant.orderDelivery({
  time: '20:30',
  address: 'Vin land Saga',
  mainIndex: 2,
  starterIndex: 1,
});
Order recieved! Bruschetta and Risotto will be delivered to Vin land Saga at 20:30

// mutating variables
let a=10;
let b=20;
const obj={a:23,b:24};
let {a,b}=obj; // can't do because we dont want a copy
const {a,b}=obj; // can't do since a and b already exists above
{a,b} = obj; // cant do as js expects {} as code block, and we can't assign anything to a codeblock
({a,b}) = obj;


//spread operator
const arr= [6,7,8]
const newBadarr = [1,2,3,arr]
const newBadarr2 = [1,2,3,arr[0],arr[1],arr[2]];
const newGoodarr = [1,2,3, ...arr]
congole.log(...arr) == console.log(6,7,8)

//spread operators works on all iterables : arrray, sets,maps,strings (not object but from es18+ it works on object as well)
// can be used to join 2 arrays
newMenu = [...restaurant.mainMenu, ...restaurant.starterMenu]

somefun (ing[0],ing[1],ing[2]) ==somefun (...ing) 

//for obj
const newRestaurant= {foundIn:1981,...restaurant,fuinder:"veal"};
// it is also a method to perform shallow copy for object
//shallow copy
const copyRes = {...restaurant}
restaurant.name="xyz";
//now both copyres and restaurant will have different name.

//use cases of spread operator
// 1build new object with shallow copy
// 2build new array (by spreading and combing the existing ones)
//3to pass multiple value in a function

//spread operator is used to unpack an array
//while rest is used to pack it
//when on right side of assignment operator it becomes spred
// when on left it becomes rest

const [a,b,...others] = [1,2,3,4,5,6]
other = [3,4,5,6]
//rest in function
const add=function{...num}{ // now we can pass both array, or individual numbers
  let sum=0;
  for(let i=0;i<num.length;i++)sum+=num[i];
  return sum;
}
add(1,2)
add(1,2,3,4,4,5)
const x=[1,2,34,4]
add(...x);

// the first truthy or last falsey
// short circuiting using or || operator -> it will print the 1st truthly value 
console.log(3 || "john");//3
console.log(null || undefined);//undeined
console.log(true || 0);//true
console.log(0||true );//true
console.log(undefuned || null ); // null

restaurant.numguest=23 //doesnt exist // both wont work if "= 0 "// both will show 10 but we wanted  0
const guest1= restaurant.numGuest || 10; //if doesnt exist is same as
const guest2 = restaurant.numguest? restaurant.numGuest : 10;

//the last truthy or firsst falsey
// and operator shortcircuit's the value -> if falsely is present directly return false
console.log(3 && "john");//john
console.log(null && undefined);//null
console.log(true && 0);//0
console.log(0 && true );//0
console.log(undefined && null ); //undefined
console.log(3 && "john" && 4);//john

//practical example
if(restaurant.order){
  retaurant.order('spinach','guava');
}
restaurant.order && retaurant.order('spinach','guava');

// but dont go around replacing if with and shortcircuit as it will make the code hard to read

//The Nullish Coalescing Operator (??) es20+
//short circuit for nullish value : null and undefined, will work for 0
restaurant.numguest=0 //doesnt exist // both wont work if "= 0 "// both will show 10 but we wanted  0
const guest1= restaurant.numGuest || 10; //0 // if doesnt exist =>10

//Logical Assignment Operators es21+
or assignment
||=
nullish assignment
??=
and assignment 
&&=

//for of loop
for(const item of menu)console.log(item);

// what if we need element
for(const item of menu.entries())console.log(item[0],item[1]);

// destructure it
for(const [i,el] of menu.entries())console.log(i,iel);

//enhanced object literal (object literal, when we literally write object using curly braces)
arr = [ab,bc]
const obje = {
  [arr[0]]:{   // enhanced way to write property
    open:12,
    close:22,
  },
  [arr[1]]:{
    open:12,
    close:22,
  },
};

const rest ={
  name:"fg",
  star:3,
  obje, // ES6 enhanced object literal
  fun : function(a){} // old way
  fun(a){} //new way
};


//optional chaining
// say for some restaurant openingHrs may not exist , if it does mon (monday may not exist)
if(restaurant.openingHrs && restaurant.openingHrs.mon){  // to not get an error
  console.log(restaurant.openingHrs.mon.open)
}
//optional chaining ?.
// if it exisit ,opening hour can also be 0 so we cant use or, so nullish coalation operator ?? to be used as or instead
console.log(restaurant.openingHrs?.mon?.open ?? "closed")//->if the whole thing exist(not nullish) get it .open else return undefined (not error)

//option chaining on method
console.log(restaurant.fun2?.(1,2)??"fun2 does not exisit");
//array
console.log(user[0]?.name ?? "user array empty");


// looping objects
//looping over property names/keys
const properties = Object.keys(openingHrs);
for(const day of Object.keys(openingHrs)){cl(day)};
//property value
const values = Objects.values(openingHrs);
cl(values);
// entire object
const entries = Object.entries(openingHrs);

for (const [key, value] of entries){}

// set
//collection of unique values

const orderSet = new Set(["hi", "hello","hi","hi","who"])
Set(3) {'hi', 'hello', 'who'}
0: "hi"
1: "hello"
2: "who"
orderSet.add/delete /(to remove all) clear /size
no way to get data out of set

if you want them in array
const uniqeArr = [... new Set(staff)];

//maps
const rest = new Map();
rest.set("name":"classico futo");
rest.set(1:"classico futo  1");
rest.set(2:["classico futo 2","and many more"]);
rest.set(true,"we are open").set(false,"we are closed");

rest.get("name");
rest.set("open":11).set("close",23);
rest.get(time>rest.get("open") && time<rest.get("close"));
rest . set/get/has/delete(key)/clear/size

rest.set([1, 2]: "hi");
rest.get([1, 2]) // it won't work as [1, 2] points to different place
// to make it point to same heap
const arr=[1, 2];
rest.set(arr: "hi");
rest.get(arr)

// another way
const quest = new Map({
  ['question',"which programming lang"],
  [1,"C++"],
  [2,"javaScript"],
  ["correct",3]
});

//(this is array of arra, isnt it same as Object.entries)
const hrsMap=new Map(Object.entries(openingHours));

for(const [key,value] of question ){
  if(typeof key==='number')
  console.log(key,value);
}

// map to array
cl([...quest]);
cl(quest.key()/values());

// when to use whihc ds
// source of data
// 1. from program itself 2. from external sources like api's 3. from ui - data input by user or from DOM
//4 BUILT IN DS IN JS
//SIMPLE LIST -> ARRAY OR SET 
//ARRAY-> WHEN WE NEED TO MANIPULATE DATA, WHEN WE NEED ORDERED AND DUPLICATE DATA,
//SET -> WHEN NO MANIPULATIO0N, HIGH PERFORMANCE, AND UNIQUE DATA
// KEY/VALUE PAIR -> OBJECTS OR MAPS 
//MAPS-> BETTER PERFORMANCE, SIMPLE KEY/VALUE, KEYS THAT ARE NOT STRING
//OBJECTS -> NEED TO INCLUDE FUNCTION , WHEN WORKING WITH JSON

for(let [time,event] of gameEvents)
        console.log(`[${time > 45 ?"[SECOND HALF]": "[FIRST HALF]"}] : ${event}`);

const events = [...new Set(gameEvents.values())];
console.log(events);

@@@@@@@@@@@@
// passing a primitive data type is same as
const a = b;
//the one which changes will point to main memory
//passing a non-primitive (object, array , etc) is same as passing by reference
const obj1=obj2
//change in one will affect the other as both points to the same thing
// in reality js only has pas by reference -> do refer the heap and stuff

// in js functions are first class function - i.e. they are treated as(a type of objects or) values
//its just a concept , not that it practically exist
//which enables to use higher order function-> a function that returns function or a function whose parameter is a function
const upperFirstWord(){
  const [first,...other] = str.split();//rest
  return []first.toupperCase(),...other].join(" ");//spread
}

const fun = function(str,func){func.name;// method for function -> bind, name, etc (since its also treated like value)};//higher order function

const greet = function (greeting){
  return function(name){               // if not declared how is it working (due to clouser)
    console.log(`${greeting} ${name}`);
  };
};

const greetHey = greet("Hey);
greetHey('Jonas'); 
//OR
greet("Hey")("Jonas");

// with arrow function
const greet = (greeting)=> (name)=> console.log(`${greeting} ${name}`  ;                            
                              
// to make this function point to certaing stuff, we can use call method of a function
const fun=SomeObj.fun;//that fun will containg this.x, this.y;
fun(x,y)// error , since normal function has no this/ undefined
fun.call(jonas,x,y)// correct as this = jonas now
                               //apply same thing but instead of original argument it is takes array
const arr = [x,y]
fun.apply(jonas,arr);

//call / apply/ se better-> bind  // instead of again and again call or apply use bind once and use many times
const funJonas= fun.bind(jonas);
funJonas(x,y);
or
const funJonas= fun.bind(jonas,x); // partial application -> part of parameter is already defined
funJonas(y);
//if this not needed but partial application neede
const addVAT= addTax/*normal function*/.bind(null,0.1);

// bind use 1. to bind this to an object once and for all, 2. partial application ,  3.with event listners
// in case of evnt listner , this key word points to the element it is attached to,(means that the function which will be called inside event listner will call the element like <p>sfghry</p>)
 // toprevent tat use bind
addEventListner('click',jonas.fun.bind(jonas));                              
                               
//Immideately Invoked Function Expression (IIFE)
// A FUNCTION THAT ONLY RUN ONCE USED IN ASYNC AWAIT
const runOnce = function(){
  console.log("this will run again");
};
(function(){
  console.log("this will never run again");
})(); //()to call it in inner scope , which wont give its access to parent as it works the other way around
(()=>{
  console.log("this will never run again");
})(); //()to call it in inner scope , which wont give its access to parent as it works the other way around
                             
//() create a seperate scope
//variables defined with let and const also creates their own scope
{const isPrivate=23;
var notPrivate=43;}                     

// CLOUSERS
// closure happens automatically , not explicitally creaetd

const secureBooking = function(){
  let passenger = 0;
  return function(){
    pasengerCount++;
    coonsole.log(`${passengerCount} passengers`);
  };
};
const booker = secureBooking();

booker(); // passengerCount =1
booker();// passengerCount =2
booker();// passengerCount =3
//how? isnt let scope internal-> EC of secure booking should be lost(out of call stack once a called as it goes to heap), so how come variable remains same
// solution , why -> clouser

secure booking EC -> below+ variable env(passengerCount=0)
global execution context -> secure booking<f>
call stack
  |
  | later
  v
booker() EC -> below+ variable env of execution context in which it was created(passengerCount=0,1,2..)
global execution context -> secure booking<f>
call stack

(closure magically keeps having access to variables which shouldno linger exist)
clouser - VE variable environment attached to the function, exactly as it was at time and place the function was created
// clouser has priority over scope chain (thus let passenger count became secondary as it already had one in its clouser)

a clouser is the closed-over variable environment of the execution context in which a function was created, even after that execution context is gone;
     or
a clouser gives a function access to all the variables of its parent function, even after that parent function has returned. The function keeps a reference to its outer scope, which preserves the scope chain throughout time.
  or
a clouser makes sure that a function doesnt loose connection to variables that existed at function's birth place;

//example 1

let f;

const g=function(){
  const a=20;
  f= function(){console.log(a*2);}
};
const h=function(){
  const b=30;
  f= function(){console.log(b*2);}
};

g();
f(); -> console.dir(f)   -> clouser a=20

//re-assigning f function
h();
f(); -> console.dir(f)   -> clouser b=30 (no a here, it vanished when the clouser part changed)
                               
 // example 2
const boardPassengers = function(n,wait){
  const perGroup = n/3;
  setTimeout(function(){
    console.log(`we are now boarding all ${n} passengers`);
    console.log(`There are 3 groups , ech with ${perGroup} passengers`);
  },wait*1000);//to convert in millisec
  console.log(`will start boarding in ${wait} seconds`);
};
const perGroup =1000; // it wont take this perGroup showing cluser takes priority over scope chaining
boardpassengers(180,3); 
//boardPassengers will be called executed and finished, after that setTimeout function will work taking varuables using clouser

//example 3
// event listner will work and access h1 part thats shouldn't be in memory , just like setTimeout
let a;
(function(){
    const header = document.querySelector('h1');
    header.style.color ='red';
    
    document.querySelector('body').addEventListener("click",function(){ // clouser, will use later but will still work
        header.style.color='blue';
    })
})();


//Arrays-Bankist
//why do array have methods because they are objects, methods are function attached to methods
//arr.slice
to create a shallow copy for array
console.log(...arr)
or
console.log(arr.slice()); // but with slice we can also chain other methods , does not mutate 
// splice
arr.splice // mutates the array -> the one it chooses gets removed from arr
arr.splice(1,3) from 1 delete 3 elements
arr.reverse() // it also mutates the array
const a=arr.concat(arr2);
or
const a= [...arr,...arr2];m      
//join
const str=arr.join("-");
//push, unshift, indexOf, pop,includes, etc

arr[0] vs arr.at(0)
for method chaing at method is useful, lets say for last value arr[arr.length-1] or arr.slice(-1)[0] or arr.at(-1)

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
// for of
for(const [i,movement] of movements.entries()){
  if(movement>0){
    console.log(`you deposited ${movement}`);
  }
  else{
    console.log(`you withdrew ${Math.abs(movement)}`);
  }
}
//forEach - executes a provided function once for each element in an array.
//Cannot use break, continue, or return
//Does not support async/await 
//Performance	Generally slower for large arrays compared to for...of
movements.forEach(function(movement,i,array) { // we can use all three or none
  if(movement>0){
    console.log(`${i+1}. you deposited ${movement}`);
  }
  else{
    console.log(`${i+1}. you withdrew ${Math.abs(movement)}`);
  }
  console.log(array);
});
// for map and set
currencies.forEach(function(value,key,map){
  console.log(value,key,map);
})
currenciesUnique.forEach(function(value,key,map){// in set key == value , but signature like this is a must
  console.log(value,key,map);
})

so instead of key for set use "_" -> which represen a throw away variable 




//*Bankist array part*
textcontent -> only content but insertAdjacentHTML-> TO INSERT HTML AND ineerhtml-> whole html


// data transformation with , map filter and reduce
// map - similar to forEach , but creates a new array, maps the value of original array to a new array (applying some operation of data of old array to new array
// fi;lter - only elements that pass the test will get in new array, others get filtered
// reduce-> boils/reduce all array element down to a  single value (using accumulatr)
// map method
const newmovements=movements.map(function(mov){return mov * 2}); // new array will be created
//or
const newmovements=movements.map((mov)mov * 2);
const createUsernames = function(accs){
  accs.forEach(function(acc){
    acc.usernames=acc.owner.toLowerCase().split(" ").map((name)=> name[0]).join("");
  })
}

//filter
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposit = movements.filter(function(mov){return mov>0;});
console.log(deposit);
//array.filter(callback(currentValue, index, array))

//reduce
const balance = movements.reduce(function(acc/*accumulate - remains */, cur, i,arr){
  return acc+cur;
},0/*initial value of accumulator */);
console.log(balance);
//example
const calcDisplaySummary = function(movements){
  const income = movements.filter((mov)=>mov>0).reduce((acc,cur) =>acc+cur,0);
  labelSumIn.textContent=`${income}`;
  const expenditure = movements.filter((mov)=>mov<0).reduce((acc,cur)=>acc+cur,0);
  labelSumOut.textContent=`${Math.abs(expenditure)}`;
  const interest=movements.filter(mov => mov>0).map(deposit => deposit*1.2/100).filter((int, i, arr)=>{
    return int>=1;
  }).reduce((acc,cur)=>acc+cur);
  labelSumInterest.textContent=`${interest}`
};
calcDisplaySummary(account1.movements);

// avoid chaining as it reduces performance
// dont chain with methods thatmutate array like splice or reverse


// find method , to find one element based on certain conditions
const firstWithdrawal=methods.find(mov=> mov<0); //will return the first instance where given condition is true
//const account = accounts.find(acc=>acc.owner==="Jessica Davis");
//console.log(account);
btnTransfer.addEventListener("click",function(e){
  e.preventDefault();// to prevent form submission, which in turn refreshes the page
  const amount = Number(inputTransferAmount.value);
  const inputTransferToWhom=inputTransferTo.value;
  const recieverAccount = accounts.find((acc) => acc.username === inputTransferTo.value);
  console.log(amount,recieverAccount);
});

// findIndex -> insted of indexOf -> we can create complex conditions to check from
btnClose.addEventListener("click",function(e){
  e.preventDefault();
  const currentAccountIndex = accounts.findIndex((acc) =>  {return acc.username === inputCloseUsername.value && acc.pin ===  Number(inputClosePin.value)});
  if(currentAccountIndex>=0){
    console.log( accounts.splice(currentAccountIndex,1));
  }
  console.log(accounts);
});
//some and includes
  //includes work for equality, some works like if something satishfying this condition exist
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements.includes(450),movements.indexOf(450)>=0,movements.findIndex(cur=>cur===450)>=0),movements.some(mov=>mov===450));
const anyDepositGrTh400 = movements.some(mov=>mov>400); // mov=>mov===450
console.log(anyDepositGrTh400);
 // every method// only if all elements pass the test it is true
  console.log(movements.every(mov=>mov>0));

// flat method
const arr1levelnesting = [[1,2,3],4,5,[6,7]]
arr1levelnesting.flat(); [1,2,3,4,5,6,7]
const arr1levelnesting = [[1,[2],3],4,5,[[6],7]]
arr1levelnesting.flat(2); [1,2,3,4,5,6,7] ->> no of levels deep

const accountMovements = accounts.map(acc=> acc.movements).flat();
  
// since its common
//we use flatmap
accounts.flatmap(acc=> acc.movements);

// sort -> mutates the array
//else return >0 b,a
movements.sort((a,b)=> {  // or return a-b;
    if(a>=b)return 1;
    return -1;
});
console.log(movements);

//array some hidden new behaviour
const arr= new array(4) // will not create [4] but [,,,] -> exception if only 1 element
but new array (4,5)// [4,5]

//now how to fill that empty array , even works with pre filled array
//fill method -> mutates
  arr.fill(2)// entire arrwith 2 [2,2,2,2]
  arr.fill(2,startindex,endindex)

// better to use below this instead of new Array, then fill method
//Array.from() not a method (Array not some object array)
const y = Array.from({length:4},()=>1); //y=[1,1,1,1]
const y = Array.from({length:4},(_,i)=>i+1); //y=[1,2,3,4]


// it was created for iterables, to convert array from iterables
// movement form UI

//console.log( document.querySelector(".movements_value"));//we get a nodelist 
labelBalance.addEventListener("click",function (){
  const movementsUI = Array.from(document.querySelectorAll(".movements__value")).map((elemen=>elemen.textContent.replace("₹","")));
  console.log(movementsUI);
//or
  const movementsUI2 = [...document.querySelectorAll(".movements__value")]//then map later , thus for this from was better
});
// for removing some words for getting executed by the function
//exception.includes(x)? x : x.fun();

//in js
0.1+0.2 !== 0.3 but === 0.300000000004 or something, issue since numbers are stored in binary form

// to convert to a number
console.log(Number("23"));
console.log(+"23"); // better as cleaner
//parsing -> only if the number is at first, or after blank space or \n etc
console.log(Number.parseInt("\n 30.3sfd"));//30
console.log(Number.parseFloat("\n 30.3sfd"));//30.3

//checking if value is a number
//check if value is a NaN
console.log(Number.isNaN("20")); //false                          
console.log(Number.isNaN(+"20"));   //false
console.log(Number.isNaN(20));   //false
console.log(Number.isNaN("xyz"));//false (some regular string ,but not -  not a number)
console.log(Number.isNaN(20/0));      //false
console.log(Number.isNaN(+"20rd"));   //true -> this is not a number (we are trying to convert to a number)
console.log(Number.isNaN(+"dsfg"));  //true

//is a proper number / finite
console.log(Number.isFinite("20")); //false                          
console.log(Number.isFinite(+"20"));   //true
console.log(Number.isFinite(20));   //true
console.log(Number.isFinite("xyz"));//false 
console.log(Number.isFinite(20/3));      //true
console.log(Number.isFinite(+"20rd"));   //false 
console.log(Number.isFinite(+"dsfg"));  //false
console.log(Number.isFinite(20/0));      //false -> since infinite

// similarly isInteger
console.log(Number.isFinite(+"20"));   //true
console.log(Number.isFinite(20.0));   //false
console.log(Number.isFinite(20/3));   //false

// some mathematical functions -> all of these do type coersion
Math.sqrt(4.5);
//or
4.5 ** (1/2);
Math.max()//it can do type cohersion but not parsing
Math.max(1,2,8,"4","9") ->9
Math.max(1,2,8,"4px","9") ->NaN
Math.PI();
.min()
.ceil()
.floor()
.trunc()
.round()
.random()
.toFixed(0,1,2,3=>after decimal )-> will result in string with round
5.45.toFixed(1)->"5.5"
+(5.45).toFixed(1)-> 5.5
// a function to get number between min and max
const rendomInt = (max,min)=> { Math.floor(Math.random()*(max-min+1)) + min };  //0..6 ->  2..8

//numeratic seperators -> we can use it to enhance visiblity
diameter = 345_354_556_000;
//but 3._14 or 3_.14 not work
//number("234_000")->NaN
//IF PARSEINT ->234
// ONLY 53/64 ARE USED FOR NUMBER -> 2^53-1 OR Number.MAX_SAFE_INTEGER
console.log(324536765425346554354657534n)->bigInt
or console.log(BigInt(324536765425346554354657534))-> but this one has low accuracy for large numbers, then why use this
const huge = 12342564758643253n;
const num = 2134
console.log(huge * BigInt(num));
console.log(20n === 20)->false
console.log(20n == 20)-> true
Math.sqrt(huge)->error
console.log(20n/3)->error
console.log(20n/3n) -> cuts of decimal part -> 6n
console.log(20/3) -> 6.66667

//create Date
const now= new Date();
console.log(now);
console.log(new Date('aug 02 2020 18:05:41'));
console.log(new Date("dec 24,2015"))// but unreliable
console.log(new Date(2037, 9, 19, 15, 23 , 5));//year, month-1, date, hrs,minute, second
//can also auto correct if wrong input
console.log(new Date(0));//->from when it was created

// Working with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear()); // dont use getYear
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
console.log(future.toISOString());
console.log(future.getTime());

console.log(new Date(2142256980000));// based on milli second

console.log(Date.now());

future.setFullYear(2040); // can use set before thhe above to set dates
console.log(future);


///////////////////////////////////////
// Operations With Dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);//-> convert to milli sec

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
console.log(days1);


///////////////////////////////////////
// Internationalizing Numbers (Intl)
// to get local code from system and not standard time
const locale = navigator.langyage;
console.log(locale);
const num = 3884764.23;

const options = {
  style: 'currency',
  unit: 'celsius',
  currency: 'EUR',
  // useGrouping: false,
};

console.log('US:      ', new Intl.NumberFormat('en-US', options).format(num));
console.log('Germany: ', new Intl.NumberFormat('de-DE', options).format(num));
console.log('Syria:   ', new Intl.NumberFormat('ar-SY', options).format(num));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language, options).format(num)
);


///////////////////////////////////////
// Timers

// setTimeout
const ingredients = ['olives', 'spinach'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`),
  3000,
  ...ingredients // here to give value
);
console.log('Waiting...');

if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);// this will clear timeout befor 3 sec

// setInterval
setInterval(function () {
  const now = new Date();
  console.log(now);
}, 1000);
similarly clearInterval;

//oop
instead of class->object -> prototype(constains method) <- object(can access method)->thus it is called prototypal inheritance, or deligation- behaviour is deligated to the linked prototype object
arr num (.map not here but) array.prototype.map here

// to create prototype
1. constructor function (to create object form function(array,map,set are implemented by this)
2. ES6 Classes (layer of abstraction over constructor function)
3. Object.create(easiest)

// constructor function is similar to normal function, just called using new keyword
// convention to start constructor function with capital letter
//function decleraion and function expression works, but not arrow as it needs this operator
const Person = function(firstName,birthYear){
    console.log(this);
    this.firstName=firstName;
    this.birthYear=birthYear;
    console.log(this);
};
new Person("ram",1991);
//when we call a function with a new operator
//1. new {} (empty object is created)
//2.function is called , this = {} (this keyword is set to object)
//3. {} linked to prototype
//4. funciton automatically returns {} (which we can change so need not be empty)

'use strict';
const Person = function(firstName,birthYear){
    //console.log(this);
    //instance properties  -> these are own property of object
    this.firstName=firstName;
    this.birthYear=birthYear;
    //console.log(this);

    // this.calcAge(birthYear){ // bad practice since each object/instamce will carry this
    //     console.log(2037-birthYear);
    // }
};
//do this instead -> thesse are not owned by object but inherited insteaad
console.log(Person.prototype); // object has acess to its prototype , to see (jonas.__proto__)
Person.prototype.calcAge=function(birthYear){ // bad practice since each object/instamce will carry this
    console.log(2037-birthYear);
}
console.log(Person.prototype);
new Person("ram",1991);
//when we call a function with a new operator
//1. new {} (empty object is created)
//2.function is called , this = {} (this keyword is set to object)
//3. {} linked to prototype
//4. funciton automatically returns {} (which we can change so need not be empty)
const jack=new Person("rama",1991);
const ja=new Person("ram",1992);
console.log(ja.__proto__,jack);

// to check if something is instanceof something
console.log(jack instanceof Person);
console.log(Person.prototype.isprototype(Person));->false (jack)->true

// constructor has .prototype property
// prototype has .constructor property
//person.prototype is not prototype for person, but objects created by person
// an object has .__proto__ property which points to objects prototype  (person.prototype (it itself is an object as well))
jonas.calcAge() -> jonas cant find it in its property so it goes to find in prototype
all objects will call to the same prototype so Person.protoype has prototype-> Object.prototype (top of prototype chain which points to null)
person.prototype must also have a prototype
prototype chain -  (this is how properties will be searched as well) object -> person.prototype-> object.prototype (these are different constructor functions)
jonas.hasOwnProperty("NAME")-> NOT IN OBJ, NOT IN person.protoype, but in object.prototype (which later points to null, and has some predefined property)
console.log(jack instanceof Person);
console.log(jack.__proto__);//->(person.prototype)
console.log(jack.__proto__.__proto__);//->(Object.prototype)
console.log(jack.__proto__.__proto__.__proto__);//->null
console.log(Person.prototype.constructor);//->(will point back to function itself)
console.dir(Person.prototype.constructor); // to inspect the function

const arr= [3,4,5,6,7] // short hand of new Array === []
//therefor
console.log(arr.__proto__===Array.prototype);
// all arrays will inherit this method
Array.prototype.unique = function(){
    return [...new Set(this)];
}
//extending prototype of a built in object is not a good idea? since in newer version same name might be used and if multiple developers are working on it it might create bugs and confusion
console.log(arr.unique());

const h1=document.querySelector("h1");
console.dir(h1);
console.dir(x=>x+1);// afunction is also an object so it must also have a prototype (inside, apply, bind, call);

// ES6 classes // just a syntax sugar
//class expression
//const PersonCl = class{};
//class declaration
class PersonCl{
    constructor(firstName,birthYear){
        this.firstName=firstName;
        this.birthYear=birthYear;
    }
    // all of the stuff outside the constructor will be a part of prototype and not the object
    calcAge(){
        console.log(2037-this.birthYear);
    }
}
const jessica = new PersonCl("jessica",1996);
console.log(jessica);
//or
PersonCl.prototype.calcAge = function(){
    console.log(2037-this.birthYear);
}
jessica.calcAge();

//1 classes are not hoisted (unlike function declaration)
//2 classes are also 1st class function
//3 classes are always (inbuilt) executed in strict mode.
/*(hoisting
console.log(myFunction()); // Works fine
function myFunction() {
  return "Hello, World!";
}
)*/
//getters and setters -> ***like a property not function or method
const account = {
    owner: "jonas",
    movements : [200,530,120,300],
    get latest(){ // getter  
        return this.movements.slice(-1).pop();
    },
    set latest(mov){ // setter
        this.movements.push(mov);
    }
};

console.log(account.latest);
account.latest=50;           // if it would have been a method (account.latest(50))
console.log(account.latest);

// setters and getters can also be used for validation
class PersonCl{
    constructor(fullName,birthYear){
        this.fullName=fullName;
        this.birthYear=birthYear;
    }
    // all of the stuff outside the constructor will be a part of prototype and not the object
    calcAge(){     //instance method (as added as an instance of prototype)
        console.log(2037-this.birthYear);
    }
    //set a property that already exist
    set fullName(name){ //since this property already exist, change this._propertyname (convention to give a different variable name)
        if(name.includes(" "))this._fullName=name;  
        else alert("Not a full name");
    }
    get fullName(){ 
        return this._fullName;
    }
    Static hey(){               // its attached to person constructor not inherited by object (not present in prototype)
      console.log("HEY there");
    }
}
//static method
Person.hey = function(){console.log("HEY there");} // this is a static method, not inheritred by others
Person.hey();
jonas.hey();//error

const jessica = new PersonCl("jessica f",1996);
console.log(jessica);
//or
PersonCl.prototype.calcAge = function(){
    console.log(2037-this.birthYear);
}
jessica.calcAge();
console.log(jessica._fullName);

//3rd way object.create (no new operator, constructor function or protoype properties involved), in real world not used much
const PersonProto ={
    calcAge(){
        console.log(2037-this.birthYear);
    },
    //any name not necessary init
    init(firstName,birthYear){
      this.firstName=firstName;
      this.birthYear=birthYear;
    },
};
const steven = Object.create(PersonProto);
console.log(steven);
//steven.name = "steven";
//steven.birthYear= 2002;
//or
steven.init("steven",1991);
steven.calcAge();
console.log(steven.__proto__===PersonProto);//true
// when new keyword is used it automatically sets prototype of object to constructor prototype
// object.create manually sets prototype
//used for inheritance


const Student =function(firstName,birthYear,course){
    Person.call(this,firstName,birthYear); // person's this becomes Student's this
    this.course= course;
}
//Linking prototype
//we can do 
//Student.prototype=Person.prototype;// but wrong as students object will point to prototype of person and not student
// we want person's prototype to be inherited by student.prototype or student's protoype should point to person prototype
Student.prototype= Object.create(Person.prototype);
//student.prototype.constructor should point back to student but due to above its pointing to person
Student.prototype.constructor=Student;


Student.prototype.introduce = function(){
    console.log(`My name is ${this.firstName} and I study ${this.course} and I am ${this.calcAge()} years old.}`);
};
const mike = new Student("MIKE",2020,"CS");
mike.introduce();
//calc age is called by going up in prototype chain
console.log(mike instanceof Student);//true
console.log(mike instanceof Person); //true
console.log(mike instanceof Object); //true

//polymorphism if same name method in both parent and child class , child class method or property will be called

//class inheritance in ES6
//only 2 suff, extends and super
// constructor and super is only needed if extra parameters , else no need for constructor or super 
class StudentCl extends PersonCl {  //"extend" will setup prototype chaining so we dont have to do it on our own
    constructor(fullName,birthYear,course){
        // always need to happen first
        super(fullName,birthYear);
        this.course=course;
    }
    introduce = function(){
        console.log(`My name is ${this.fullName} and I study ${this.course} and I am ${this.age} years old.}`);
    }
};
const martha = new StudentCl("martha jones",1991,"CS");
martha.greet();
martha.introduce();

//object.create -> just linking object, so better than faiking classes
const PersonProto ={
    calcAge(){
        console.log(2037-this.birthYear);
    },
    init(firstName,birthYear){
        this.firstName=firstName;
        this.birthYear=birthYear;
    },
};

const steven = Object.create(PersonProto);
const StudentProto = Object.create(PersonProto); //person proto is prototype of student proto
StudentProto.init=function(fullName,birthYear,course){
    PersonProto.call(this,fullName,birthYear);
    this.course=course;
}
const jay= Object.create(StudentProto);//StudentProto is prototype of object

///////////////////////////////////////
// Encapsulation: Protected Properties and Methods
// Encapsulation: Private Class Fields and Methods

// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version for each of the 4 )

class Account {
  // 1) Public fields (instances)
  locale = navigator.language;

  // 2) Private fields  (instances)
  #movements = [];  
  #pin;           //write here before calling in constructor

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;

    // Protected property -> not supposed to touch outside the class (convention)
    // this._movements = [];

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // 3) Public methods

  // Public interface
  getMovements() { // -> its common to use like this instead of real getter or setter
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;  // for chaining
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
     if (this.#approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  static helper() {
    console.log('Helper');
  }

  // 4) Private methods
  #approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111);

// acc1._movements.push(250);
// acc1._movements.push(-140);
// acc1.approveLoan(1000);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());
console.log(acc1);
Account.helper();

// console.log(acc1.#movements);
// console.log(acc1.#pin);
// console.log(acc1.#approveLoan(100));

// Chaining
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements());
///////////////////////////////////////oop end - dom start //////////


//DOM
   (.addeventlistner() , .removeeventlistner())event target(1 node, 2 window)
//Allows to make js interact with browser
// we can write js to create, modify, delete html elements, set styles and attributes, and listen and respond to events
// DOM  tree is generated from html document, with which we can interact, which consists of nodes
// it is a very complex api that contains lots of methods and properties to interact with dom tree
// every node is represented as js object ->
// get access to special node methods like .textcontent,childnodes, parentnodes, clonenode
//types of nodes -> element-(html button element, html div element,etc), text, comment, document(queryselector, create element, getelementbyid)|
// inheritance, child will get acess to all methods of parent type

///////////////////////////////////////
// Selecting, Creating, and Deleting Elements

// Selecting elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));

// Creating and inserting elements

.insertAdjacentHTML // DIRECTLY INSERT IN HTML
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookied for improved functionality and analytics.';
message.innerHTML =
  'We use cookied for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message); // 1st child
header.append(message);  // last child
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

// Delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.remove(); newer
    message.parentElement.removeChild(message);
  });

  
///////////////////////////////////////
// Styles, Attributes and Classes
  
// Styles
//these are inline styles as dom directly inlines these stuffs
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.color); //blank
console.log(message.style.backgroundColor); //styles we set ourselves as inline so visible else down method

console.log(getComputedStyle(message).color);  
console.log(getComputedStyle(message).height); // but this is read only to change see below

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo';

// Non-standard
console.log(logo.designer);//wont work
console.log(logo.getAttribute('designer')); 
logo.setAttribute('company', 'Bankist');

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c'); // not includes
 
// Don't use -> overwrite all the classes + only 1 class can be added like this
logo.clasName = 'jonas';


///////////////////////////////////////
// Types of Events and Event Handlers
const h1=document.querySelector("h1");
//1.use event listner
// h1.addEventListener("mouseenter",function(e){
//   alert("you are reading the heading");
// })

//2. use onevent property
// h1.onmouseenter  = function(e){
//   alert("you are reading the heading");
// };

//1.2 export the function ->to remove event listner
const alert1=function(e){
  alert("yo! alert");
  //to use it for only once
  //h1.removeEventListener("mouseenter",alert1);
}
h1.addEventListener("mouseenter",alert1);
setTimeout(() => h1.removeEventListener("mouseenter",alert1),3000);

//3. directly change it in the element
//<h1 onclick="alert("html alert")>
///////////////////////////////////////////
// Event Propagation in Practice

//capturing and bubling event
//from document to that particular element in the tree, and then from that element to document 
//thus patterns can be made and used
//some are created directly in particular element

// event happens at root document then goes down to target,capture phase (document root -> target),
//but event handler doesnt pick up stuff during capture phase  ,
//but if you want to capture during capture phase you can add the 3rd parameter to it "true"
//when we click on nav link its also like click happens at navlinks and nav as it bubbles up
//+ e.target is same for all = nav__link (where click happens, not where its handled)
//e.current target is diffrent (where its handled) = "this"
//we can stop the propogation from bubbling up, but its not a good practice
document.querySelector(".nav__link").addEventListener("click",function(e){
  this.style.backgroundColor = randomColor();
  console.log(randomColor(),e.target,e.currentTarget);
},true)
document.querySelector(".nav__links").addEventListener("click",function(e){
  this.style.backgroundColor = randomColor();
  console.log(randomColor(),e.target,e.currentTarget);
  //stopping propogation from bubbling up
  e.stopPropagation();
},true)
document.querySelector(".nav").addEventListener("click",function(e){
  this.style.backgroundColor = randomColor();
  console.log(randomColor(),e.target,e.currentTarget);
},true)
//due to stopping propagation 
//when 3rd parameter "nave__link" doesn't work, and nav happens 1st
//else  nav doesnt work, nav__link happens 1st
//bublling phase can be used for delegation

///////////////////////////////////////
// scroll , getBoundingClientRect();
buttonScrollTo.addEventListener("click",function(e){
  // const s2coords = section2.getBoundingClientRect();
  // console.log(s2coords);
  const coords = e.target.getBoundingClientRect();
  console.log(coords);
});
//x and y is relative to visible wondow/ viewport
//width  -> of target
//height -> of target
//x      -> form left
//y      -> from visible top to top of target
//left   ->target from left  = x
//right  -> target from right
//top    -> is top = y
//bottom -> top + height

// not realtive but real
//current scroll
//or window.scrollX
scrollX
scrollY
//height and width of viewport
document.documentElement.clientHeight;
document.documentElement.clientWidth;

//scrolling
buttonScrollTo.addEventListener("click",function(e){
  const s2coords = section2.getBoundingClientRect();
  //scrolling -old school
  // window.scrollTo(
  //   {
  //     left: s2coords.left+window.scrollX,
  //     top: s2coords.top,
  //     behavior:"smooth"
  //   });//same as x+scrolled and y+scrolled
  //new way
  section2.scrollIntoView({behavior:"smooth"});
});



///////////////////////////////////////
// Event delegation : page navigation
// document.querySelectorAll(".nav__link").forEach(function(el){ // but is it good if we attach 1000s of eventlistners to if 1000s of link -> thus use delegation
//   el.addEventListener("click",function(e){
//     console.log("LINK");
//     e.preventDefault();// stops going to #section--x
//     const id = this.getAttribute("href");
//     //we dont want absolute url but relative one i.e. the stuff which we have written in html
//     //else this.href
//     document.querySelector(id).scrollIntoView({behavior:"smooth"});
//   })
// });
// now using event delegation
// 1. Add event listner to common parent element
// 2. Determine what element origignated this event (where did we click on parnet)
document.querySelector(".nav__links").addEventListener("click",function(e){ //now only 1 event listner will be enough
  console.log(e.target);
  //matching strategy
  if(e.target.classList.contains("nav__link")){
    e.preventDefault();
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({behavior: "smooth"});
  }
});
///////////////////////////////////////
// DOM Traversing
const h1 = document.querySelector('h1');

// Going downwards: child
console.log(h1.querySelectorAll('.highlight'));// no matter how deep the child is ,qs will get it
console.log(h1.childNodes);//to see only direct child nodes( like text ,,comment and not just elements )
console.log(h1.children); // to only direct elements (not nodes)
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);
//not a direct parent,, closeset is oppsite of query selector no matter how far upwards will search and give
h1.closest('.header').style.background = 'var(--gradient-secondary)';

h1.closest('h1').style.background = 'var(--gradient-primary)';

// Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);
//all sibling
console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});
///////////////////////////////////////
//tabbed content
//use event delegation
//
//all 3 content are present we just need to activate and hide
//200 for 200 buttons 
//tabs.forEach(t=>t.addEventListener("click",()=> console.log("tab")));

//use event delegation
tabsContainer.addEventListener("click",function(e){
  
  const clicked = e.target.closest(".operations__tab");
  console.log(clicked);
  //gaurd clause
  if(!clicked)return; //  as container doesnt have button tab as its parent
  //activate tab
  //operations__content--active -> shows hidden stuff
  //operation__content hide stuff
  tabs.forEach(t=>t.classList.remove("operations__tab--active"));
  clicked.classList.add("operations__tab--active");
  //activate content tab
  tabsContent.forEach(c=>c.classList.remove("operations__content--active"));
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add("operations__content--active");
  //HTML: <div data-tab="1">
//JavaScript: clicked.dataset.tab
//In JavaScript, dataset maps the data-* attributes to camelCase property names. So, data-tab becomes dataset.tab (note the camelCase tab).

})
///////////////////////////////////////

//passing arguments to event handler
//menu fade animation
//but we cant add event listner to each link but we can use delegation


//const nav = document.querySelector(".nav");
//mouse enter does not bubble, so we use mouseover
//mouse enter- leave, mouse over-out (opposites)

const handleHover = function(e){
  const link = e.target;
    const siblings = link.closest(".nav").querySelectorAll(".nav__link");
    const logo = link.closest(".nav").querySelector("img");
    siblings.forEach(el=>{
      if(el !== link) el.style.opacity =this;
    });
    logo.style.opacity=this;
}
//wont work since we need opacity and event
//nav.addEventListener("mouseout", handleHover);
//wont work since  1. e not defined, 2.addeventlistner expects a function not a function call
//nav.addEventListener("mouseover",handleHover(e,0.5))
//work but can be made better
//nav.addEventListener("mouseover",function(e){handleHover(e,0.5)});
//we can use bind method
//bind method creates a copy of function thats called and sets the "this " keyword to whatever value we pass in it
nav.addEventListener("mouseover",handleHover.bind(0.5));
nav.addEventListener("mouseout",handleHover.bind(1));
//thus we are using this keyword to pass argument apart from event in addeventlistner, as add eventlistner can only take one real argument


///////////////////////////////////////
// Sticky navigation
const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords);

window.addEventListener('scroll', function () {
  console.log(window.scrollY);

  if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});

///////////////////////////////////////
// Sticky navigation: Intersection Observer API
//intersection observer api
//allows to obseve if some target stuff intersect some other stuff, and it reaches a certain threshold, if yes trigger it 
//will get called each time root and target intersects
//entries = array of threshold
const obsCallback = function (entries, observer) {
  entries.forEach(entry => {
    console.log(entry);
  });
};

const obsOptions = {
  root: null,
  threshold: [0, 0.2],
};

const observer = new IntersectionObserver(obsCallback, obsOptions);
observer.observe(section1);


const header = document.querySelector(".header");
const navHeight = nav.getBoundingClientRect().height;
const obsCallback = function (entries,observers) {
  const [entry] = entries;
  if(!entry.isIntersecting)nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};
const obsOptions = {
  root: null, //for viewport
  threshold: 0, // % of interesction at which callback function is called.
  //say 10% came in,100% in, 0% in/out
  //here 0% is visible then call function 
  rootMargin: `-${navHeight}px` ,//height of navigation
  //rootMargin - box outside target
};

const observer = new IntersectionObserver(obsCallback, obsOptions);

  //here as soon as header scrolls out of view
observer.observe(header);//header is the target, is intersecting viewport at 0 %
///////////////////////////////////////

//reveal element as you scroll close to it, or approach it
//slides in animation using css and js
//hide them,and move a bit down, when intersects, make them visible + natural height
//

//reveal sections
const allSection = document.querySelectorAll(".section");
const revealSection = function(entries,observer){
  const [entry] = entries;
  console.log(entry);
  if(!entry.isIntersecting)return;
  else
  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
}

const sectionObserver = new IntersectionObserver(revealSection,{
  root: null,
  threshold: 0.15,
});
allSection.forEach(function(section){
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
})

///////////////////////////////////////
//lazy loading

//lazy loading image to optimize the site-> best for performance
//low resolution loaded at beginning
//its ugly, then put filter i.e.blur

const imageTargets = document.querySelectorAll("img[data-src]");
const loadImg = function(entries,observer){
  const [entry] = entries;
  console.log(entry);
  if(!entry.isIntersecting)return;
  //replace src with data src
  entry.target.src = entry.target.dataset.src;
  //when it finishes it emits load event , if not listen and network slow it will unblur the ugly image
  entry.target.addEventListener("load",function(){

  entry.target.classList.remove("lazy-img");
  });
  observer.unobserve(entry.target);
}
const imgObserver = new IntersectionObserver(loadImg,{
  root:null,
  threshold: 0,
  rootMargin:"+200px"//to make it load a bit earlier
});

imageTargets.forEach(img => imgObserver.observe(img));
///////////////////////////////////////

//building a slider component


//slider
const slides = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");
let currSlide =0; 
const maxSlide= slides.length;

// const slider = document.querySelector(".slider");
// slider.style.transform = "scale(0.5) translateX (-300px)";
// slider.style.overflow = "visible";



const gotoSlide = function(slide){
  slides.forEach(
    (s,i)=> s.style.transform = `translateX(${100 * (i-slide) }%)`);
}
//dot mover

const dotContainer = document.querySelector(".dots");
const createDots = function(){
  slides.forEach(function(_,i){
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      )
  });
};

createDots();

//activate dot
const activateDot = function(slide){
  document.querySelectorAll(".dots__dot").forEach(
    dot => dot.classList.remove("dots__dot--active"));
  document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add("dots__dot--active");
}
activateDot(0);
gotoSlide(0);
//next slide , -100,0,100,200
const nextSlide = function(){
  if(currSlide === maxSlide-1) currSlide=0;
  else currSlide++;
  gotoSlide(currSlide);
  activateDot(currSlide);
}
btnRight.addEventListener("click",function(){
  if(currSlide === maxSlide-1) currSlide=0;
  else currSlide++;
  gotoSlide(currSlide);
})

const prevSlide = function(){
  if(currSlide===0)currSlide=maxSlide-1;
  else currSlide--;
  gotoSlide(currSlide);
  activateDot(currSlide);
}

btnLeft.addEventListener("click",prevSlide);

// now do the above stuff using arrow key

document.addEventListener("keydown",function(e){
  console.log(e);
  if(e.key === "ArrowLeft")prevSlide();
  else if(e.key === "ArrowRight")nextSlide();
})


dotContainer.addEventListener("click",function(e){
  if(e.target.classList.contains("dots__dot")){
    console.log("DOT");
    const {slide} = e.target.dataset;
    //const slide=e.dataset.slide;
    gotoSlide(slide);
    activateDot(slide);
  }
});



///////////////////////////////////////
// Lifecycle DOM Events
document.addEventListener('DOMContentLoaded', function (e) {
  console.log('HTML parsed and DOM tree built!', e);
});
//so should we wrap it around the above, no because we write <script> at end of body so it is read at last, and executed after other stuffs are read

//load fired after complete page has finished loading (including events and images)
window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
});
//when filling a form, gives a confirmation popup, that if you really want to reload
window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  console.log(e);
  e.returnValue = '';
});

////////////////////////////////////////////////
//local storage
_setLocalStorage(){//based on key value pair
  localStorage.setItem('workouts',JSON.stringify(this.#workouts)); 
}
_getLocalStorage(){//while converting objects to string and back to objects, prototype chain is lost, so inheritance fails
        //console.log("heres the local data");
  const data = JSON.parse(localStorage.getItem("workouts"));
  console.log(data);
  if(!data)return ;
  this.#workouts=data;
  this.#workouts.forEach(work=>{this._renderWorkout(work);});   
}    
reset(){//app.reset();
  localStorage.removeItem("workouts");
  location.reload();    
}
      
