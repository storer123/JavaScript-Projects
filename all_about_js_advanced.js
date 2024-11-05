
//In JavaScript, destructuring is a shorthand syntax that allows you to unpack values from arrays or objects into distinct variables. 
// nested and default destructuring
const arr = [1,2,[3,4]]
let [a,,[c,d],e=1]=arr
a->1
c->3
d->4
e->1/ undefined if not default as will start unpacking thing that doesnt exist
