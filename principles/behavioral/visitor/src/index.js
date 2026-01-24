import "./style.css";

function Cake() {
    return {
        base: null,
        topping: null,
        accept(visitor) {
            visitor.visit(this);
        },
        setBase(base) {
            this.base = base;
        },
        setTopping(topping) {
            this.topping = topping;
        },
        makeCake() {
            if (this.base === null) {
                console.log("The base is not set yet");
                return;
            }
            if (this.topping === null) {
                console.log("The topping is not set yet");
                return;
            }
            console.log(
                `You made a cake with base of ${this.base} and topping of ${this.topping}`,
            );
            return;
        },
    };
}

const chocolateCakeVisitor = {
    visit(cake) {
        cake.setBase("Chocolate");
        cake.setTopping("Strawberrys");
    },
};
const cinnamonPistachioCakeVisitor = {
    visit(cake) {
        cake.setBase("Whole Wheat with Pistachios");
        cake.setTopping("Chocolate Chips and Cinnamon");
    },
};

const myCake = Cake();

myCake.accept(chocolateCakeVisitor);
myCake.makeCake();

myCake.accept(cinnamonPistachioCakeVisitor);
myCake.makeCake();
