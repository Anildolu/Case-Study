'use strict';



module.exports = {
    elements: {
        signin: element(by.css('[href="/login"]')),
        username: element(by.id('login_field')),
        password: element(by.id('password')),
    },
}
