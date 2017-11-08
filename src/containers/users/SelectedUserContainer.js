import { connect } from 'react-redux';
import UserComponent from 'components/users/UserComponent';

function mapStateToProps(state) {
    return {
        user: state.users.selectedUser,
    };
}

export default connect(mapStateToProps)(UserComponent);
