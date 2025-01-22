/*
What is Currying?
Functional programming technique that transfroms a function taking single argument into nested functions taking multiple arguments
*/
// Q. Sum(4)(5)(6)
function sum(a){
    return function (b){
        return function (c){
            return a+b+c;
        }
    }
}
console.log(sum(4)(5)(6));

//Output - 15


/*Q.evaluate(sum)(4)(2) => 6
evaluate(subtract)(4)(2) => 2
evaluate(multiply)(4)(2) => 8
evaluate(divide)(4)(2) => 2
*/

function evaluate(operation){
    return function(a){
        return function(b){
            if(operation == "sum") return a+b;
            else if(operation == "multiply") return a*b;
            else if(operation == "subtract") return a-b;
            else if(operation == "divide") return a/b;
            else
            return "Invalid"
        }

    }
}
console.log(evaluate(multiply)(4)(2));


/*Q3. Infinite Currying sum(1)(2)...n*/

function add(a){
    return function (b){
        if(b) return add(a+b)
            return a;
    }
}
console.log(add(1)(2)(3)(4)(5)())

//Currying vs Partial Application
function sum(a){
    return function(b,c){
      return a+b+c;
    }
  }
  const x=sum(4);
  console.log(x(2,3))

  //Manipulating DOM using currying
  function updateHeader(id){
    return function(content){
      document.getElementById("header").textContent = content;
    }
  }
  const x=updateHeader("header")
  console.log(x("Hello yash"))