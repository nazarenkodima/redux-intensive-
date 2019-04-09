
//Actions
import { types } from './types';

export const authAction = {
    //Sync
    authenticate: () => {
        return {
            type: types.AUTHENTICATE,
        };
    },
    //Async
    signUpAsync: (userInfo) => {
        return {
            type:    types.SIGNUP_ASYNC,
            payload: userInfo,
        };
    },
    loginAsync: (userInfo) => {
        return {
            type:    types.LOGIN_ASYNC,
            payload: userInfo,
        };
    },
}
;
