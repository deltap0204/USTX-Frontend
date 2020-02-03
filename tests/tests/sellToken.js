const mockDataAschema = require('../data/core.mocks.js');
const testData = require('../data/tests.data.js');

let mockData;

const SELL_INFO_SCHEMA = {
    name: {
        faker: 'name.firstName'
    },
    email_id: {
        faker: 'internet.email'
    },
    USTX: {
        chance: 'floating({ "min": 0.1, "max": 1.0  })'
    },
    walletAddress: {
        values: ['0xCAE6e8d58CEc241243D50bEDb5632AC9f652C5AE']
    },
    bankAccountType: {
        values: ['checking', 'savings']
    },
    bankRoutingNumber: {
        faker: 'random.uuid'
    },
    bankName: {
        faker: 'company.companyName'
    },
    bankAccountNumber: {
        faker: 'random.alphaNumeric'
    },
    bankType: {
        values: ['personal', 'business']
    }

};

module.exports = {
    beforeAll: async (self, done) => {
        mockData =
            await mockDataAschema.createMocker(
                mockDataAschema.createSchema('INFO', SELL_INFO_SCHEMA, 1))
                                 .build();
    },

    'Sell with valid user name and password': function (browser) {
        var sellTokenPage = browser.page.sellToken();
        const currentDetails = mockData['INFO'][0];
        sellTokenPage.login(testData.VALID_LOGIN.userName, testData.VALID_LOGIN.password,
            testData.LOGIN_URL(browser.launchUrl)).navigate()
                    .setValue('@inputUSTX', currentDetails.USTX)
                    .setValue('@inputName', currentDetails.name)
                    .setValue('@inputEmail', currentDetails.email_id)
                    .setValue('@inputWallet', currentDetails.walletAddress)
                    .setValue('@inputBankAccountType', currentDetails.bankAccountType)
                    .setValue('@inputBankRoutingNumber', currentDetails.bankRoutingNumber)
                    .setValue('@inputBankName', currentDetails.bankName)
                    .setValue('@inputBankAccountNumber', currentDetails.bankAccountNumber)
                     .setValue('@inputBankType', currentDetails.bankType)
                    .click('@submitButton')
                    .waitForElementVisible('#div--thankyou--message');
    },

    'Sell with unverified user name and password': function (browser) {
        var sellTokenPage = browser.page.sellToken();
        const currentDetails = mockData['INFO'][0];
        sellTokenPage.login(testData.UNVERIFIED_LOGIN.userName, testData.UNVERIFIED_LOGIN.password,
            testData.LOGIN_URL(browser.launchUrl)).navigate()
                     .waitForElementVisible('#sell--div--unverified');
    }
};