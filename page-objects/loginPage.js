const loginPageCommands = {
    login (username, password) {
        return this.setValue('@inputUsername', username)
        .setValue('@inputPassword', password)
        .click('@submitButton');
    }
}

module.exports = {
    url: 'https://the-internet.herokuapp.com/login',
    commands: [loginPageCommands],
    elements: {
        pageTitle : {
            selector: '#content > div > h2'
        },
        inputUsername: {
            selector: '#username'
        },
        inputPassword: {
            selector: '#password'
        },
        submitButton: {
            selector: '#login > button'
        }
    }
}