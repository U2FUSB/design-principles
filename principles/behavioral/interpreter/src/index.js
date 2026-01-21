import "./style.css";

// Parser functions that create expression objects
const number = (value) => ({
    type: "number",
    interpret: (context) => value,
});

const variable = (name) => ({
    type: "variable",
    interpret: (context) => {
        if (context[name] === undefined) {
            throw new Error(`Variable ${name} is not defined in context`);
        }
        return context[name];
    },
});

const add = (left, right) => ({
    type: "add",
    interpret: (context) => left.interpret(context) + right.interpret(context),
});

const sub = (left, right) => ({
    type: "sub",
    interpret: (context) => left.interpret(context) - right.interpret(context),
});

const multiply = (left, right) => ({
    type: "multiply",
    interpret: (context) => left.interpret(context) * right.interpret(context),
});

const divide = (left, right) => ({
    type: "divide",
    interpret: (context) => left.interpret(context) / right.interpret(context),
});

// Build the same expression: (a + b) * c
const buildExpression = () => {
    return sub(
        divide(
            multiply(add(variable("a"), variable("b")), variable("c")),
            variable("c"),
        ),
        number(1),
    );
};

// Use the interpreter
const expr = buildExpression();
const ctx = { a: 5, b: 7, c: 2 };
const res = expr.interpret(ctx);
console.log(`Result: ${res}`);
