module.exports = {
    url: function() {
        return this.api.launchUrl + '/buy';
    },
    elements: {
        inputUSD: {
            selector: '#input-1'
        },
        inputName:{
            selector: '#buy--input--name > input'
        },
        inputEmail:{
            selector: '#buy--input--email > input'
        },
        inputWallet:{
            selector: '#buy--input--address > input'
        },
        inputCardName:{
            selector: '#buy--input--card-name > input'
        },
        inputCardNumber:{
            selector: '#buy--input--card-number > input'
        },
        inputCardExpiry:{
            selector: '#buy--input--card-expiry > input.form-control.inputtext1.mmy.calbg'
        },

        inputCardCVC:{
            selector: '#buy--input--card-expiry > input.form-control.inputtext1.cvc.passwordbg'
        },
        submitButton: {
            selector: '#buy--button--submit'
        }
    }
};