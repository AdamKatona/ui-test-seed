const { BeforeAll, AfterAll } = require("cucumber");

BeforeAll(async () => {
    await startDriver();
    await driver.manage().window().maximize();
    // await driver.get("https://angular.io");
});
AfterAll(async () => {
    await driver.quit();
});