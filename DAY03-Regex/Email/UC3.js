// Ensure “.” after bridgelabz and validate the mandatory 3rd part i.e. co
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
validateEmail("abc@bridgelabz");        //  Invalid (missing ".co")
validateEmail("abc@bridgelabzcom");     //  Invalid (missing dot before "co")
validateEmail("abc@bridgelabz.c");      //  Invalid (must be ".co" exactly)
validateEmail("abc@bridgelabz..co.in"); //  Invalid (double dot issue)
