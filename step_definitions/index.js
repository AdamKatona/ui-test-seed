const { expect } = require("chai");
const { Given, When, Then } = require("cucumber");

Given(/^the Angular page is loaded$/, async () => {
    await driver.get("https://angular.io")

});

When(/^the "([^"]+)" button is clicked$/, buttonName => {
    return driver.findElement(by.linkText(buttonName)).click();
});

When(/^the "([^"]+)" text is entered into the search bar$/, searchText => {
    const selector = "input[type=\"search\"]";
    return driver.findElement(by.css(selector)).sendKeys(searchText);
});

Then("test", () => expect(true).to.be.false);

Then(/^the Angular logo should be visible$/, () => {
    const selector = ".hero-logo";
    const logoVisibility = driver.findElement(by.css(selector)).isDisplayed();
    return expect(logoVisibility).to.eventually.equal(true);
});

Then(/^the "([^"]+)" text should be displayed on the home page$/, text => {
    const selector = ".button.hero-cta";
    const buttonText = driver.findElement(by.css(selector)).getText();
    return expect(buttonText).to.eventually.equal(text);
});

Then(/^the page title should be "([^"]+)"$/, title => {
    return expect(driver.getTitle()).to.eventually.equal(title);
});

Then(/^the "([^"]+)" page should be visible$/, async pageName => {
    const selectedMenuItemSelector = ".vertical-menu-item.level-1.selected";
    const selectedNavbarItemSelector = ".ng-star-inserted.selected"

    await driver.wait(() => {
        return driver.findElement(by.css(selectedMenuItemSelector)).isDisplayed();
    }, 5000);
    await driver.sleep(2000);

    const selectedMenuItemText = await driver.findElement(by.css(selectedMenuItemSelector)).getText();
    const selectedNavbarItemText = await driver.findElement(by.css(selectedNavbarItemSelector)).getText();

    expect(selectedNavbarItemText).to.equal("DOCS");
    return expect(selectedMenuItemText).to.equal(pageName)
});

Then(/^the suggestion list should be displayed$/, () => {
    const srl = ".search-results";
    // Write code here that turns the phrase above into concrete actions
    return expect(driver.findElement(by.css(srl)).isDisplayed()).to.eventually.be.true;
});

Then(/^the (API|CLI|Guide) section should have (\d+) results?$/, async (section, resultCount) => {
    switch (section) {
        case "API":
            section = 1;
            break;
        case "CLI":
            section = 2;
            break;
        case "Guide":
            section = 3;
            break;
    }

    const apiResults = `.search-area:nth-of-type(${section}) .search-result-item`;
    const items = await driver.findElements(by.css(apiResults));
    return expect(items.length).to.equal(resultCount);
});

Then(/^the (\d+)\. result\'s name in API section should be "([^"]+)"$/, (resultIndex, resultName) => {
    // Write code here that turns the phrase above into concrete actions
    return 'pending';
});