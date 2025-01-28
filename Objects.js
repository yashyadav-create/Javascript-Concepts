//Objects in javascript
//1. How to delete any property in object?

const objj = {
    name: "Yash",
    age:23
}
delete objj.age;
console.log(objj);

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

//7. Modify values inside this object such that all the numbers turn into double of themselves 
const obj7 = {
    a:100,
    b:200,
    c:"Yash"
}

multiplyByTwo(obj7)
function multiplyByTwo(obj7){
  for(key in obj7){
    if(typeof obj7[key] == "number"){
      obj7[key]*=2;
    }
  }
}

console.log(obj7)

//Upper case only first letter
const obj8 = {
    a: 100,
    b: 200,
    c: "yash"
};

capitalizeFirstLetter(obj8);

function capitalizeFirstLetter(obj8) {
  for (let key in obj8) {  
    if (typeof obj8[key] === "string" && obj8[key].length > 0) {  
      obj8[key] = obj8[key][0].toUpperCase() + obj8[key].slice(1);
    }
  }
}

console.log(obj7);

//reverse string properteis
function reverseStrings(obj) {
    for (let key in obj) {
      if (typeof obj[key] === "string") {
        obj[key] = obj[key].split("").reverse().join("");
      }
    }
  }
  
  const obj = { firstName: "John", city: "Paris" };
  reverseStrings(obj);
  console.log(obj); // { firstName: "nhoJ", city: "siraP" }

//8. What will be the output?
const a={}
const b = { key : "b"}
const c = {key : "c"}

a[b]=123;
a[c] =456;
console.log(a[b])
//output 456 because a won't be able to convert b into key instead it will look something like a["[object object]"] when it tries to convert it into a string 

//9.Use of JSON.parse and JSON.stringify

const usered = {
    name:"Yash",
    age:23
};
const strObj = JSON.stringify(usered);
localStorage.setItem("users",strObj);
console.log(JSON.parse(localStorage.getItem("users")));

//we will get our object back

//10. What will be the output?
const user10 = {
    name:"Lydia",
    age:12
}
const admin = {
    agent:"Kramnik",
    ...user10
}

console.log(admin)

//user 10's properties will be added here

//11. stringify only selected properties
const user11 = {
    name:"Lydia",
    age:12,
    bloodGroup : "A+"
}
const data = JSON.stringify(user11,["age","bloodGroup"]);
console.log(data);

//output - {"age":12,"bloodGroup":"A+"}

//12.What is the output? Learnings  - arrow functions this point to globacl object while normal this points to the reference in which it is present
const shape = {
    radius : 10,
    diameter: function (){
        return this.radius*2;
    },
    perimeter : () =>{
        return 2*Math.PI*this.radius;
    }
}
console.log(shape.diameter())
console.log(shape.perimeter())

//Output - 20 NaN

//13. Destructuring in objects


const obj13 = {
    namee: "Serbian",
}
const namee = "Yash"
const {namee:myName} = obj13;
console.log(myName)
//this will still print serbian

//14. nested destructuring
const weatherResponse = {
    location: {
        city: "New York",
        country: "US",
        coordinates: [-74.006, 40.7128]
    },
    current: {
        temp: 22,
        humidity: 60,
        wind: {
            speed: 5.5,
            direction: "NE"
        }
    }
};

const {location:{city,country,coordinates:[latitude,longitude]},current:{temp,humidity,wind:{speed,direction}}} = weatherResponse
console.log(city);
console.log(country);
console.log(latitude);
console.log(longitude);
console.log(temp)
console.log(humidity);
console.log(speed);
console.log(direction);

//output
// New York
// US
// -74.006
// 40.7128
// 22
// 60
// 5.5
// NE

//14.rest and spread operators (rest operator will always be in the end while spread can be anywhere )

function getFruits(fruitList,favoriteFruit,...args){
    return [...fruitList,...args,favoriteFruit]
}
console.log(getFruits(["orange","apple"],"banana","kiwi"));

//output will be ["orange","apple","kiwi","banana"]

//15. Questions on object referencing
const e = {
    greeting:"hello"
  }
  f=e;
  e.greeting = "hey";
  console.log(f.greeting);
//output will be hey because object just gives that refernce doesn't copy and create its own copy pass by reference 

//16. What will be the ouptut?
console.log({a:1}=={a:1})
//console.log({a:1} === {a:1})

//they check refernce not the actual value of the object so both will return false
let person = {
    name:"Lydia",
  }
  let members = [person];
  person=null;
  console.log(members);
//this prints full object 

//17. What will be the output?
const value = {number:10};

const multiply  = (x={...value}) => {
console.log((x.number*=2));
};
multiply();//20
multiply();//20 shallow
multiply(value);//20 this would actually modify the value overwriting destructuring
multiply(value);

//18. Output? 
function changeAgeAndReference(person) {
    person.age = 25;
    person = {
      name: 'John',
      age: 50
    };

    return person;
}

const personObj1 = {
    name: 'Alex',
    age: 30
};

const personObj2 = changeAgeAndReference(personObj1);

console.log(personObj1); // -> ?
console.log(personObj2); // -> ?
//{ name: 'Alex', age: 25 }
//{ name: 'John', age: 50 }