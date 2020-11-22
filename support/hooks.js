const { BeforeAll, AfterAll } = require("cucumber");

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
AfterAll(async () => {
    await driver.quit();
});
