import React from 'react';
import Option from './Option';

// Stateless functional component
const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>

            {props.options.length === 0 && <p>Please add an option to get started!</p>}

            <p>There are {props.options.length} options for you to choose:</p>
            {
                props.options.map((opt) => (
                    <Option 
                        key={opt} 
                        optionTxt={opt} 
                        handleDeleteOneOption={props.handleDeleteOneOption}
                    />
                ))
            }
        </div>
    );
}

export default Options;
