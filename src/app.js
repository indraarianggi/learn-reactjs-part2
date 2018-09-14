
// JSX - JavaScript XML
const obj = {
    title   : 'Learn React from Udemy Course',
    subtitle: 'By Andrew',
    options : ['One', 'Two']
}

const template = (
    <div>
        <h1>{ obj.title }</h1>
        { obj.subtitle && <p>{ obj.subtitle }</p> }
        { (obj.options.length > 1) ? 'Here are your options:' : 'No options!' }
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);