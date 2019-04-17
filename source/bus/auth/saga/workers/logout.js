//Core
import { put, apply } from 'redux-saga/effects';

//Instruments
import { api } from '../../../../REST';
import { authAction } from '../../../auth/actions';
import { uiActions } from '../../../ui/actions';
import { profileActions } from '../../../profile/actions';
import { postActions } from '../../../posts/actions';
import { usersActions } from '../../../users/actions';

export function* logout () {
    try {
        yield put(uiActions.startFetching());

        const response =  yield apply(api, api.auth.logout);

        if (response.status !== 204) {
            const { message } = yield apply(response, response.json);

            throw new Error(message);
        }

    } catch (error) {
        yield put(uiActions.emitError(error, 'logout worker'));
    } finally {
        yield apply(localStorage, localStorage.removeItem, ['token']);
        yield apply(localStorage, localStorage.removeItem, ['remember']);

        yield put(profileActions.clearProfile());
        yield put(postActions.clearPosts());
        yield put(usersActions.clearUsers());
        yield put(uiActions.stopFetching());
        yield put(authAction.logout());

    }

}
