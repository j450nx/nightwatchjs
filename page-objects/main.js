module.exports = {
    url: 'https://the-internet.herokuapp.com/',
    commands: [mainPageCommands],
    elements: {
        h1Header: {
            selector: 'h1.heading'
        },
        h2Header: {
            selector: 'h2'
        },
        list: {
            selector: 'ul li'
        },
        footer: {
            selector: '#page-footer'
        }
    }
}