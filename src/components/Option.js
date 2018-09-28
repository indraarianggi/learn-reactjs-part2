import React from 'react';

// Stateless functional component
const Option = (props) => {
    return (
        <div>
            { props.optionTxt }
            <button 
                onClick={(e) => {
                    props.handleDeleteOneOption(props.optionTxt)
                }}
            >
                remove
            </button>
        </div>
    );
}

export default Option;
