import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectUser } from 'modules/users';
import { getUserImage } from 'modules/images';
import UserListComponent from 'components/users/UserListComponent';


function userClicked(user) {
    return (dispatch) => {
        dispatch(getUserImage(user.id));
        dispatch(selectUser(user));
    };
}

function mapStateToProps(state) {
    return {
        loading: state.users.loading,
        users: state.users.users,
        selected: state.users.selectedUser,
        selectable: true,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ onUserClick: userClicked }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserListComponent);
