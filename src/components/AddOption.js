import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    }
    
    handleSubmit = (e) => {
        e.preventDefault();

        const option = e.target.elements.option.value;
        const error = this.props.handleAddOption(option);
        
        this.setState(() => ({ error }));

        if (!error) {
            e.target.elements.option.value = '';
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form className="add-option" onSubmit={this.handleSubmit}>
                    <input className="add-option__input" type="text" name="option" placeholder="type new option here"></input>
                    <button className="button">Add Option</button>
                </form>
            </div>
        );
    }
}
