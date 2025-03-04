// Validate Email address with a regex. The email consists of minimum 3 and optional 2 more parts with mandatory @ and .
// abc.xyz@bridgelabz.co.in Here abc, bridgelabz and co are mandatory and the remaining 2 are optional To begin with lets validate the
// mandatory part and start with abc
function validateEmail(email) {
    let emailRegex = /^abc(\.[a-zA-Z0-9]+)?@bridgelabz\.co(\.[a-zA-Z]{2,})?$/;
    
    if (emailRegex.test(email)) {
        console.log(` Valid Email: ${email}`);
    } else {
        console.log(` Invalid Email: ${email}`);
    }
}

//  Valid Examples
validateEmail("abc@bridgelabz.co.in");   // Valid
validateEmail("abc.xyz@bridgelabz.co.in"); // Valid
validateEmail("abc@bridgelabz.co");      // Valid
validateEmail("abc.xyz@bridgelabz.co.us"); // Valid

//  Invalid Examples
validateEmail("xyz@bridgelabz.co.in");   // Invalid (should start with "abc")
validateEmail("abc@google.com");         // Invalid (must be "bridgelabz.co")
validateEmail("abc@bridgelabz.");        // Invalid (TLD missing)
validateEmail("abc@bridgelabz.c");       // Invalid (TLD must be at least 2 characters)
validateEmail("abc@bridgelabzcom");      // Invalid (Missing dot before TLD)
validateEmail("abc@bridgelabz..co.in");  // Invalid (Double dot issue)
