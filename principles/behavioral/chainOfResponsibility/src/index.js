import "./style.css";

function request(amount) {
    return {
        get: function (bill) {
            const billsCount = Math.floor(amount / bill);
            const reduction = bill * billsCount;
            if (amount - bill < 0) {
                console.log("Can't choose this bill. Not enough amount left.");
                console.log(`${amount} left`);
                return this;
            }
            amount -= reduction;
            console.log(`New amount: ${amount}`);
            if (amount === 0) {
                console.log("The bills will be printed now.");
                return null;
            }
            console.log(`${billsCount} x ${bill} chosen.`);
            return this;
        },
    };
}

const newRequest = request(335);
newRequest.get(50).get(20).get(50).get(80).get(10).get(5);
