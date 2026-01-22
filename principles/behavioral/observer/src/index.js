import "./style.css";

function observer() {
    let subscribers = [];
    return {
        subscribe: (callback) => {
            subscribers.push(callback);
            console.log("Someone Subscribed");
        },
        unsubscribe: (callback) => {
            subscribers = subscribers.filter((item) => item !== callback);
            console.log("Someone Unsubscribed");
        },
        fire: (event) => {
            subscribers.forEach((callback) => {
                callback(event);
            });
        },
    };
}
function eventHandler(event) {
    console.log(`fire ${event}`);
}

const myObserver = observer();
myObserver.subscribe(eventHandler);
myObserver.subscribe(eventHandler);
myObserver.subscribe(eventHandler);

myObserver.fire("Stuff");
