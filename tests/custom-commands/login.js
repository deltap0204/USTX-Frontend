exports.command = function (username, password, loginUrl) {

    this
        .url(loginUrl)
        .setValue('#login-form--email-group > input', username)
        .setValue('#login-form--password-group > input', password)
        .click('#login-form--submit-group > div > div > input')
        .waitForElementVisible( '#page-dashboard');

    return this;
};