//Actions
import { authAction } from '../actions';

//Actions
import { types } from '../types';

describe('auth actions:', () => {
    test('authenticate', () => {
        expect(authAction.authenticate()).toEqual({
            type: types.AUTHENTICATE,
        });
    });

    test('initialize', () => {
        expect(authAction.initialize()).toEqual({
            type: types.INITIALIZE,
        });
    });
    test('logout', () => {
        expect(authAction.logout()).toEqual({
            type: types.LOGOUT,
        });
    });

    test('signUpAsync', () => {
        expect(authAction.signUpAsync(__.userProfile)).toEqual({
            type:    types.SIGNUP_ASYNC,
            payload: __.userProfile,
        });
    });

    test('loginAsync', () => {
        expect(authAction.loginAsync(__.credentials)).toEqual({
            type:    types.LOGIN_ASYNC,
            payload: __.credentials,
        });
    });

    test('authenticateAsync', () => {
        expect(authAction.authenticateAsync()).toEqual({
            type: types.AUTHENTICATE_ASYNC,
        });
    });

    test('initializeAsync', () => {
        expect(authAction.initializeAsync()).toEqual({
            type: types.INITIALIZE_ASYNC,
        });
    });

    test('logoutAsync', () => {
        expect(authAction.logoutAsync()).toEqual({
            type: types.LOGOUT_ASYNC,
        });
    });
});
