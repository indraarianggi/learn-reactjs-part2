import React from 'react';

// import another components
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';

export default class IndecisionApp extends React.Component {

    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOneOption = this.handleDeleteOneOption.bind(this);

        this.state = {
            options: []
        }
    }

    // LIFECYCLE METHODS
    componentDidMount() {
        try {
            // load data when page mount/loaded
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options: options }));
            }
        } catch (e) {
            // Do nothing at all
        }
        
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            // saving data
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }
    componentWillUnmount() {
        console.log('IndecisionApp component WILL UNMOUNT.');
    }

    // function for delete all options
    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOneOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option )
        }))
    }

    // function for add new option
    handleAddOption(opt) {
        if (!opt.trim()) {
            return 'Enter valid value to add new option.';
        } else if (this.state.options.indexOf(opt) > -1) {
            return 'This option already exist.';
        }

        this.setState((prevState) => ({ options: prevState.options.concat(opt) }));
    }

    // function for randomly pick one option
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }

    render() {
        const subtitle = 'Put your life in the hands of computer';

        return (
            <div>
                <Header subtitle={subtitle} />
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOneOption={this.handleDeleteOneOption}
                />
                <AddOption
                    handleAddOption={this.handleAddOption}
                />
            </div>
        );
    }
}