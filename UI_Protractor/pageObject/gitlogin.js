'use strict';



module.exports = {
    elements: {
        signin: element(by.css('[href="/login"]')),
        username: element(by.id('login_field')),
        password: element(by.id('password')),
        signinbutton: element(by.css('.btn.btn-primary.btn-block')),
        forgetpassword:element(by.css('[href="/password_reset"]')),
        forgetpasswordtextbox:element(by.id('email_field')),
        password_reset_emailsend_button:element(by.css('.btn.btn-primary.btn-block')),
        return_signin_button:element(by.css('[href="/login"]')),
        Create_account_link: element(by.css(".create-account-callout.mt-3"))
    },
}
