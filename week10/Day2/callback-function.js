//Callback and higher order function

//calback funtion are thse function that are passed as arguement to another funcnion

//HOF -- those function that contains callback function

function HOF(callback) {
  console.log("Hello HOF Function");
  callback();
  console.log("BYY form HOF Function");
}

function greet() {
  console.log("Hello From CallbackFunction");
  console.log("BYY From Callback Function");
}

HOF(greet)
