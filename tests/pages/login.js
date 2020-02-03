module.exports = {
    url: function() {
        return this.api.launchUrl + '/login';
    },
    elements: {
        inputEmail: {
            selector: '#login-form--email-group > input'
        },
        inputPassword:{
            selector: '#login-form--password-group > input'
        },
        submitButton: {
            selector: '#login-form--submit-group > div > div > input'
        }
    }
};