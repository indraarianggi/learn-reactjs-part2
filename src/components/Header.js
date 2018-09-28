import React from 'react';

// Stateless functional component
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );
}

// Default props for Header component
Header.defaultProps = {
    title: 'Indecision App'
}

export default Header;
