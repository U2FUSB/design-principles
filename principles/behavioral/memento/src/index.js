import "./style.css";

function memento(state) {
    return { getState: () => state };
}

function createUser(id, name, age, subscription) {
    return {
        id,
        name,
        age,
        subscription,
        getMemento: function () {
            return memento(JSON.stringify(this));
        },
        restoreState: function (receivedMemento) {
            const user = JSON.parse(receivedMemento.getState());
            this.name = user.name;
            this.age = user.age;
            this.subscription = user.subscription;
        },
    };
}
function registratorCreator() {
    const users = {};
    return {
        saveState: (id, user) => {
            users[id] = user;
        },
        getState: (id) => users[id],
    };
}
const registrator = registratorCreator();

const bob = createUser(1, "Bob", 19, "Pro");
const irine = createUser(2, "Irine", 49, "Free");
const james = createUser(3, "James", 30, "Ultra Max");

registrator.saveState(bob.id, bob.getMemento());

bob.name = "theMaster";
bob.restoreState(registrator.getState(bob.id));
console.log(bob.name);