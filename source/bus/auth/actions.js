
//Actions
import { types } from './types';

export const authAction = {
    //Sync
    authenticate: () => {
        return {
            type: types.AUTHENTICATE,
        };
    },
    initialize: () => {
        return {
            type: types.INITIALIZE,
        };
    },

    logout: () => {
        return {
            type: types.LOGOUT,
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
    authenticateAsync: () => {
        return {
            type: types.AUTHENTICATE_ASYNC,
        };
    },
    initializeAsync: () => {
        return {
            type: types.INITIALIZE_ASYNC,
        };
    },
    logoutAsync: () => {
        return {
            type: types.LOGOUT_ASYNC,
        };
    },
}
;
