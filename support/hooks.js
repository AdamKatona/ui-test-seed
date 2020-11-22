const { BeforeAll, AfterAll, After, Status } = require("cucumber");

BeforeAll(async () => {
    await startDriver();
    await driver.manage().timeouts().implicitlyWait(2000)
    await driver.manage().timeouts().pageLoadTimeout(60000);
    await driver.manage().window().maximize();
    // await driver.get("https://angular.io");
});

After(async function (scenario) {
    if (scenario && scenario.result.status === Status.FAILED) {
        const world = this;
        const url = await driver.getCurrentUrl();
        const e = scenario.result.exception;
        console.warn(`Current url at failed step: ${url}`);
        console.error("Reason: ", e);

        const png = await driver.takeScreenshot();
        await driver.sleep(3000);
        world.attach(new Buffer.from(png, "base64"), "image/png");
    }
});

AfterAll(async () => {
    await driver.quit();
});
