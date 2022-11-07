module.exports = {
    'Verify login page': function (browser) {
        const login = browser.page.loginPage();

        login
            .navigate()
            .waitForElementVisible('@pageTitle')
            .assert.visible('@inputUsername')
            .assert.visible('@inputPassword');

        login
            .login('tomsmith', 'SuperSecretPassword!');
    },
    'Verify secure page': function (browser) {
        const secure = browser.page.securePage();

        secure
            .assert.visible('@flashAlert')
            .assert.visible('@logoutButton')
            .logout()
            .waitForElementNotPresent('@logoutButton');
    }
}