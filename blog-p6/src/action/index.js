import _ from 'lodash';
import jasonPlaceholder from '../apis/jasonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts());
    
    //console.log(getState().posts)
    const userIds = _.uniq(_.map(getState().posts, 'userId'));
    userIds.forEach(id => dispatch(fetchUser(id)));
};

export const fetchPosts = () => async (dispatch, getState) => {
        const response = await jasonPlaceholder.get('/posts')

        dispatch({ type: 'FETCH_POSTS', payload: response.data})
    };

    export const fetchUser = (id) => async (dispatch, getState) => {
        const response = await jasonPlaceholder.get(`/users/${id}`)

        dispatch({ type: 'FETCH_USER', payload: response.data })
    };

    // this is how we Memoize :
    // export const fetchUser = (id) => (dispatch, getState) => _fetchUser(id, dispatch);

    // const _fetchUser = _.memoize(async(id, dispatch) => {
    //     const response = await jasonPlaceholder.get(`/users/${id}`)

    //     dispatch({ type: 'FETCH_USER', payload: response.data })
    // });

