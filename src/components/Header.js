import React from 'react';

// Stateless functional component
const Header = (props) => {
    return (
        <div className="header">
            <h1 className="header__title">{props.title}</h1>
            {props.subtitle && <h2 className="header__subtitle">{props.subtitle}</h2>}
        </div>
    );
}

// Default props for Header component
Header.defaultProps = {
    title: 'Indecision App'
}

export default Header;
