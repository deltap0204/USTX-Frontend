const mockDataAschema = require('../data/core.mocks.js');
const testData = require('../data/tests.data.js');
let mockData;

const BUY_INFO_SCHEMA = {
    name: {
        faker: 'name.firstName'
    },
    email_id: {
        faker: 'internet.email'
    },
    inputUSD: {
        chance: 'integer({"min": 1, "max": 20})'
    },
    walletAddress: {
        values: ['0xCAE6e8d58CEc241243D50bEDb5632AC9f652C5AE']
    },
    cardNumber: {
        values: [4242424242424242]
    },
    cardExpiry: {
        values: ['02/21']
    },
    cardCVC: {
        values: [111]
    }
};


module.exports = {
    beforeAll: async (self, done) => {
        mockData =
            await mockDataAschema.createMocker(
                mockDataAschema.createSchema('INFO', BUY_INFO_SCHEMA, 1))
                                 .build();
    },

    'Buy token with valid email and password': function (browser) {
        var buyTokenPage = browser.page.buyToken();
        const currentDetails = mockData['INFO'][0];
        buyTokenPage.login(testData.VALID_LOGIN.userName, testData.VALID_LOGIN.password,
            testData.LOGIN_URL(browser.launchUrl)).navigate()
                    .setValue('@inputUSD', currentDetails.inputUSD)
                    .setValue('@inputName', currentDetails.name)
                    .setValue('@inputEmail', currentDetails.email_id)
                    .setValue('@inputWallet', currentDetails.walletAddress)
                    .setValue('@inputCardName', currentDetails.name)
                    .setValue('@inputCardNumber', currentDetails.cardNumber)
                    .setValue('@inputCardExpiry', currentDetails.cardExpiry)
                    .setValue('@inputCardCVC', currentDetails.cardCVC)
                    .click('@submitButton')
                    .waitForElementVisible('#div--thankyou--message');
    },

    'Buy token with unverified email and password': function (browser) {
        var buyTokenPage = browser.page.buyToken();
        const currentDetails = mockData['INFO'][0];
        buyTokenPage.login(testData.UNVERIFIED_LOGIN.userName, testData.UNVERIFIED_LOGIN.password,
            testData.LOGIN_URL(browser.launchUrl)).navigate()
                    .waitForElementVisible('#buy--div--unverified');
    }

};