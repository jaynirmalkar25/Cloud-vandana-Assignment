// taking inputs
const input = prompt("Enter a list of numbers separated by spaces (e.g., 5 3 1 4 2):");

// Split input into an array and convert to numbers
const numbers = input.split(' ').map(Number);

// Sorting array in descending order
numbers.sort((a, b) => b - a);

// printing
console.log("Sorted in descending order:", numbers);
