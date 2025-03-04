// Ensure @ and validate the mandatory 2nd part i.e. bridgelabz
function validateEmail(email) {
    let emailRegex = /^abc(\.[a-zA-Z0-9]+)?@bridgelabz\.co(\.[a-zA-Z]{2,})?$/;
    
    if (emailRegex.test(email)) {
        console.log(` Valid Email: ${email}`);
    } else {
        console.log(` Invalid Email: ${email}`);
    }
}

//  Valid Examples
validateEmail("abc@bridgelabz.co");        //  Valid
validateEmail("abc.xyz@bridgelabz.co");    //  Valid
validateEmail("abc@bridgelabz.co.in");     //  Valid
validateEmail("abc.xyz@bridgelabz.co.us"); //  Valid

//  Invalid Examples
validateEmail("xyz@bridgelabz.co.in");  //  Invalid (must start with "abc")
validateEmail("abc@google.com");        //  Invalid (must be "bridgelabz.co")
validateEmail("abc@bridgelabz.");       //  Invalid (TLD missing)
validateEmail("abc@bridgelabz.c");      //  Invalid (TLD must be at least 2 characters)
validateEmail("abc@bridgelabzcom");     //  Invalid (missing dot before TLD)
validateEmail("abc@bridgelabz..co.in"); //  Invalid (double dot issue)
