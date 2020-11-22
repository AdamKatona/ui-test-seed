const { BeforeAll, AfterAll, After, Status } = require("cucumber");

/**
 * This hook will attach to the standard outputs and will also log everything to a file AND the Console output.
 */
const setupNodeLoggerHook = () => {
    const { createWriteStream } = require("fs");
    const { join } = require("path");
    const { format } = require("util");
    const reportsFolder = ".";
    const nodeLogFile = createWriteStream(join(reportsFolder, "nodejs.log"));
    const originalStdoutWrite = process.stdout.write.bind(process.stdout);

    process.stdin.setEncoding("utf8");

    const streamHook = stream => {
        stream.write = (chunk, encoding, callback) => {
            if (typeof chunk === "string") {
                chunk = format(chunk);
                // itt a chunkot tedd a cucumber reportba pl scenario.write vagy cucumber eventtel
                nodeLogFile.write(chunk);
                return originalStdoutWrite(chunk, encoding, callback);
            }
        };
    };

    streamHook(process.stdout);
    streamHook(process.stderr);
};

BeforeAll(async () => {
    // setupNodeLoggerHook();
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
        const pngBytes = new Buffer.from(png, "base64");
        world.attach(pngBytes, "image/png");
    }
});

AfterAll(async () => {
    await driver.quit();
});
