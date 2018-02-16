import * as chai from "chai";
// tslint:disable-next-line: no-var-requires
chai.use(require("chai-http"));
import app from "./index";

const { assert } = chai;

describe("Server", () => {
    describe("Security", () => {
        describe("Headers", () => {
            let response;
            let headers: any;
            before(async () => {
                response = await chai.request(app).get("/");
                headers = response.header;
            });
            it("Has DNS-prefetch-control set to off", () => {
                const header = headers["x-dns-prefetch-control"];
                assert.strictEqual(header, "off");
            });
            it("has x-frame-options set to DENY", () => {
                const header = headers["x-frame-options"];
                assert.strictEqual(header, "DENY");
            });
            it("sets x-powered-by to PHP 7.0.23", () => {
                const header = headers["x-powered-by"];
                assert.strictEqual(header, "PHP/7.0.23");
            });
            it("sets strict-transport-security to 180 days + include subdomains", () => {
                const header = headers["strict-transport-security"];
                assert.strictEqual(header, "max-age=15552000; includeSubDomains");
            });
            it("sets x-download-options to noopen", () => {
                const header = headers["x-download-options"];
                assert.strictEqual(header, "noopen");
            });
            it("sets x-content-type-options to nosniff", () => {
                const header = headers["x-content-type-options"];
                assert.strictEqual(header, "nosniff");
            });
            it("sets x-xss-protection to 1; mode=block", () => {
                const header = headers["x-xss-protection"];
                assert.strictEqual(header, "1; mode=block");
            });
        });
    });
});
