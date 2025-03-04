// Restrict the PIN code from taking alphabets or special characters at the beginning. Check for A400088 – this should fail
function validatePinCode(pin) {
    let pinRegex = /^[1-9][0-9]{5}$/;
    
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
validatePinCode("40A088");  //  Invalid (Contains letter)
validatePinCode("400 088"); //  Invalid (Contains space)
validatePinCode("400-088"); //  Invalid (Contains special character)
