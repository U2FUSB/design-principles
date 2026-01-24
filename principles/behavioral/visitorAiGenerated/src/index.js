import "./style.css";

// added this, since I was to lazy to implement it like this, but liked this version.

const ChocolateCake = () => ({
    type: "Chocolate Cake",
    accept(visitor) {
        visitor.visitChocolate(this);
    },
});

const GlazedDonut = () => ({
    type: "Glazed Donut",
    accept(visitor) {
        visitor.visitDonut(this);
    },
});

const PriceVisitor = {
    visitChocolate(cake) {
        this.total = 15;
        console.log(`${cake.type} costs $${this.total}`);
    },
    visitDonut(donut) {
        this.total = 2;
        console.log(`${donut.type} costs $${this.total}`);
    },
};

const items = [ChocolateCake(), GlazedDonut()];
items.forEach((item) => item.accept(PriceVisitor));
