class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);

        // Set up default state value
        this.state = {
            count: props.count
        }
    }

    handleAddOne() {
        // manipulate state value
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }

    handleMinusOne() {
        // manipulate state value
        this.setState((prevState) => {
            return {
                count: prevState.count -1
            }
        });
    }

    handleReset() {
        // manipulate state value
        this.setState(() => {
            return {
                count: 0
            }
        });
    }

    render() {
        return (
            <div>
                <h1>Count: { this.state.count }</h1>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}

// Default props for Counter component
Counter.defaultProps = {
    count: 0
}

ReactDOM.render(<Counter count={7} />, document.getElementById('app'));
