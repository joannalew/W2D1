import React from 'react';
import { connect } from 'react-redux';
import PostForm from './post_form';
import { fetchPost, updatePost } from '../../actions/post_actions';


const mapStateToProps = (state, ownProps) => {
  let postId = ownProps.match.params.postId;
  let post = state.posts[postId];
  return ({
    post: post,
    formType: 'Update Post'
  })
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchPost: (id) => dispatch(fetchPost(id)),
    action: (post) => dispatch(updatePost(post))
  })
};


class EditPostForm extends React.Component {
  componentDidMount() {
    let postId = this.props.match.params.postId;
    this.props.fetchPost(postId);
  }

  render() {
    const { action, formType, post } = this.props;
    return (
      <PostForm action={action} formType={formType} post={post} />
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPostForm);
