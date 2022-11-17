var fibsFizzBuzz = function(n) {
    // Your code here.
}

/*
implementation from https://medium.com/developers-writing/fibonacci-sequence-algorithm-in-javascript-b253dc7e320e
*/

let arr = []

function fibonacci(num){
    var a = 1, b = 0, temp;
  
    while (num >= 0){
      temp = a;
      a = a + b;
      b = temp; // b updates
      arr.push(b)
      num--;
    }
  }

  fibonacci(5)
  console.log(arr);