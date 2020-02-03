module.exports = {
    url: function() {
        return this.api.launchUrl + '/sell';
    },
    elements: {
        inputUSTX: {
            selector: '#input-2'
        },
        inputName:{
            selector: '#sell--input--name > input'
        },
        inputEmail:{
            selector: '#sell--input--email > input'
        },
        inputWallet:{
            selector: '#sell--input--wallet-address > input'
        },
        inputBankAccountType:{
            selector: '#sell--input--account-type > input'
        },
        inputBankRoutingNumber:{
            selector: '#sell--input--routing-number > input'
        },
        inputBankName:{
            selector: '#sell--input--bank-name > input'
        },
        inputBankAccountNumber:{
            selector: '#sell--input--bank-account-number > input'
        },
        inputBankType:{
            selector: '#sell--input--bank-type > input'
        },

        submitButton: {
            selector: '#sell--input--submit'
        }
    }
};