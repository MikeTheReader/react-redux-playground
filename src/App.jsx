import React from 'react';
import UserListContainer from 'containers/users/UserListContainer';
import SelectedUserContainer from 'containers/users/SelectedUserContainer';
import SelectionHistoryContainer from 'containers/users/SelectionHistoryContainer';
import SelectedUserImageContainer from 'containers/images/SelectedUserImageContainer';
import './App.css';

const App = () => (
    <div className="ui container">
        <div className="ui two column grid container">
            <div className="column">
                <h1 className="ui header">Users</h1>
                <UserListContainer />
                <h1 className="ui header">Selection History</h1>
                <SelectionHistoryContainer />
            </div>
            <div className="column">
                <h1 className="ui header">Selected User</h1>
                <SelectedUserContainer />
                <h1 className="ui header">User Image</h1>
                <SelectedUserImageContainer />
            </div>
        </div>
    </div>
);

export default App;
