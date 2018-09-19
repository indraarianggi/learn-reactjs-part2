class VisibilityToggle extends React.Component {

    constructor(props) {
        super(props);
        this.handleToggle = this.handleToggle.bind(this);

        // Set up default state value
        this.state = {
            visibility: false
        }
    }

    handleToggle() {
        // manipulate state value
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });
    }

    render() {
        return (
            <div>
             <h1>Visibility Toggle</h1>

             <button onClick={this.handleToggle}>{ this.state.visibility ? 'Hide Details' : 'Show Details' }</button>

             { this.state.visibility && <p>Hey. These are some details you can now see!</p>}
         </div>
        );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));




// let visibility = false;

// const onToggle = () => {
//     visibility = !visibility;
//     render();
// }

// const appRoot = document.getElementById('app');

// const render = () => {
//     const template = (
//         <div>
//             <h1>Challenge - Visibility Toggle</h1>

//             <button onClick={onToggle}>{ visibility ? 'Hide Details' : 'Show Details' }</button>

//             { visibility && <p>Hey. These are some details you can now see!</p>}
//         </div>
//     );

//     ReactDOM.render(template, appRoot);
// }

// render();
