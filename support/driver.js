require("chromedriver");
const { Builder, By } = require("selenium-webdriver");

let driver, by;

global.startDriver = async () => {
    driver = await new Builder().forBrowser("chrome").build();
}

Object.defineProperty(global, "driver", {
    get() {
        if (!driver) {
            throw new Error("Initialize driver! await startDriver();")
        }
        return driver;
    },
    set() {
        // noop
    }
});


Object.defineProperty(global, "by", {
    get() {
        if (!by) {
            by = By;
        }
        return by;
    },
    set() {
        // noop
    }
});
