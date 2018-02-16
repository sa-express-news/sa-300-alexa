import alexaApp from "./alexa";
import { Story } from "./interfaces";
import expressApp from "./server";

// tslint:disable-next-line: no-var-requires
// const stories: Story[] = require("./stories.json");

alexaApp.express({
    expressApp,

    // verifies requests come from amazon alexa. Must be enabled for production.
    // You can disable this if you're running a dev environment and want to POST
    // things to test behavior. enabled by default.
    checkCert: false,
});

export default expressApp.listen(5000);
