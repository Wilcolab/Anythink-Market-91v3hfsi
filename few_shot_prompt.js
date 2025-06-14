function toCamelCase(str) {
    return str
        .trim()
        .replace(/[\W_]+/g, ' ') // Replace non-alphanumeric and underscores with space
        .split(' ')
        .filter(Boolean)
        .map((word, idx) => {
            word = word.toLowerCase();
            if (idx === 0) return word;
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('');
}

// Example usage:
// console.log(toCamelCase("first name"));      // "firstName"
// console.log(toCamelCase("user_id"));         // "userId"
// console.log(toCamelCase("SCREEN_NAME"));     // "screenName"
// console.log(toCamelCase("mobile-number"));