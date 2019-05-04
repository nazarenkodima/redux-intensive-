//Core
import { createStore, combineReducers } from 'redux';

//Reducers
import { authReducer as auth } from '../../bus/auth/reducer';
import { profileReducer as profile } from '../../bus/profile/reducer';
import { uiReducer as ui } from '../../bus/ui/reducer';
import { postsReducer as posts } from '../../bus/posts/reducer';
import { usersReducer as users } from '../../bus/users/reducer';
import { formsReducer as forms } from '../../bus/forms/reducer';

//Store
import { store } from '../store';

export const referenceRootReducer = combineReducers({
    auth,
    profile,
    ui,
    posts,
    users,
    forms,
});

const referenceStore = createStore(referenceRootReducer);

describe('store:', () => {
    test('should have a valid state shape', () => {
        expect(store.getState()).toEqual(referenceStore.getState());
    });

});
