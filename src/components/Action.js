import React from 'react';

// Stateless functional component
const Action = (props) => {
    return (
        <div>
            <button
                className="big-button"
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do ?
            </button>
        </div>
    );
}

export default Action;
