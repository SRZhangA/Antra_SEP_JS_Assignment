// Create an array 'styles' with items "James" and "Brennie"
let styles = ['James', 'Brennie'];

// Append "Robert" to the end
styles.push('Robert');

// Replace the value in the middle by "Calvin"
let middleIndex = Math.floor(styles.length / 2);
styles[middleIndex] = 'Calvin';

// Remove the first value of the array and show it
let firstItem = styles.shift();
console.log(firstItem); // Output: "James"

// Prepend "Rose" and "Regal" to the array
styles.unshift('Rose', 'Regal');

console.log(styles);
