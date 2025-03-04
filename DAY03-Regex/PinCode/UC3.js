// Restrict the PIN code from taking alphabets or special characters at the End. Check for 400088B – this should fail.
function validatePinCode(pin) {
    let pinRegex = /^[1-9][0-9]{5}$/;  // Ensures exactly 6 digits with valid start
    
    if (pinRegex.test(pin)) {
        console.log(` Valid PIN Code: ${pin}`);
    } else {
        console.log(` Invalid PIN Code: ${pin}`);
    }
}

//  Valid PIN Codes
validatePinCode("400088");  //  Valid
validatePinCode("110001");  //  Valid
validatePinCode("560043");  //  Valid

//  Invalid PIN Codes
validatePinCode("A400088"); //  Invalid (Starts with a letter)
validatePinCode("#400088"); //  Invalid (Starts with a special character)
validatePinCode("040088");  //  Invalid (Cannot start with 0)
validatePinCode("4008");    //  Invalid (Less than 6 digits)
validatePinCode("4000889"); //  Invalid (More than 6 digits)
validatePinCode("40A088");  //  Invalid (Contains letter in between)
validatePinCode("400 088"); //  Invalid (Contains space)
validatePinCode("400-088"); //  Invalid (Contains special character)
validatePinCode("400088B"); //  Invalid (Ends with an alphabet)
validatePinCode("400088#"); //  Invalid (Ends with a special character)
