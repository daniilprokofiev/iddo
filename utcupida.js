function areValuesEqualToAxisProperties(values, axis, properties) {
    if (!Array.isArray(values) || !Array.isArray(properties) || values.length !== properties.length) {
        throw new Error('Values and properties must be arrays of the same length.');
    }
    
    return values.every((value, index) => value === axis[properties[index]]);
}

// Example usage:
let axis = {
    length: 10,
    type: 'linear',
    minValue: 0,
    maxValue: 100
};

let values = [10, 'linear', 0, 100];
let properties = ['length', 'type', 'minValue', 'maxValue'];

console.log(areValuesEqualToAxisProperties(values, axis, properties)); // Output: true
