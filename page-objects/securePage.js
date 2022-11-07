const securePageCommands = {
    logout () {
        return this.click('@logoutButton');
    }
}

module.exports = {
    commands: [securePageCommands],
    elements: {
        flashAlert : {
            selector: '#flash'
        },
        logoutButton: {
            selector: 'a[href="/logout"]'
        }
    }
}