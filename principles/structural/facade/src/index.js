import "./style.css";

function complex() {
    console.log("doing complex things...");
    return true;
}
function veryComplex(param) {
    console.log(`You entered the parameter ${param}!`);
    console.log("I will do complex stuff with it!!!");
    return true;
}

function uselessButWeNeedItForCompatibility() {
    return false;
}

function complexComponentInterface(param) {
    const adaptedParam = param + " is some kind of Bob";
    return {
        handleComplexThings: () => {
            if (!complex()) {
                return "Complex failed!";
            }
            if (!veryComplex(adaptedParam)) {
                return "veryComplex failed!!!";
            }
            return "the complex things did not fail!";
        },
        handleUselessThings: () => {
            if (uselessButWeNeedItForCompatibility()) {
                return "the useless thing did not fail!?!";
            } else {
                return "Luckily, the useless thing failed";
            }
        },
    };
}

const complexHandlerStuff = complexComponentInterface("stuff");
console.log(complexHandlerStuff.handleComplexThings());
console.log(complexHandlerStuff.handleUselessThings());
