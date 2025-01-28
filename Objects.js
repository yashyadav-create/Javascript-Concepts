//Objects in javascript
//1. How to delete any property in object?

const obj = {
    name: "Yash",
    age:23
}
delete obj.age;
console.log(obj);

//2. Determine the output
const func = (function(a){
    delete a;
    return a;
  })(5)
  
  console.log(func);

  //Output will be 5 since delete keyword doesn't work with local variables

//3. How to add a property with space(by using string quotation) and how to access it(learnt another method)?

const obj2 = {
    name: "Yash",
    age:23,
    "are you ok": true
}
console.log(obj2["are you ok"]);

//4. How to dynamically add properties inside an object through a variable?
let property = "firstName";
let name = "Yash Yadav"
const obj3={
    [property]: name
}
console.log(obj3.firstName)

//Output - Yash Yadav

//5. Print keys of an object
const obj4 = {
    name: "Yash",
    age:23
}

for(key in obj4){
  console.log(key)
}

//Output - name age

//5 Print values of an object
const obj5 = {
    name: "Yash",
    age:23
}

for(key in obj5){
  console.log(obj5[key])
}

//6. What will be the ouptut?

const obj6 = {
    a: "one",
    b: "two",
    c: "three"
}
console.log(obj6);

//output will be a:"three" b:"two" because it takes last value in consideration as compared to previous value 

//7. What will be the output