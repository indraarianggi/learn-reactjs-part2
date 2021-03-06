class IndecisionApp extends React.Component {

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

// Stateless functional component
const Action = (props) => {
    return (
        <div>
            <button 
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do ?
            </button>
        </div>
    );
}

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

class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            error: undefined
        }
    }

    handleSubmit(e) {
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
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="option" placeholder="type new option here"></input>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

// Stateless functional component
// const User = (props) => {
//     return (
//         <div>
//             <p>Name: {props.name}</p>
//             <p>Age: {props.age}</p>
//         </div>
//     );
// }


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
