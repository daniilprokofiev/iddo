function parse(input) {
  // Your parsing logic here
  return JSON.parse(input);
}

const parser = {
  parse, // Shorthand for "parse: parse"
  // Other methods or properties
};

// Usage:
const jsonString = '{"name": "Jane", "age": 25}';
const parsedData = parser.parse(jsonString);
console.log(parsedData); // Output: { name: 'Jane', age: 25 }
