import React from 'react';
import PropTypes from 'prop-types';
import UserWidget from './UserComponent';

const UserListComponent = (
    { users, selectable, selected, loading, onUserClick, columnCount, keyProperty }
) => {
    let userWidgets = [(<div key="0">None</div>)];

    if (users.length > 0) {
        userWidgets = users.map((item) => {
            const isSelected = (selected === item);
            const isSelectable = (selectable && !isSelected);
            return (
                <UserWidget
                    user={item}
                    key={item[keyProperty]}
                    selectable={isSelectable}
                    onClick={onUserClick}
                    selected={isSelected}
                />
            );
        });
    }

    if (loading) {
        return (
            <div className="ui active inverted dimmer">
                <div className="ui text loader">Loading...</div>
            </div>
        );
    }

    return (
        <div className={`ui ${columnCount} cards`}>
            {userWidgets}
        </div>
    );
}

UserListComponent.propTypes = {
    users: PropTypes.arrayOf(PropTypes.object).isRequired,
    columnCount: PropTypes.string,
    loading: PropTypes.bool,
    selectable: PropTypes.bool,
    onUserClick: PropTypes.func,
    selected: PropTypes.shape({
        id: PropTypes.number,
    }),
    keyProperty: PropTypes.string,
};

UserListComponent.defaultProps = {
    users: [],
    columnCount: 'two',
    loading: false,
    selectable: false,
    onUserClick: () => {},
    selected: null,
    keyProperty: 'id',
};


export default UserListComponent;
