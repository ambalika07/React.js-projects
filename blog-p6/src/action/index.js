import jasonPlaceholder from '../apis/jasonPlaceholder';

export const fetchPosts = () => async (dispatch, getState) => {
        const response = await jasonPlaceholder.get('/posts')

        dispatch({ type: 'FETCH_POSTS', payload: response.data})

        // return {
        //     type: 'FETCH_POSTS',
        //     payload: promise
        // };
    };
