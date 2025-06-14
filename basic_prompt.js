function toCamelCase(str) {
    return str
        .trim()
        .replace(/[\W_]+/g, ' ') // Replace non-alphanumeric and underscores with space
        .split(' ')
        .filter(Boolean)
        .map((word, idx) => {
            if (idx === 0) return word.toLowerCase();
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Example usage:
// console.log(toCamelCase("  hello-world_test string  ")); // Output: "helloWorldTestString"