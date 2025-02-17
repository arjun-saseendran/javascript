// Declare an array
const nums = [5, 3, 1, 4, 2];

// Display current array
console.log("The current array is: ", nums);

// Remove last element from the array
const lastRemovedElement = nums.pop();
console.log("The removed last element from the array is: ", lastRemovedElement);

// Add new element to the arry from last
nums.push(6);
console.log("The updated array after added new element to end: ", nums);

// Remove first element from the array
const removedFirstElement = nums.shift();
console.log(
  "The removed first element from the array is: ",
  removedFirstElement,
);

// Add new element to the array from start
nums.unshift(7);
console.log("The updated array after added new element to start", nums);

// Sort array
const sortedArray = nums.sort((a, b) => a - b);
console.log("The array after sorting: ", sortedArray);

// Sum of the array
const sum = nums.reduce((acc, elem) => acc + elem);
console.log("The array sum is: ", sum);

// Find the index of an element
const index = nums.findIndex((e) => e === 3);
console.log("The index of element 3 is: ", index);
