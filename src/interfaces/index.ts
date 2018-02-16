import { Context, IntentRequest, LaunchRequest, Session, SessionEndedRequest } from "alexa-app";

export interface Story {
    text: string;
    imageURL: string;
    storyURL: string;
}

export interface AlexaRequest {
    version: string;
    session: Session;
    context: Context;
    request: IntentRequest | LaunchRequest | SessionEndedRequest;
}
