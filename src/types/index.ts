import * as OAuth2Strategy from "passport-oauth2";
import {Profile} from "passport";

export interface MattermostStrategyOptions extends OAuth2Strategy.StrategyOptionsWithRequest {
    userProfileURL: string
}

export interface MattermostDoneCallback {
    (error: Error | null): any
}

export interface MattermostDoneCallback {
    (error: Error | null, data: object): any
}

export type MattermostProfile = Profile & {
    email: string
};
