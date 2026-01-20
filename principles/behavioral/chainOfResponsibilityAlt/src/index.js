import "./style.css";

function createHandler(requestHandler) {
    let savedNextRequestHandler = null;
    return {
        handle: function (request) {
            const result = requestHandler(request);
            if (result) return result;
            if (this.savedNextRequestHandler)
                return this.savedNextRequestHandler.handle(request);
            return null;
        },
        nextHandler: function (nextRequestHandler) {
            this.savedNextRequestHandler = nextRequestHandler;
            return nextRequestHandler;
        },
    };
}

const newCashValidator = createHandler((request) => {
    if (!(request.amount && request.type === "cash")) {
        console.log("Isn't Cash");
        return { valid: false };
    }
    console.log("Is Cash");
    return null;
});
const newLegitValidator = createHandler((request) => {
    if (!(request.amount && request.legit === "legit")) {
        console.log("Isn't Legit");
        return { valid: false };
    }
    console.log("Is Legit");
    return null;
});

newCashValidator.nextHandler(newLegitValidator);
newCashValidator.handle({ amount: 100, type: "cash", legit: "legit" });
