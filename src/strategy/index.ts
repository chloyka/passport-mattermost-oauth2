import * as OAuth2Strategy from "passport-oauth2";
import {InternalOAuthError} from "passport-oauth2";
import {MattermostDoneCallback, MattermostProfile, MattermostStrategyOptions} from "../types";

export class MattermostStrategy extends OAuth2Strategy {
    private readonly userProfileURL: string;

    constructor(options: MattermostStrategyOptions, verify: OAuth2Strategy.VerifyFunctionWithRequest) {
        super(options, verify);
        OAuth2Strategy.call(this, options, verify);
        this.userProfileURL = options.userProfileURL;
    }

    userProfile = (accessToken: string, done: MattermostDoneCallback) => {
        this._oauth2.get(this.userProfileURL, accessToken, (err, body, res) => {
            let json = {};
            if (err) {
                return done(new InternalOAuthError('Failed to fetch user profile', err));
            }

            try {
                if (typeof body === "string") {
                    json = JSON.parse(body);
                }
            } catch (ex) {
                return done(new Error('Failed to parse user profile'));
            }

            // TODO: Implement mattermost response interface
            done(null, <MattermostProfile>{
                // @ts-ignore
                email: json.email,
                // @ts-ignore
                id: json.id,
                // @ts-ignore
                displayName: json.nickname,
            });
        });
    }
}
