
// JSX - JavaScript XML
var obj = {
    title   : 'Learn React from Udemy Course',
    subtitle: 'By Andrew',
    options : ['One', 'Two']
}

var template = (
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

var userName = 'Indra Arianggi';
var userAge = 21;
var userCity = 'Depok';
var UserState = 'Indonesia';

var user = {
    name    : 'Candra Kusuma',
    age     : 20,
    location: 'Purworejo, Indonesia'
};

function getLocation(location) {
    if(location) {
        return <p>Location: { location }</p>;
    }
}

var templateTwo = (
    <div>
        <h1>{ user.name ? user.name : 'Anonymous' }</h1>
        { (user.age && user.age >= 18) && <p>Age: {user.age} yo</p> }
        { getLocation(user.location) }
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
