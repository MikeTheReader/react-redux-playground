import { connect } from 'react-redux';
import UserListComponent from 'components/users/UserListComponent';

function mapStateToProps(state) {
    return {
        users: state.users.selectionHistory,
        loading: false,
        selectable: false,
        columnCount: 'one',
        keyProperty: 'historyId',
    };
}

export default connect(mapStateToProps)(UserListComponent);
