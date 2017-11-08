import React from 'react';
import PropTypes from 'prop-types';

const UserComponent = ({ user, selectable, selected, onClick }) => {
    let cardClasses = selectable ? 'ui link card' : 'ui card';

    if (selected) {
        cardClasses += ' raised card';
    }

    if (!user) {
        return (<div>None</div>);
    }

    return (
        <div className={cardClasses} onClick={() => onClick(user)} role="presentation">
            <div className="content">
                <div className="header">{user.username}</div>
                <div className="meta">Real name: {user.name}</div>
                <div className="meta">E-mail: {user.email}</div>
                <div className="description">{user.company.catchPhrase}</div>
                <input type="text" />
            </div>
        </div>
    );
};

UserComponent.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string,
        username: PropTypes.string,
        email: PropTypes.email,
        company: PropTypes.shape({
            catchPhrase: PropTypes.string,
        }),
    }),
    selectable: PropTypes.bool,
    selected: PropTypes.bool,
    onClick: PropTypes.func,
};

UserComponent.defaultProps = {
    user: null,
    selectable: false,
    selected: false,
    onClick: () => {},
};

export default UserComponent;
