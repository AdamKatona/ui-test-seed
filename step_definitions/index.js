const { Given, When, Then } = require("cucumber");

Given(/^the Angular page is loaded$/, async () => {
    await driver.get("https://angular.io")

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
