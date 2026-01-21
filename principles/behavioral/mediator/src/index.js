import "./style.css";

function plane(nameTag) {
    return {
        nameTag,
        send: function (message, receiver) {
            this.registeredTower.send(message, this, receiver);
        },
        receive: function (message, sender) {
            if (sender === this.registeredTower) {
                console.log(
                    `${this.nameTag} receives broadcast from control Tower: ${message}`,
                );
            } else {
                console.log(
                    `${this.nameTag} receives from ${sender.nameTag}: ${message}`,
                );
            }
        },
    };
}

function controlTower() {
    const planes = {};
    return {
        register: function (plane) {
            planes[plane.nameTag] = plane;
            plane.registeredTower = this;
        },
        send: function (message, sender, receiver) {
            if (receiver) {
                receiver.receive(message, sender);
            } else {
                for (const nameTag in planes) {
                    if (planes[nameTag] !== sender) {
                        planes[nameTag].receive(message, sender);
                    }
                }
            }
        },
    };
}

const firstControlTower = controlTower();

const plane1 = plane("plane1");
const plane2 = plane("plane2");
const plane3 = plane("plane3");
const plane4 = plane("plane4");

firstControlTower.register(plane1);
firstControlTower.register(plane2);
firstControlTower.register(plane3);
firstControlTower.register(plane4);

plane1.send("Landing on Gate 0");
plane2.send("Stop. Gate 0 occupied", plane1);
plane3.send("Starting from Gate 4");
plane4.send("Gate 4 is free", plane1);

firstControlTower.send("Everything is buring! Noooooo", firstControlTower);
