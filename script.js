/**
 * Function to check if a comment contains digits and replace them with "NUMBER".
 * @param {string} comment - The user comment to process.
 * @returns {object} - An object containing whether a number was found and the updated comment.
 */
function processComment(comment) {
    const hasDigits = /\d/.test(comment); // Check if the comment contains any digits
    const updatedComment = comment.replace(/\d+/g, "NUMBER"); // Replace all digit sequences with "NUMBER"
    return {
        hasDigits,
        updatedComment,
    };
}

// Test the function
const testComment =
    "My son is 12 years old. Our flat number is 45 and contact is 9876543210.";
const result = processComment(testComment);

console.log("Contains Numbers:", result.hasDigits);
console.log("Updated Comment:", result.updatedComment);
