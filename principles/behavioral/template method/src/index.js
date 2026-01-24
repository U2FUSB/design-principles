import "./style.css";

const BreadTempalte = {
    make() {
        this.prepareIngredients();
        this.prepareDough();
        this.bake();
    },
    prepareIngredients() {
        console.warn("prepareIngredients must be definded");
    },
    prepareDough() {
        console.warn("prepareDough must be definded");
    },
    bake() {
        console.warn("bake must be definded");
    },
};

function useTemplate(proto) {
    return Object.create(proto);
}

const newBread = useTemplate(BreadTempalte);
newBread.prepareIngredients = function () {
    this.measurementSystem = "metric";
    this.unit = "g";
    this.wheatAmount = 1000;
    this.water = 100;
    this.sugar = 20;
    this.salt = 18;
    this.sourDough = 10;
    this.finishedWeight =
        (this.sourDough +
            this.salt +
            this.sugar +
            this.water +
            this.wheatAmount) *
        0.75;
};

newBread.prepareDough = function () {
    console.log(`Using the ${this.measurementSystem} System for measurements`);
    console.log(
        `Your current ingredients should make up for ~${this.finishedWeight} ${this.unit} of Bread`,
    );
    console.log(``);
    console.log(
        `Mix ${this.wheatAmount} ${this.unit} Wheat with ${this.salt} ${this.unit} Salt and ${this.water} ${this.unit} Water`,
    );
    console.log(`Mix in all the rest`);
    console.log(`Put it into the fridge for 6-20 hours`);
};
newBread.bake = function () {
    console.log(``);
    console.log(`Take it out of the fride and pre-heat the oven.`);
    console.log(
        `Preheat the oven to 200°C top heat or 180°C Recirculating air (Recirculating air makes it more crispy, while top heat will keep insides soft)`,
    );
    console.log(
        `Put it into the oven for ${(this.finishedWeight / 1000) * 50} Minutes`,
    );
    console.log(
        `When finished, let it rest for ~1 hour, coverd in a wet cloth`,
    );
};

newBread.make();
