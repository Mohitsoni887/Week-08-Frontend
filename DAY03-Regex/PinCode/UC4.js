// Make sure 400 088 is also valid along with 400088

function validatePinCode(pin) {
    let pinRegex = /^[1-9][0-9]{2}\s?[0-9]{3}$/;  
    // Explanation:
    // ^        → Start of string
    // [1-9]    → First digit must be 1-9 (no leading 0)
    // [0-9]{2} → Next two digits (making first three)
    // \s?      → Allows an optional space
    // [0-9]{3} → Last three digits (making total 6)
    // $        → End of string

    if (pinRegex.test(pin)) {
        console.log(` Valid PIN Code: ${pin}`);
    } else {
        console.log(` Invalid PIN Code: ${pin}`);
    }
}

//  Valid PIN Codes
validatePinCode("400088");   //  Valid
validatePinCode("400 088");  //  Valid
validatePinCode("110001");   //  Valid
validatePinCode("560 043");  //  Valid

//  Invalid PIN Codes
validatePinCode("A400088");  //  Invalid (Starts with a letter)
validatePinCode("#400088");  //  Invalid (Starts with a special character)
validatePinCode("040088");   //  Invalid (Cannot start with 0)
validatePinCode("4008");     //  Invalid (Less than 6 digits)
validatePinCode("4000889");  //  Invalid (More than 6 digits)
validatePinCode("40A088");   //  Invalid (Contains letter in between)
validatePinCode("400-088");  //  Invalid (Contains special character)
validatePinCode("400088B");  //  Invalid (Ends with an alphabet)
validatePinCode("400 08 8"); //  Invalid (More than one space)
validatePinCode("400 088#"); //  Invalid (Ends with a special character)
