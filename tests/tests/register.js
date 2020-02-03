const mockDataAschema = require('../data/core.mocks.js');

let mockData;

const REGISTER_MOCK_SCHEMA = {
    first_name: {
        faker: 'name.firstName'
    },
    last_name: {
        faker: 'name.lastName'
    },
    email_id: {
        faker: 'internet.email'
    },
    phone: {
        faker: 'phone.phoneNumberFormat'
    },
    dateOfBirth: {
        function: function () {
            return this.faker.date.past()
                       .toString();
        }
    },
    SSN: {
        faker: 'random.uuid'
    },
    addressLine1: {
        faker: 'address.streetAddress'
    },
    state: {
        faker: 'address.stateAbbr'
    },
    city: {
        faker: 'address.city'
    },
    zipCode: {
        faker: 'address.zipCode'
    }
};

module.exports = {
    beforeAll: async (self, done) => {
        mockData =
            await mockDataAschema.createMocker(
                mockDataAschema.createSchema('USER_ACCOUNT', REGISTER_MOCK_SCHEMA, 1))
                                 .build();
    },
    'Register with valid user name and password': function (browser) {
        var registerPage = browser.page.register();
        var currentAccount = mockData.USER_ACCOUNT[0];
        registerPage.navigate()
                    .setValue('@inputFirstName', currentAccount.first_name)
                    .setValue('@inputLastName', currentAccount.last_name)
                    .setValue('@inputMobile', currentAccount.phone)
                    .setValue('@inputEmail', currentAccount.email_id)
                    .setValue('@inputDOB', currentAccount.dateOfBirth)
                    .setValue('@inputSSN', currentAccount.SSN)
                    .setValue('@inputAddressLine1', currentAccount.addressLine1)
                    .setValue('@inputAddressLine1', currentAccount.addressLine1)
                    .setValue('@inputState', currentAccount.state)
                    .setValue('@inputCity', currentAccount.city)
                    .setValue('@inputState', currentAccount.state)
                    .setValue('@inputZip', currentAccount.zipCode)
                    .click('@inputTerms')
                    .click('@inputAgreeEmail')
                    .click('@submitButton')
                    .waitForElementVisible('#div--confirm-email');
    }
};