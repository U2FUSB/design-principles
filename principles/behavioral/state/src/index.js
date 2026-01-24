import "./style.css";

// Vending machine
// States:
// WaitingForNumber > CheckingNumber
// CheckingNumber > AskingForMoney /> Canceling
// AskingForMoney > GivingProduct /> Canceling
// GivingProduct > WaitingForNumber
// Canceling > WaitingForNumber

const vendingMachine = (function () {
    let chosenNumber = null;
    let money = null;
    const items = {
        1: ["Snickers", 3.2],
        3: ["Milkshake", 6.4],
        8: ["Rubber Gloves", 20],
    };
    return {
        currentState: waitingForNumber(),
        getChosenItem: () => items[chosenNumber],
        enterItemNumber: (itemNumber) => {
            chosenNumber = itemNumber;
        },
        getEnteredMoney: () => money,
        enterMoney: (enteredMoney) => {
            money = enteredMoney;
        },
        run: function () {
            this.currentState.process(this);
        },
    };
})();

function state(name) {
    return {
        processingTime: 1000,
        nextState: null,
        stoppingState: null,
        nextStateDescider: null,
        getName: () => name,
        process: function (context) {
            console.log("");
            console.log(`Running ${this.getName()}`);
            console.log("Processing...");
            setTimeout(() => {
                console.log("Processing completed");
                if (this.nextStateDescider) {
                    this.nextState = this.nextStateDescider(context);
                }
                context.currentState = this.nextState();
                if (!context.currentState.stoppingState) {
                    context.run();
                }
            }, this.processingTime);
        },
    };
}

function waitingForNumber() {
    return {
        ...state("waitingForNumber"),
        processingTime: 0,
        nextState: checkingNumber,
        stoppingState: true,
    };
}
function checkingNumber() {
    return {
        ...state("checkingNumber"),
        processingTime: 500,
        nextStateDescider: (context) =>
            context.getChosenItem() ? askingForMoney : canceling,
        nextState: null,
    };
}
function askingForMoney() {
    return {
        ...state("askingForMoney"),
        processingTime: 500,
        nextStateDescider: (context) =>
            context.getEnteredMoney() >= context.getChosenItem()[1]
                ? givingProduct
                : canceling,
        nextState: null,
    };
}
function givingProduct() {
    return {
        ...state("givingProduct"),
        processingTime: 2000,
        nextState: waitingForNumber,
    };
}
function canceling() {
    return {
        ...state("canceling"),
        processingTime: 1000,
        nextState: waitingForNumber,
    };
}

vendingMachine.enterItemNumber(1);
vendingMachine.enterMoney(3.2);
vendingMachine.run();
