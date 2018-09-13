'use strict';

// JSX - JavaScript XML
var obj = {
    title: 'Learn React from Udemy Course',
    subtitle: 'By Andrew',
    options: ['One', 'Two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        obj.title
    ),
    obj.subtitle && React.createElement(
        'p',
        null,
        obj.subtitle
    ),
    obj.options.length > 1 ? 'Here are your options:' : 'No options!',
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
);

var userName = 'Indra Arianggi';
var userAge = 21;
var userCity = 'Depok';
var UserState = 'Indonesia';

var user = {
    name: 'Candra Kusuma',
    age: 20,
    location: 'Purworejo, Indonesia'
};

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            location
        );
    }
}

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name : 'Anonymous'
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age,
        ' yo'
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
