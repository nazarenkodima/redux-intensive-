//Types
import { FETCH_POSTS_ASYNC, FILL_POSTS, CREATE_POST_ASYNC, CREATE_POST } from './types';

//Instruments
import { api } from '../../REST';

export const fillPosts = (posts) => {
    return {
        type:    FILL_POSTS,
        payload: posts,
    };
};

export const fetchPostsAsync = () => async (dispatch) => {
    dispatch({
        type: FETCH_POSTS_ASYNC,
    });

    const response = await api.posts.fetch();
    const result = await response.json();

    console.log('response → ', response);
    console.log('result → ', result);
    // dispatch(fillPosts(result.data));
};

export const createPost = (posts) => {
    return {
        type:    CREATE_POST,
        payload: posts,
    };
};

export const createPostAsync = () => async (dispatch) => {
    dispatch({
        type: CREATE_POST_ASYNC,
    });

    const create =  await api.posts.create();

    console.log('create → ', create);
};
