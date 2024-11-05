
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
