import { connect } from 'react-redux';
import PostShow from './post_show';
import { fetchPost } from '../../actions/post_actions';

const mapStateToProps = (state, ownProps) => {
  let postId = ownProps.match.params.postId;
  return ({
    post: state.posts[postId]
  })
};

const mapDispatchToProps = dispatch => {
  return ({
    fetchPost: (id) => dispatch(fetchPost(id))
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(PostShow)
