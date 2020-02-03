module.exports = {
    'Login with valid user name and password': function (browser) {
        var loginPage = browser.page.login();
        loginPage.navigate()
                 .setValue('@inputEmail', 'rakeshgudipudi@gmail.com')
                 .setValue('@inputPassword', 'Work@123')
                 .click('@submitButton')
                 .waitForElementVisible('#page-dashboard' );
    }
};