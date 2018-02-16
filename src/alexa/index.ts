import * as alexa from "alexa-app";

const alexaApp = new alexa.app("sa-history");

alexaApp.launch((request: alexa.request, response) => {
    response.say("You launched the app!");
});

alexaApp.dictionary = { names: ["matt", "joe", "bob", "bill", "mary", "jane", "dawn"] };

alexaApp.intent("nameIntent", {
    slots: { name: "LITERAL" },
    utterances: [
        "my {name is|name's} {names|name}", "set my name to {names|name}",
    ],
},
    (request, response) => {
        response.say("Success!");
    },
);

export default alexaApp;
