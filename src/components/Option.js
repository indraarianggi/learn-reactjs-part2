import React from 'react';

// Stateless functional component
const Option = (props) => {
    return (
        <div className="option">
            <p className="option__text">{ props.count }. { props.optionTxt }</p>
            
            <button 
                className="button button--link"
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
