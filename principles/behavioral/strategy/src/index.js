import "./style.css";

function apiCaller() {
    let strategy = null;
    return {
        setStrategy: (newStrategy) => {
            strategy = newStrategy;
        },
        getResult: (payload) => {
            if (strategy) return strategy.handlePayload(payload);
            else return "nothing...";
        },
    };
}

function apiOne() {
    return {
        handlePayload: (payload) => payload[0],
    };
}
function apiTwo() {
    return {
        handlePayload: (payload) => payload[1],
    };
}
function apiThree() {
    return {
        handlePayload: (payload) => payload[2],
    };
}

const payload = [1, 2, 3];

const myApiOne = apiOne();
const myApiTwo = apiTwo();
const myApiThree = apiThree();

const myApiCaller = apiCaller();

console.log("Result is: " + myApiCaller.getResult(payload));
myApiCaller.setStrategy(myApiOne);
console.log("Result is: " + myApiCaller.getResult(payload));
myApiCaller.setStrategy(myApiTwo);
console.log("Result is: " + myApiCaller.getResult(payload));
myApiCaller.setStrategy(myApiThree);
console.log("Result is: " + myApiCaller.getResult(payload));
