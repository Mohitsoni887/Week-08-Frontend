// Finally lets close the expression with supporting optional parts. Note: Top Level Domains (TLD) in the last part is the optional country code and its 2 characters onlyfunction validateEmail(email) {
    function validateEmail(email) {
        let emailRegex = /^abc([._+-][a-zA-Z0-9]+)?@bridgelabz\.co(\.[a-zA-Z]{2})?$/;
        
        if (emailRegex.test(email)) {
            console.log(` Valid Email: ${email}`);
        } else {
            console.log(` Invalid Email: ${email}`);
        }
    }
    
    //  Valid Examples
    validateEmail("abc@bridgelabz.co");          //  Valid
    validateEmail("abc.xyz@bridgelabz.co");      //  Valid
    validateEmail("abc_123@bridgelabz.co");      //  Valid
    validateEmail("abc-xyz@bridgelabz.co.in");   //  Valid
    validateEmail("abc+test@bridgelabz.co.us");  //  Valid
    validateEmail("abc@bridgelabz.co.uk");       //  Valid
    validateEmail("abc.xyz@bridgelabz.co.fr");   //  Valid
    
    //  Invalid Examples
    validateEmail("xyz@bridgelabz.co.in");       //  Invalid (must start with "abc")
    validateEmail("abc@google.com");             //  Invalid (must be "bridgelabz.co")
    validateEmail("abc@bridgelabz");             //  Invalid (missing ".co")
    validateEmail("abc@bridgelabzcom");          //  Invalid (missing dot before "co")
    validateEmail("abc@bridgelabz.c");           //  Invalid (must be ".co" exactly)
    validateEmail("abc@bridgelabz..co.in");      //  Invalid (double dot issue)
    validateEmail("abc$xyz@bridgelabz.co");      //  Invalid (`$` is not allowed)
    validateEmail("abc@bridgelabz.co..in");      //  Invalid (double dot issue)
    validateEmail("abc@bridgelabz.co.india");    //  Invalid (TLD must be exactly 2 characters)
    validateEmail("abc@bridgelabz.co1");         //  Invalid (TLD must be alphabetic)
    