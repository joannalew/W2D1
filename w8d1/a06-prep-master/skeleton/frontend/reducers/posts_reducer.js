import {
  RECEIVE_ALL_POSTS,
  RECEIVE_POST,
  REMOVE_POST,
} from '../actions/post_actions';
import merge from 'lodash/merge';

const defaultState = {};

const PostsReducer = (oldState = defaultState, action) => {
  switch(action.type) {
    case RECEIVE_ALL_POSTS:
      return action.posts;
    case RECEIVE_POST:
      return merge({}, oldState, { [action.post.id]: action.post });
    case REMOVE_POST:
      const newState = merge({}, oldState);
      delete newState[action.postId];
      return newState;
    default:
      return oldState;
  }
};

export default PostsReducer;
