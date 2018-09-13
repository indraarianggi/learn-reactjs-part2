
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


const user = {
    name    : 'Indra Arianggi',
    age     : 21,
    location: 'Depok, Indonesia'
};

function getLocation(location) {
    if(location) {
        return <p>Location: { location }</p>;
    }
}

const templateTwo = (
    <div>
        <h1>{ user.name ? user.name : 'Anonymous' }</h1>
        { (user.age && user.age >= 18) && <p>Age: {user.age} yo</p> }
        { getLocation(user.location) }
    </div>
);

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
