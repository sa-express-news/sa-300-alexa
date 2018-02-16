import * as chai from "chai";
// tslint:disable-next-line: no-var-requires
chai.use(require("chai-http"));
import alexaServer from "../index";
import * as a from "./helpers";

const { assert } = chai;

describe("Alexa Skill", () => {
    describe("Launch Intent Handler", () => {
        const request = a.generateRequest();
        let response;
        let body: any;

        before(async () => {
            response = await chai.request(alexaServer)
                .post("/sa-history")
                .send(request);

            body = response.body;
        });

        it("is a test", () => {
            // tslint:disable-next-line
            console.log(body);
            assert.isTrue(true);
        });
    });
});
