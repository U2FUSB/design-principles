import "./style.css";

// Abstract Factory usecase:
// Ability to create users
// Users can be of 3 groups: Free Tier, Pro Tier, Max Tier.
// Tiers might change over time, or other tiers might get added.
// However, you must be able to create Users using always the same function "createUser". This function should only care for generic user creation and not care for tiers.
// There is also a "createDifferentUser" function, which does the same as "createuser", but differently.

// Free Tier Users always need some ads added to anything they say
// Pro Tier Users can say "I am something better"
// Max Tier Users get infinate coins

const freeTierSayName = (name) => () => {
    console.log(`My name is ${name}. Here are some ads!!!`);
};
const freeTierTellCoins = (coins) => () => {
    console.log(`I have ${coins} coins available.  Here are some ads!!!`);
};
const proTierSayName = (name) => () => {
    console.log(`My name is ${name}. I am something better`);
};
const proTierTellCoins = (coins) => () => {
    console.log(`I have ${coins} coins available. I am something better`);
};
const maxTierSayName = (name) => () => {
    console.log(`My name is ${name}`);
};
const maxTierTellCoins = (coins) => () => {
    console.log(`I have ${coins} coins available`);
};

function createFreeTierUser(name) {
    let coins = 0;
    return {
        sayName: freeTierSayName(name),
        tellCoins: freeTierTellCoins(coins),
    };
}
function createProTierUser(name) {
    let coins = 100;
    return {
        sayName: proTierSayName(name),
        tellCoins: proTierTellCoins(coins),
    };
}
function createMaxTierUser(name) {
    let coins = "infinate";
    return {
        sayName: maxTierSayName(name),
        tellCoins: maxTierTellCoins(coins),
    };
}
const createUser = (user) => ({
    sayName: user.sayName,
    tellCoins: user.tellCoins,
    sayHi: function () {
        console.log("Hi!");
    },
});

const createDifferentUser = (user) => ({
    sayName: user.sayName,
    tellCoins: user.tellCoins,
    sayHi: function () {
        console.log("Hi! Im different");
    },
});

const bob = createUser(createProTierUser("Bob"));
bob.sayName();
bob.tellCoins();
bob.sayHi();

const unbob = createDifferentUser(createFreeTierUser("Unbob"));
unbob.sayName();
unbob.tellCoins();
unbob.sayHi();
