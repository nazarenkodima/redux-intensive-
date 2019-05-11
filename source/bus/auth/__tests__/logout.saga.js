//Core
import { apply } from 'redux-saga/effects';
import { actions } from 'react-redux-form';
import { expectSaga } from 'redux-saga-test-plan';

//Instruments
import { api } from '../../../REST';
import { authAction } from '../../auth/actions';
import { uiActions } from '../../ui/actions';
import { profileActions } from '../../profile/actions';
import { postActions } from '../../posts/actions';
import { usersActions } from '../../users/actions';
import { logout } from '../saga/workers';

describe('logout saga:', () => {
    test('test should complete a 204 status response scenario', async () => {
        await expectSaga(logout)
            .put(uiActions.startFetching())
            .provide([[apply(api, api.auth.logout), __.fetchResponseSuccess204]])
            .apply(localStorage, localStorage.removeItem, ['token'])
            .apply(localStorage, localStorage.removeItem, ['remember'])
            .put(profileActions.clearProfile())
            .put(postActions.clearPosts())
            .put(usersActions.clearUsers())
            .put(uiActions.stopFetching())
            .put(actions.reset('forms.user'))
            .put(authAction.logout())
            .run();
    });

    test('test should complete a 401 status response scenario', async () => {
        await expectSaga(logout)
            .put(uiActions.startFetching())
            .provide([[apply(api, api.auth.logout), __.fetchResponseFail401]])
            .put(uiActions.emitError(__.error, 'logout worker'))
            .apply(localStorage, localStorage.removeItem, ['token'])
            .apply(localStorage, localStorage.removeItem, ['remember'])
            .put(profileActions.clearProfile())
            .put(postActions.clearPosts())
            .put(usersActions.clearUsers())
            .put(uiActions.stopFetching())
            .put(actions.reset('forms.user'))
            .put(authAction.logout())
            .run();
    });

});
