module.exports = {
    url: function() {
        return this.api.launchUrl + '/register';
    },
    elements: {
        inputFirstName: {
            selector: '#FirstName'
        },
        inputLastName:{
            selector: '#LastName'
        },
        inputMobile:{
            selector: '#Mobile'
        },
        inputEmail:{
            selector: '#Email'
        },
        inputDOB:{
            selector: '#DOB'
        },
        inputSSN:{
            selector: '#SSN'
        },
        inputUsCitizen:{
            selector: '#ChkUS'
        },
        inputAddressLine1:{
            selector: '#Aline1'
        },

        inputAddressLine2:{
            selector: '#Aline2'
        },
        inputState:{
            selector: '#State'
        },
        inputCity:{
            selector: '#city'
        },
        inputZip:{
            selector: '#zip'
        },
        inputAgreeEmail:{
            selector: '#register--input--agree > input'
        },
        inputTerms:{
            selector: '#register--input--terms > input'
        },

        submitButton: {
            selector: '#register--button-submit'
        }
    }
};