module.exports = {
    VALID_LOGIN: {
        userName: 'rakeshgudipudi@gmail.com',
        password: 'Work@123',
    },
    UNVERIFIED_LOGIN: {
        userName: 'vishnutobor@gmail.com',
        password: 'Work@123',
    },
    LOGIN_URL: function (url) {
        return url + '/login'
    }
}
