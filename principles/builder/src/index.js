import "./style.css";
// Let the user make cakes
// We offer chocolate and raddish base cakes
// Cakes can have a topping of either strawberrys or chocolate chips, but not both
// Cakes must have a base and a topping
// Raddish base cakes cannot have a strawberry topping, because this is too expensive

function makeCake() {
    let base;
    let topping;
    const cake = {
        getCake: () => {
            console.log(`You have a ${base} cake with a ${topping} topping.`);
        },
    };
    return {
        setBase: function (chosenBase) {
            if (!["chocolate", "raddish"].includes(chosenBase)) {
                console.log("Only chocolate and raddish bases available");
                return this;
            }
            base = chosenBase;
            return this;
        },
        setTopping: function (chosenTopping) {
            if (!["strawberrys", "chocolate chips"].includes(chosenTopping)) {
                console.log(
                    "Only strawberrys and chocolate chips as toppings available"
                );
                return this;
            }
            topping = chosenTopping;
            return this;
        },
        make: function () {
            if (base === "raddish" && topping === "strawberrys") {
                console.log("Raddish cakes cannot have a strawberry topping");
                return this;
            }
            if (!base) {
                console.log("Please choose your base");
                return this;
            }
            if (!topping) {
                console.log("Please choose your topping");
                return this;
            }
            return cake;
        },
    };
}

const myCake = makeCake()
    .setBase("raddish")
    .setTopping("chocolate chips")
    .make();

myCake.getCake();
