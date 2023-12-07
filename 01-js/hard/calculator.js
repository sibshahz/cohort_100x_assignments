/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor(){
    this.result=0;
  }
  add(n){
    return this.result=this.result+n;
  }
  subtract(n){
    return this.result=this.result-n;
  }
  multiply(n){
    return this.result=this.result*n;
  }
  divide(n){
    return this.result=this.result/n;
  }
  clear(){
    return this.result=0;
  }
  getResult(){
    return this.result;
  }
  calculate(str){
    const exp=/^[0-9\+\-\*/\(\)]+$/
    let input = str.replace(/\s/g, "");

    if(!exp.test(input)){
      return new Error('Invalid Expression');
    }else{
      let result=eval(input);
      return result;
    }
  }
}
const myCal= new Calculator();
myCal.add(5);
myCal.divide(2);
// myCal.clear()
console.log(myCal.getResult());
console.log(myCal.calculate('10 +   2 *    (   6 - (4 + 1) / 2) + 7'))
console.log(myCal.calculate('5+abc'))
module.exports = Calculator;
