function hasTargetSum(array, target) {
   for(let i = 0; i < array.length; i++) {
         for(let j = i + 1; j < array.length; j++) {
       if(array[i] + array[j] === target) {
        return true;
       }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here:

for(let i = 0; i < array.length; i++) {
  ------------- n steps--------------
     let num1 = array[i]
    for(let j = i + 1; j < array.length; j++) {
      -------loop inside of loop = n*n----------
      let num2 = array[j] 
       let sum = num1 + num2
       if(sum === target) {
        return true;
       }
    }
  }
  
  return false;

RUNTIME: O(n^2) -> this is because we have for loops. a O(n) means that we are iterating through an array once. Since we are doing it a second time, then its O(n^2)
SPACE COMPLEXITY: O(n)

*/

/* 
  Add your pseudocode here
  If the sum of two of numbers is equal to the target number, then return true, otherwise return false

  //1. grab first number and set it to a variable
   //2. grab second number and set it to another variable
   //3. add the two numbers together
    //4. if the sum of 2 numbers is equal to the target, return true
    // 5. if we reach the end of the array without returning true, return false. 
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 3, 5], 4));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
