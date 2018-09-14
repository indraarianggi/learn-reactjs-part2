let count = 0;

const addOne = () => {
    count++;
    renderCount();
};

const minusOne = () => {
    count--;
    renderCount();
}

const btnReset = () => {
    count = 0;
    renderCount();
}

const appRoot = document.getElementById('app');

const renderCount = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={btnReset}>reset</button>
        </div>
    );

    ReactDOM.render(templateTwo, appRoot);
}

renderCount();
