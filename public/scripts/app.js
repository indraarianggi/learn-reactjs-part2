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

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
