import { generateName } from "./nameGenerator";
import "./style.css";

// You build a game and need different characters.
// Characters are defined by a sprite, name, archetype, attack, defence, health
// Characters can be varied combinations of these components, though only the name is truly unique and created by some name generator api. All other components follow common patterns and repeate all the time
// There can be thousands of different characters on the field, which causes a high memory usage
// Your aim is to reduce memory consumption
function knight() {
    return {
        kind: "Knight",
        attack: [10, 16],
        defence: [12, 21],
        health: [80, 120],
    };
}
function archer() {
    return {
        kind: "Archer",
        attack: [13, 16],
        defence: [9, 16],
        health: [60, 100],
    };
}
function wizard() {
    return {
        kind: "Wizard",
        attack: [17, 20],
        defence: [7, 12],
        health: [40, 80],
    };
}
function character({ stats, name }) {
    return { stats, name };
}
function flyweightCharacter({ sprite, archetype, attack, defence, health }) {
    return { sprite, archetype, attack, defence, health };
}
const flyweightCharacterFactory = (() => {
    const flyweightCharacters = {};
    return {
        get: ({ sprite, archetype, attack, defence, health }) => {
            if (!flyweightCharacters[archetype + attack + defence + health]) {
                flyweightCharacters[archetype + attack + defence + health] =
                    flyweightCharacter({
                        sprite,
                        archetype,
                        attack,
                        defence,
                        health,
                    });
            }
            return flyweightCharacters[archetype + attack + defence + health];
        },
        getCount: () => Object.entries(flyweightCharacters).length,
    };
})();
function characterFactory(getArchetype) {
    const characters = [];
    const archetype = getArchetype();
    function getNumberBetweenZeroAnd(number) {
        return Math.floor(Math.random() * number);
    }
    function range(start, end, step = 1) {
        const range = [];
        for (start; start <= end; start += step) {
            range.push(start);
        }
        return range;
    }
    const sprites = [
        "sprite1.png",
        "sprite2.png",
        "sprite3.png",
        "sprite4.png",
    ];
    const attackValues = range(archetype.attack[0], archetype.attack[1]);
    const defenceValues = range(archetype.defence[0], archetype.defence[1]);
    const healthValues = range(archetype.health[0], archetype.health[1], 5);

    return {
        getCharacter: () => {
            const flyweightCharacter = flyweightCharacterFactory.get({
                sprite: sprites[
                    (() => getNumberBetweenZeroAnd(sprites.length))()
                ],
                archetype: archetype.kind,
                attack: attackValues[
                    (() => getNumberBetweenZeroAnd(attackValues.length))()
                ],
                defence:
                    defenceValues[
                        (() => getNumberBetweenZeroAnd(defenceValues.length))()
                    ],
                health: healthValues[
                    (() => getNumberBetweenZeroAnd(healthValues.length))()
                ],
            });

            const newCharacter = character({
                stats: flyweightCharacter,
                name: generateName(),
            });
            characters.push(newCharacter);
            return newCharacter;
        },
        getCount: () => characters.length,
    };
}
function characterFactoryWithoutFlyweight(getArchetype) {
    const characters = [];
    const archetype = getArchetype();
    function getNumberBetweenZeroAnd(number) {
        return Math.floor(Math.random() * number);
    }
    function range(start, end, step = 1) {
        const range = [];
        for (start; start <= end; start += step) {
            range.push(start);
        }
        return range;
    }
    const sprites = [
        "sprite1.png",
        "sprite2.png",
        "sprite3.png",
        "sprite4.png",
    ];
    const attackValues = range(archetype.attack[0], archetype.attack[1]);
    const defenceValues = range(archetype.defence[0], archetype.defence[1]);
    const healthValues = range(archetype.health[0], archetype.health[1], 5);

    return {
        getCharacter: () => {
            const newCharacter = character({
                stats: {
                    sprite: sprites[
                        (() => getNumberBetweenZeroAnd(sprites.length))()
                    ],
                    archetype: archetype.kind,
                    attack: attackValues[
                        (() => getNumberBetweenZeroAnd(attackValues.length))()
                    ],
                    defence:
                        defenceValues[
                            (() =>
                                getNumberBetweenZeroAnd(defenceValues.length))()
                        ],
                    health: healthValues[
                        (() => getNumberBetweenZeroAnd(healthValues.length))()
                    ],
                },
                name: generateName(),
            });

            characters.push(newCharacter);
            return newCharacter;
        },
        getCount: () => characters.length,
    };
}
function measureRuns(factory, count, type) {
    const knightFactory = factory(knight);
    const archerFactory = factory(archer);
    const wizardFactory = factory(wizard);
    let mediumMemoryUsage = 0;

    console.time(type);
    for (let i = 1; i <= count; i++) {
        for (let index = 1; index <= 10000; index++) {
            knightFactory.getCharacter();
            archerFactory.getCharacter();
            wizardFactory.getCharacter();
        }
        mediumMemoryUsage +=
            window.performance.memory["usedJSHeapSize"] / 1000000;
    }
    console.timeEnd(type);
    console.log(`Medium Memory Usage: ${mediumMemoryUsage / count}`);
    console.log(knightFactory.getCount());
    console.log(archerFactory.getCount());
    console.log(wizardFactory.getCount());
    console.log(flyweightCharacterFactory.getCount());
}
measureRuns(characterFactory, 1000, "flyweight");
measureRuns(characterFactoryWithoutFlyweight, 1000, "no flyweight");

const knightFactory = characterFactory(knight);
const knightFactory2 = characterFactoryWithoutFlyweight(knight);
console.log(knightFactory.getCharacter().stats);
console.log(knightFactory2.getCharacter().stats);
