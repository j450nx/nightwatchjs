module.exports = {
    'Verify page title': function (browser) {
      browser
        .url('https://the-internet.herokuapp.com/')
        .assert.title('The Internet');
    },
    'Verify heading': function (browser) {
      browser
        .waitForElementVisible('h1.heading')
        .assert.visible('h1.heading')
        .assert.textContains('h1.heading', 'Welcome to the-internet');
    },
    'Verify h2 header': function (browser) {
      browser
        .assert.visible('h2')
        .assert.textContains('h2', 'Available Examples');
    },
    'Verify the list': function (browser) {
      browser
      .waitForElementVisible('ul li')
      .assert.elementsCount('ul li', 44);
    },
    'Verify the existence of the footer element': function (browser) {
      browser
        .assert.elementPresent('#page-footer');
    }
  }