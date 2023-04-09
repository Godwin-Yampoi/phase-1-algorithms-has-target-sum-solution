// Define the function to take in an array and a target sum
function hasTargetSum(array, target) {
  // Iterate over the array
  for (let i = 0; i < array.length; i++) {
    // For each element, calculate its complement
    const complement = target - array[i];
    // Iterate over the remaining elements in the array
    for (let j = i + 1; j < array.length; j++) {
      // If a complement is found, return true
      if (array[j] === complement) return true;
    }
  }
  // If no complement is found, return false
  return false;
}

// Test cases
console.log(hasTargetSum([3, 8, 12, 4, 11, 7], 10)); // true
console.log(hasTargetSum([22, 19, 4, 6, 30], 25)); // true
console.log(hasTargetSum([1, 2, 5], 4)); // false
console.log(hasTargetSum([-7, 10, 4, 8], 3)); // true
console.log(hasTargetSum([1, 2, 3, 4], 5)); // true
console.log(hasTargetSum([4], 4)); // false


// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
