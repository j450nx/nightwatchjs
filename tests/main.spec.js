module.exports = {
    'Verify main page': function (browser) {
      const mainPage = browser.page.main();
      mainPage
        .navigate()
        .assert.title('The Internet')
        .waitForElementVisible('@h1Header')
        .assert.visible('@h1Header')
        .assert.textContains('@h1Header', 'Welcome to the-internet')
        .assert.visible('@h2Header')
        .assert.textContains('@h2Header', 'Available Examples')
        .waitForElementVisible('@list')
        .assert.elementsCount('@list', 44)
        .assert.elementPresent('@footer');
      
      browser.end();
    }
  }