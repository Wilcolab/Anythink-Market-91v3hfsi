/**
 * Converts a given string to kebab-case.
 *
 * - Handles spaces, underscores, hyphens, and camelCase/PascalCase.
 * - Ignores punctuation and non-alphanumeric characters (except delimiters).
 * - Trims leading/trailing spaces and treats multiple delimiters as a single separator.
 * - Throws a TypeError if input is not a string.
 *
 * @param {string} input - The string to convert to kebab-case.
 * @returns {string} The kebab-case formatted string.
 * @throws {TypeError} If the input is not a string.
 *
 * @example
 * toKebabCase("Hello World");           // "hello-world"
 * toKebabCase("hello_world");           // "hello-world"
 * toKebabCase("hello-world_test");      // "hello-world-test"
 * toKebabCase("helloWorldTest");        // "hello-world-test"
 * toKebabCase("  Hello--World__Test "); // "hello-world-test"
 */
function toKebabCase(input) {
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string.');
    }

    let str = input.trim();

    // Step 1: Insert hyphens before uppercase letters (for camelCase/PascalCase)
    str = str.replace(/([a-z0-9])([A-Z])/g, '$1-$2');

    // Step 2: Replace all spaces, underscores, and hyphens with a single hyphen
    str = str.replace(/[\s_-]+/g, '-');

    // Step 3: Remove non-alphanumeric characters except hyphens
    str = str.replace(/[^a-zA-Z0-9-]/g, '');

    // Step 4: Convert to lowercase and trim any leading/trailing hyphens
    return str.toLowerCase().replace(/^-+|-+$/g, '');
}

// Example test cases:
console.log(toKebabCase("Hello World"));           // "hello-world"
console.log(toKebabCase("hello_world"));           // "hello-world"
console.log(toKebabCase("hello-world_test"));      // "hello-world-test"
console.log(toKebabCase("helloWorldTest"));        // "hello-world-test"
console.log(toKebabCase("  Hello--World__Test ")); // "hello-world-test"
console.log(toKebabCase("PascalCaseExample"));     // "pascal-case-example"
console.log(toKebabCase("___---   "));             // ""
// console.log(toKebabCase(123));                  // Throws TypeError