function toDotCase(input) {
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string.');
    }

    // Trim whitespace
    let str = input.trim();

    // Replace all delimiters (space, underscore, hyphen) with a single space
    str = str.replace(/[\s_-]+/g, ' ');

    // Remove non-alphanumeric characters except spaces
    str = str.replace(/[^a-zA-Z0-9 ]+/g, '');

    // Split into words
    const words = str.split(' ').filter(Boolean);

    // Join with dot and lowercase
    return words.map(w => w.toLowerCase()).join('.');
}

// Example usage:
// console.log(toDotCase("First Name"));      // "first.name"
// console.log(toDotCase("user_id"));         // "user.id"
// console.log(toDotCase("SCREEN-NAME"));     // "screen.name"
// console.log(toDotCase("mobile number"));   // "mobile.number"



/**
 * Converts a given string to camelCase format.
 *
 * - Trims leading and trailing whitespace.
 * - Handles multiple delimiters such as spaces, underscores, hyphens, or mixed delimiters (e.g., "hello_world-test case").
 * - Removes any non-alphanumeric characters (except delimiters used to separate words).
 * - Handles numbers correctly (e.g., "version 2 update" → "version2Update").
 * - Returns an empty string if the input is an empty string or only contains non-alphanumeric characters.
 * - Throws a descriptive error if the input is not a string.
 *
 * @param {string} input - The string to convert to camelCase.
 * @returns {string} The camelCase formatted string.
 * @throws {TypeError} If the input is not a string.
 *
 * @example
 * toCamelCase("  hello_world-test case "); // "helloWorldTestCase"
 * toCamelCase("version 2 update");         // "version2Update"
 * toCamelCase("___---   ");                // ""
 */
function toCamelCase(input) {
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string.');
    }

    let str = input.trim();
    if (!str) return '';
    str = str.replace(/[\s_-]+/g, ' ');
    str = str.replace(/[^a-zA-Z0-9 ]+/g, '');
    const words = str.split(' ').filter(Boolean);
    if (words.length === 0) return '';
    return words
        .map((word, idx) => {
            if (idx === 0) return word.toLowerCase();
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}







/**
 * Converts a given string to dot.case format.
 *
 * - Trims leading and trailing whitespace.
 * - Handles multiple delimiters such as spaces, underscores, hyphens, or mixed delimiters (e.g., "hello_world-test case").
 * - Removes any non-alphanumeric characters (except delimiters used to separate words).
 * - Handles numbers correctly (e.g., "version 2 update" → "version.2.update").
 * - Returns an empty string if the input is an empty string or only contains non-alphanumeric characters.
 * - Throws a descriptive error if the input is not a string.
 *
 * @param {string} input - The string to convert to dot.case.
 * @returns {string} The dot.case formatted string.
 * @throws {TypeError} If the input is not a string.
 *
 * @example
 * toDotCase("First Name");      // "first.name"
 * toDotCase("user_id");         // "user.id"
 * toDotCase("SCREEN-NAME");     // "screen.name"
 * toDotCase("mobile number");   // "mobile.number"
 */
function toDotCase(input) {
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string.');
    }

    let str = input.trim();
    str = str.replace(/[\s_-]+/g, ' ');
    str = str.replace(/[^a-zA-Z0-9 ]+/g, '');
    const words = str.split(' ').filter(Boolean);
    return words.map(w => w.toLowerCase()).join('.');
}