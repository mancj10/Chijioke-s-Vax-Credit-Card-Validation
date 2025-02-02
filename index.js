function validateMasterCard(cardNumber) {
    // Remove spaces or hyphens from the card number to keep only digits
    cardNumber = cardNumber.replace(/[\s\-]/g, '');

    // Regular expression to validate MasterCard
    // MasterCard starts with 51-55 and must have a total of 16 digits
    const masterCardPattern = /^5[1-5]\d{14}$/;

    // Check if the card number matches the pattern
    if (masterCardPattern.test(cardNumber)) {
        return 'Valid MasterCard';
    } else {
        return 'Invalid MasterCard';
    }
}

// Example usage:
console.log(validateMasterCard('5111 1111 1111 1111')); // Valid MasterCard
console.log(validateMasterCard('5111-1111-1111-1111')); // Valid MasterCard
console.log(validateMasterCard('4111 1111 1111 1111')); // Invalid MasterCard
console.log(validateMasterCard('6011 1111 1111 1111')); // Invalid MasterCard
