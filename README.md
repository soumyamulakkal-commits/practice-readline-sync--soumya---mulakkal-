// Task 1: Extract Code Points from Characters
let word = "Code";
let firstCodePoint = word.charCodeAt(0);   // 'C'
let thirdCodePoint = word.charCodeAt(2);   // 'd'

console.log("First Code Point:", firstCodePoint);   // 67
console.log("Third Code Point:", thirdCodePoint);   // 100

// Task 2: Create a Word from Code Points
let wordFromCodePoints = String.fromCharCode(72, 101, 108, 108);  // H, e, l, l
console.log("Word from Code Points:", wordFromCodePoints);        // "Hell"

// Task 3: Swap First and Last Characters
let original = "Launch";
let firstChar = String.fromCharCode(original.charCodeAt(0));      // 'L'
let lastChar = String.fromCharCode(original.charCodeAt(original.length - 1)); // 'h'

// Create new string: swap first and last
let swappedString = lastChar + original.slice(1, -1) + firstChar;
console.log("Swapped String:", swappedString);                    // "hauncL"
