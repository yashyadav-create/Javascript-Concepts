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