//Core
import { put, apply } from 'redux-saga/effects';

//Instruments
import { authAction } from '../../actions';

export function* initialize () {
    const token = yield apply(localStorage, localStorage.getItem, ['token']);
    const remember = yield apply(localStorage, localStorage.getItem, ['remember']);

    if (token && remember) {
        yield put(authAction.authenticateAsync());
    } else {
        yield put(authAction.initialize());
    }
}
