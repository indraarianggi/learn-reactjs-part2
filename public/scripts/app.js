'use strict';

// JSX - JavaScript XML
var obj = {
    title: 'Learn React from Udemy Course',
    subtitle: 'By Andrew',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();

    var option = e.target.elements.option.value;
    if (option) {
        obj.options.push(option);
        e.target.elements.option.value = '';

        // call render function
        renderView();
    }
};

var removeAll = function removeAll() {
    obj.options = [];
    renderView();
};

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * obj.options.length);
    var option = obj.options[randomNum];
    alert(option);
};

var appRoot = document.getElementById('app');

var renderView = function renderView() {
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
            obj.options.map(function (opt) {
                return React.createElement(
                    'li',
                    { key: opt },
                    opt
                );
            })
        ),
        React.createElement(
            'button',
            { disabled: obj.options.length == 0, onClick: onMakeDecision },
            'What should I do ?'
        ),
        React.createElement(
            'button',
            { onClick: removeAll },
            'Remove All Options'
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

// Call render function
renderView();
