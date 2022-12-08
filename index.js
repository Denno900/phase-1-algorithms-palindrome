function isPalindrome(word) {
  // Write your algorithm here
  let palindrome = word.split('').reverse().join('')

  if(word === palindrome){
    return true
  } else {
    return false
  }
}

/* 
  declare a variable palindrome - reverses the word 
  if word is equal to palindrome return true
  otherwise return false
*/

/*
  the palindrome variable reverses the word 
  the if statement checks for the condition ....if it is reversed
  it returns true
  otherwise return false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
