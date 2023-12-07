/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const vowels={
    a:0,
    e:0,
    i:0,
    o:0,
    u:0,
    totalVowels:0
  }
    // Your code here
  for(let i=0;i<str.length;i++){
    console.log(str[i])
    if(str[i].toLowerCase() in vowels){
      vowels[str[i].toLowerCase()]++;
      vowels.totalVowels=vowels.totalVowels++;
    }
  }
  return vowels;
}
console.log(countVowels("Ihis is a string"))

module.exports = countVowels;