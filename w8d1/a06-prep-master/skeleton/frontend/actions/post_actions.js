import * as PostApiUtil from '../util/post_api_util';

export const RECEIVE_ALL_POSTS = 'RECEIVE_ALL_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const REMOVE_POST = 'REMOVE_POST';

const receivePosts = (posts) => ({
  type: RECEIVE_ALL_POSTS,
  posts: posts
});

const receivePost = (post) => ({
  type: RECEIVE_POST,
  post: post
})

const removePost = (post) => ({
  type: REMOVE_POST,
  postId: post.id
})

export const fetchPosts = () => (dispatch) => (
  PostApiUtil.fetchPosts().then(posts => dispatch(receivePosts(posts)))
);

export const fetchPost = (id) => (dispatch) => (
  PostApiUtil.fetchPost(id).then(post => dispatch(receivePost(post)))
);

export const createPost = (post) => (dispatch) => (
  PostApiUtil.createPost(post).then(post => dispatch(receivePost(post)))
);

export const updatePost = (post) => (dispatch) => (
  PostApiUtil.updatePost(post).then(post => dispatch(receivePost(post)))
);

export const deletePost = (id) => (dispatch) => (
  PostApiUtil.deletePost(id).then(post => dispatch(removePost(post)))
)
