import "./style.css";

function createFreeTierUser(name) {
    let coins = 0;
    return {
        sayName: () => {
            console.log(`My name is ${name}. Here are some ads!!!`);
        },
        tellCoins: () => {
            console.log(
                `I have ${coins} coins available.  Here are some ads!!!`
            );
        },
    };
}
function createProTierUser(name) {
    let coins = 100;
    return {
        sayName: () => {
            console.log(`My name is ${name}. I am something better`);
        },
        tellCoins: () => {
            console.log(
                `I have ${coins} coins available. I am something better`
            );
        },
    };
}
function createMaxTierUser(name) {
    let coins = "infinate";
    return {
        sayName: () => {
            console.log(`My name is ${name}`);
        },
        tellCoins: () => {
            console.log(`I have ${coins} coins available`);
        },
    };
}
function createUser(tierCreator, name) {
    const tier = tierCreator(name);
    return {
        sayName: tier.sayName,
        tellCoins: tier.tellCoins,
        sayHi: () => {
            console.log(`Hi! I'm ${name}`);
        },
    };
}

const bob = createUser(createFreeTierUser, "Bob");

bob.sayName();
bob.tellCoins();
bob.sayHi();
