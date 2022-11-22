var fibsFizzBuzz = function(n) {
    // Your code here.
}

/*
implementation from https://medium.com/developers-writing/fibonacci-sequence-algorithm-in-javascript-b253dc7e320e
*/


function fibonacci(num){
  var a = 1, b = 0, temp;
  let arr = []
    while (num >= 1){
      temp = a;
      a = a + b;
      b = temp; // b updates
      arr.push(b)
      num--;
    }
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
        arr[i] = 'FizzBuzz'
      }
      if (arr[i] % 5 === 0) {
        arr[i] = "Buzz"
      }
      if (arr[i] % 3 === 0) {
        arr[i] = "Fizz"
      }
    }
    return arr
  }

  console.log(fibonacci(20))
