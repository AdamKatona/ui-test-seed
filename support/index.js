const { setDefaultTimeout, setWorldConstructor, World } = require("cucumber");
const chai = require('chai');
const cap = require('chai-as-promised');
chai.use(cap);

setDefaultTimeout(30e3);

let expect;
Object.defineProperty(global, "expect", {
    get() {
        if (!expect) {
            expect = chai.expect;
        }
        return expect;
    },
    set() {
        // Noop
    },
});

setWorldConstructor(function test() {

})
