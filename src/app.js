
// JSX - JavaScript XML
const obj = {
    title   : 'Learn React from Udemy Course',
    subtitle: 'By Andrew',
    options : []
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    if(option) {
        obj.options.push(option);
        e.target.elements.option.value = '';
        
        // call render function
        renderView();
    }
}

const removeAll = () => {
    obj.options = [];
    renderView();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * obj.options.length);
    const option = obj.options[randomNum];
    alert(option);
}

const appRoot = document.getElementById('app');

const renderView = () => {
    const template = (
        <div>
            <h1>{ obj.title }</h1>
            { obj.subtitle && <p>{ obj.subtitle }</p> }
            { (obj.options.length > 1) ? 'Here are your options:' : 'No options!' }

            <ol>
                {
                    obj.options.map((opt) => {
                        return <li key={opt}>{opt}</li>
                    })
                }
            </ol>

            <button disabled={obj.options.length == 0} onClick={onMakeDecision}>What should I do ?</button>

            <button onClick={removeAll}>Remove All Options</button>
    
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

// Call render function
renderView();
