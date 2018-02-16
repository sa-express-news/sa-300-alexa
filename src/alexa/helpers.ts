import { Context, IntentRequest, LaunchRequest, Session, SessionEndedRequest } from "alexa-app";
import { AlexaRequest } from "../interfaces";

export const generateRequest = (): AlexaRequest => {
    return {
        context: generateContext(),
        request: generateLaunchRequest(),
        session: generateSession(true),
        version: "1.0",
    };
};
export const generateSession = (isNew: boolean): Session => {
    return {
        application: {
            applicationId: "amzn1.ask.skill.65165168",
        },
        attributes: {},
        new: isNew,
        sessionId: "amzn1.echo-api.session.546816819",
        user: {
            userId: "amzn1.ask.account.6849819",
        },
    };
};

export const generateContext = (): Context => {
    return {
        System: {
            apiEndpoint: "https://api.amazonalexa.com",
            application: {
                applicationId: "amzn1.ask.skill.65165168",
            },
            device: {
                deviceId: "asdasdasd651651",
                supportedInterface: ["AudioPlayer"], // TODO: Think this may be weirder?
            },
            user: {
                userId: "amzn1.ask.account.6849819",
            },
        },
    };
};

export const generateLaunchRequest = (): LaunchRequest => {
    return {
        locale: "en-US",
        requestId: "6819+8165161",
        timestamp: new Date().toISOString(),
        type: "LaunchRequest",
    };
};
