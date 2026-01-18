import "./style.css";

const getMoneyValue = (() => {
    return {
        calculate: async (interest, interestRate, years) =>
            new Promise((resolve) => {
                setTimeout(() => {
                    let newCapital = 0;
                    for (years; years > 0; years--) {
                        newCapital =
                            newCapital +
                            interest * Math.pow(1 + interestRate, years);
                    }
                    resolve(Math.floor(newCapital));
                }, 1000);
            }),
    };
})();

const getMoneyValueProxy = (() => {
    const cache = {};
    return {
        calculate: (interest, interestRate, years) => {
            if (!cache[`${interest}-${interestRate}-${years}`]) {
                cache[`${interest}-${interestRate}-${years}`] =
                    getMoneyValue.calculate(interest, interestRate, years);
            }
            return cache[`${interest}-${interestRate}-${years}`];
        },
        getCache: () => {
            return cache;
        },
    };
})();

// console.log(await getMoneyValue.calculate(2000, 0.07, 30));
// console.log(await getMoneyValue.calculate(1000, 0.07, 10));
// console.log(await getMoneyValue.calculate(1000, 0.07, 10));
// console.log(await getMoneyValue.calculate(3000, 0.07, 10));
// console.log(await getMoneyValue.calculate(2000, 0.07, 30));
// console.log(await getMoneyValue.calculate(2000, 0.07, 30));
// console.log(await getMoneyValue.calculate(3230, 0.07, 25));
// console.log(await getMoneyValue.calculate(9000, 0.07, 20));
// console.log(await getMoneyValue.calculate(9000, 0.07, 20));
// console.log(await getMoneyValue.calculate(9000, 0.07, 20));
// console.log(await getMoneyValue.calculate(1000, 0.07, 10));
// console.log(await getMoneyValue.calculate(1000, 0.07, 10));
// console.log(await getMoneyValue.calculate(9000, 0.07, 20));

console.log(await getMoneyValueProxy.calculate(2000, 0.07, 30));
console.log(await getMoneyValueProxy.calculate(2000, 0.07, 10));
console.log(await getMoneyValueProxy.calculate(1000, 0.07, 10));
console.log(await getMoneyValueProxy.calculate(3000, 0.07, 10));
console.log(await getMoneyValueProxy.calculate(2000, 0.07, 30));
console.log(await getMoneyValueProxy.calculate(2000, 0.07, 30));
console.log(await getMoneyValueProxy.calculate(3230, 0.07, 25));
console.log(await getMoneyValueProxy.calculate(9000, 0.07, 20));
console.log(await getMoneyValueProxy.calculate(9000, 0.07, 20));
console.log(await getMoneyValueProxy.calculate(9000, 0.07, 20));
console.log(await getMoneyValueProxy.calculate(1000, 0.07, 10));
console.log(await getMoneyValueProxy.calculate(1000, 0.07, 10));
console.log(await getMoneyValueProxy.calculate(9000, 0.07, 20));

console.table(getMoneyValueProxy.getCache());
