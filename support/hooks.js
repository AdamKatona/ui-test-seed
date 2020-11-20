const { BeforeAll, AfterAll } = require("cucumber");

BeforeAll(async () => {
    await startDriver();
    await driver.manage().timeouts().implicitlyWait(2000)
    await driver.manage().timeouts().pageLoadTimeout(60000);
    await driver.manage().window().maximize();
    // await driver.get("https://angular.io");
});
AfterAll(async () => {
    await driver.quit();
});