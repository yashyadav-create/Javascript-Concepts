//Q. Make this code run only once using closures concept 
function subscribed(){
    let count=0;
    return function (){
      if(count>0){
        console.log("Already subscribed");
      }
      else{
        console.log("Subscribe ");
        count++;
      }
    }
  }
  let c=subscribed();
  c();
  c();
  c();
  c();
  c();
  c();
  c();
  c();
  c();
  c();
  c();
  c();
  c();

/*Output
Subscribe
Already subscribed
Already subscribed
Already subscribed
Already subscribed
Already subscribed
Already subscribed
Already subscribed
Already subscribed
Already subscribed
Already subscribed
Already subscribed
Already subscribed
*/