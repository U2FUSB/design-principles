import "./style.css";
function add(x, y) {
    return x + y;
}
function sub(x, y) {
    return x - y;
}
function mul(x, y) {
    return x * y;
}
function div(x, y) {
    return x / y;
}
function addition(value) {
    return command(add, sub, value);
}
function substraction(value) {
    return command(sub, add, value);
}
function multiplication(value) {
    return command(mul, div, value);
}
function division(value) {
    return command(div, mul, value);
}
function command(execute, undo, value) {
    return {
        execute,
        undo,
        value,
    };
}
function calculator() {
    let currentValue = 0;
    const commandHistory = [];
    const commandUndoHistory = [];
    return {
        calc: (command) => {
            commandHistory.push(command);
            currentValue = command.execute(currentValue, command.value);
            console.log(currentValue);
        },
        undo: () => {
            const command = commandHistory.pop();
            currentValue = command.undo(currentValue, command.value);
            commandUndoHistory.push(command);
            console.log(currentValue);
        },
        redo: function () {
            this.calc(commandUndoHistory.pop());
        },
        getCurrentValue:()=>currentValue
    };
}

const myCalculator = calculator();
myCalculator.calc(addition(20));
myCalculator.calc(addition(20));
myCalculator.calc(addition(20));
myCalculator.calc(substraction(5));
// myCalculator.calc(multiplication(2));
myCalculator.undo();
myCalculator.undo();
myCalculator.undo();
myCalculator.calc(division(2));
myCalculator.calc(division(2));
myCalculator.calc(division(2));
myCalculator.calc(addition(20));
myCalculator.redo();
myCalculator.redo();
myCalculator.undo();

console.log(`Current Value: ${myCalculator.getCurrentValue()}`);
