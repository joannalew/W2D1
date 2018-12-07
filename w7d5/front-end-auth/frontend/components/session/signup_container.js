import { connect } from 'react-redux';
import { createNewUser } from '../../actions/session';
import Signup from './signup';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
  createNewUser: formUser => dispatch(createNewUser(formUser))
});


// pass in null for first arg because we don't need mStP
export default connect(null, mapDispatchToProps)(Signup);
