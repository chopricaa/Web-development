 var add = function(a,b){
     return a + b;
   }
  
  
  var arrowAdd = (a,b) => a + b;
  
  var obj1 = {
    valueOfThis: function(a,b){
      return a+b;
    },
    valueSub:(a,b)=>{
        return a-b;
    }
  }

//   var obj2 = {
//     valueOfThis: ()=>{
//       return this;
//     }
//   }
  
  obj1.valueOfThis();  
  //obj2.valueOfThis();
 
  var mul = function(a,b){
    return a*b;
  }
  console.log(mul(4,5));

  var mularow = (a,b) => a*b;
  console.log(mularow(5,6));
  console.log(obj1.valueOfThis(7,2));


  function sumOfThreeElements(...elements){
    return new Promise((resolve,reject)=>{
      if(elements.length > 3 ){
        reject("Only three elements or less are allowed");
      }
      else{
        let sum = 0;
        let i = 0;
        while(i < elements.length){
          sum += elements[i];
          i++;
        }
        resolve("Sum has been calculated: "+sum);
      }
    })
  }
  
  console.log(sumOfThreeElements(4, 5,6));
//   .then(result=> console.log(result))
//   .catch(error=> console.log(error));
//   // In the code above, the promise is fulfilled so the then() method gets executed
  
//   sumOfThreeElements(7, 0, 33, 41)
//   .then(result => console.log(result))
//   .catch(error=> console.log(error));
//   // In the code above, the promise is rejected hence the catch() method gets executed