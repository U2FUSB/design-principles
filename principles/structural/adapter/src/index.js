import "./style.css";

// the animalAgeAnalyzer API takes as argument the age of an animal in days.
// this is impractical. Therefore the animalAgeAnalyzerImproved API takes an array with Years, Months and Days
// the client code should still work with the new API

function animalAgeAnalyzer(animal, ageInDays) {
    const maxDuckAge = 12 * 365;
    const maxCowAge = 20 * 365;
    const maxTurtleAge = 150 * 365;
    const currentAnimalMaxAge =
        animal === "Duck"
            ? maxDuckAge
            : animal === "Cow"
            ? maxCowAge
            : animal === "turtle"
            ? maxTurtleAge
            : null;
    return {
        analyze: function () {
            const ageRelation = ageInDays / currentAnimalMaxAge;
            if (ageRelation <= 0.25) {
                return `The ${animal} is still young`;
            } else if (ageRelation > 0.25 && ageRelation <= 0.5) {
                return `The ${animal} reaches its median age`;
            } else if (ageRelation > 0.5 && ageRelation <= 0.75) {
                return `The ${animal} is beyond its median age`;
            } else if (ageRelation > 0.75 && ageRelation <= 1) {
                return `The ${animal} is getting old`;
            } else if (ageRelation > 1) {
                return `The ${animal} is unnaturally old!`;
            }
        },
    };
}
function animalAgeAnalyzerImproved(animal, ageObject) {
    const maxDuckAge = { years: 12 };
    const maxCowAge = { years: 20 };
    const maxTurtleAge = { years: 150 };
    const currentAnimalMaxAge =
        animal === "Duck"
            ? maxDuckAge
            : animal === "Cow"
            ? maxCowAge
            : animal === "turtle"
            ? maxTurtleAge
            : null;
    function toDaysConverter({ years = 0, months = 0, days = 0 }) {
        return years * 365 + months * 12 + days;
    }
    return {
        analyze: function () {
            const ageRelation =
                toDaysConverter(ageObject) /
                toDaysConverter(currentAnimalMaxAge);
            if (ageRelation <= 0.25) {
                return `The ${animal} is still young`;
            } else if (ageRelation > 0.25 && ageRelation <= 0.5) {
                return `The ${animal} reaches its median age`;
            } else if (ageRelation > 0.5 && ageRelation <= 0.75) {
                return `The ${animal} is beyond its median age`;
            } else if (ageRelation > 0.75 && ageRelation <= 1) {
                return `The ${animal} is getting old`;
            } else if (ageRelation > 1) {
                return `The ${animal} is unnaturally old!`;
            }
        },
    };
}
function animalAgeAnalyzerImprovedAdapter(animal, ageInDays) {
    const analyzer = animalAgeAnalyzerImproved(animal, { days: ageInDays });
    return {
        analyze: () => analyzer.analyze(),
    };
}

// original
const analyzer = animalAgeAnalyzer("Duck", 6000);
console.log(analyzer.analyze());

// improved version
const analyzerI = animalAgeAnalyzerImproved("Duck", {
    years: 2,
    months: 0,
    days: 6,
});
console.log(analyzerI.analyze());

// adapter
const analyzerA = animalAgeAnalyzerImprovedAdapter("Duck", 365 * 2 + 6);
console.log(analyzerA.analyze());
