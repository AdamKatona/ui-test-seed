const { Given, When, Then } = require("cucumber");

Given(/^the Angular page is loaded$/, async () => {
    await driver.get("https://angular.io")

});

Then("test", () => expect(true).to.be.true);
