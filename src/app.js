class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision App';
        const subtitle = 'Put your life in the hands of computer';
        const options = ['Thing one', 'Thing two', 'Thing three', 'Thing four', 'Thing five'];

        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        );
    }
}

class Action extends React.Component {
    handlePick() {
        alert('handlePick')
    }

    render() {
        return (
            <div>
                <button onClick={this.handlePick}>What should I do ?</button>
            </div>
        );
    }
}

class Options extends React.Component {
    handleRemoveAll() {
        alert('handleRemoveAll');
    }

    render() {
        return (
            <div>
                <button onClick={this.handleRemoveAll}>Remove All</button>

                <p>There are {this.props.options.length} options for you to choose:</p>
                {
                    this.props.options.map((opt) => <Option key={opt} optionTxt={opt} />)
                }
            </div>
        );
    }
}

class Option extends React.Component {
    render() {
        return (
            <div>
               {
                   this.props.optionTxt
               }
            </div>
        );
    }
}

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value;
        if(option.trim()) {
            alert(option);
            e.target.elements.option.value = '';
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" placeholder="type new option here"></input>
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
