// String Manipulation Functions:

// Reverse a String
function reverseString(str) {
  return str.split('').reverse().join('');
}
// Count Characters
function countCharacters(str) {
  return str.length;
}
// Capitalize Words
function capitalizeWords(sentence) {
  return sentence
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}



// Array Functions:

// Find Maximum and Minimum
function findMax(arr) {
  return Math.max(...arr);
}
function findMin(arr) {
  return Math.min(...arr);
}
// Sum of Array
function sumArray(arr) {
  return arr.reduce((acc, val) => acc + val, 0);
}
// Filter Array
function filterArray(arr, condition) {
  return arr.filter(condition);
}



// Mathematical Functions:

// Factorial
function factorial(n) {
  if (n < 0) return NaN; // Handle negative inputs
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}
// Prime Number Check
function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}
// Fibonacci Sequence
function fibonacci(n) {
  const sequence = [0, 1];
  if (n <= 0) return [];
  if (n === 1) return [0];
  
  for (let i = 2; i < n; i++) {
    sequence[i] = sequence[i - 1] + sequence[i - 2];
  }
  return sequence;
}