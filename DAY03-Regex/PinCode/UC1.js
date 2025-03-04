// The Postal Index Number (PIN) or PIN Code is a 6 digit code of Post Office numbering used by India Post. Create a regex pattern to validate pincode 400088

function validatePinCode(pin) {
    let pinRegex = /^[1-9][0-9]{5}$/;
    
    if (pinRegex.test(pin)) {
        console.log(` Valid PIN Code: ${pin}`);
    } else {
        console.log(` Invalid PIN Code: ${pin}`);
    }
}

//  Valid Examples
validatePinCode("400088");  //  Valid
validatePinCode("110001");  //  Valid
validatePinCode("560043");  //  Valid
validatePinCode("999999");  //  Valid

//  Invalid Examples
validatePinCode("040088");  //  Invalid (Cannot start with 0)
validatePinCode("4008");    //  Invalid (Less than 6 digits)
validatePinCode("4000889"); //  Invalid (More than 6 digits)
validatePinCode("40A088");  //  Invalid (Contains letter 'A')
validatePinCode("400 088"); //  Invalid (Contains space)
validatePinCode("400-088"); //  Invalid (Contains hyphen)
