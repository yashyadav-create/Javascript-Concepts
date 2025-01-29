// THIS KEYWORD

// Question 1 : this keyword

let a = 5

console.log(this.a);
//Output = 5

// Question 2 : this inside Method

let user = {
    name: "Piyush",
    age: 24,
      getDetails() {
          console.log(this.name)
      }
};
  
user.getDetails(); 

//Output will be  Piyush


// Question 3 : nested object 

let user = {
    name: "Piyush",
    age: 24,
      childObj:{
          newName:"Roadside Coder",
          getDetails() {
              console.log(this.newName, "and" ,this.name)
          }
      }
};
  
user.childObj.getDetails(); 

//Output will be Roadside Coder and undefined
//Pro tip to check what this refers to is to check what's there before the function call that's whats this is refering to in this case childObj is what this is refering to because it is immediate left to this
// Question 4 : Class & Constructor

class user {
    constructor(n){
        this.name = n
    }
    getName(){
        console.log(this.name);
    }
}

const User = new user("Piyush") 
User.getName();

//constructor always creates new reference to an object so Piyush will be printed

// Question 5 : Output

const user = {
    firstName: 'Piyush!',
    getName() {
      const firstName = 'Yash!';
      return this.firstName;
    }
};

console.log(user.getName());

//Piyush


// Question 6 : What is the result of accessing its `ref`? Why?

function makeUser() {
    return {
      name: "John",
      ref: this
    };
}
  
let user = makeUser();
  
alert( user.ref.name ); // What's the result?

//Output will be nothing because makeUser is pointing to window object 

//to fix this do this
function makeUser() {
  return {
    name: "John",
    ref(){
      return this.name;
    }
  };
}

let user = makeUser();
console.log(user.ref())
// Question 7 : What logs to console the following code snippet:

const user = {
    name: 'Piyush Agarwa;!',
    logMessage() {
      console.log(this.name); 
    }
};
setTimeout(user.logMessage, 1000);

//Output will be nothing because setTimeout's first parameter is always a callback and we are not sending that here so it loses the context of this here


// Question 8 : Output

const user = {
    name: 'Piyush',
    greet() {
      return `Hello, ${this.name}!`;
    },
    farewell: () => {
      return `Goodbye, ${this.name}!`;
    }
};
console.log(user.greet());//Hello Piyush
console.log(user.farewell()); //Goodbye undefined


// Question 9 :

let calculator = {
    sum() {
      return this.a + this.b;
    },
  
    mul() {
      return this.a * this.b;
    },
  
    read() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    }
};
  
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );


// Question 10 : Output

var length = 4;
function callback() {
  console.log(this.length); // What is logged?
}
const object = {
  length: 5,
  method(callback) {
    callback();
  }
};
object.method(callback, 1, 2);

//Output will be 4 he value of this depends on how a function is invoked (runtime binding), not how it is defined. When a function is called as a method of an object, this points to that object. However, when invoked as a standalone function (not attached to an object), this typically refers to the global object (in non-strict mode) or undefined (in strict mode)7.
// Question 11 : Implement this Code

const result = calc.add(10).multiply(5).subtract(30).add(10)
console.log(result.total);

// My Answer
var calc = {
  total: 0,
  add(a) {
    this.total += a;
    return this;
  },
  subtract(a) {
    this.total -= a;
    return this;
  },
  multiply(a) {
    this.total *= a;
    return this;
  },
};

//Q.12 What will be the output of this question? the arrow function will look for the nearest regular function and keep this as the regular function's this
const user = {
    firstName:"Patrick",
    lastName:"Scott",
    getDetails: function(){
        const arrowFunction = () => {
            console.log(this.firstName + " and " + this.lastName);
        }
        arrowFunction();
    }
}
user.getDetails();
//Patrick and Scott
