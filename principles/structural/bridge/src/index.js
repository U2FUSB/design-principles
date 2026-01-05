import "./style.css";

// 3 different TVs (normal, beamer, streaming) and 3 different remotes (buttons, touch, gestures). They must work together, independent wich usees which.

function normalTv() {
    return {
        on: () => {
            console.log("TV turned on");
        },
        off() {
            console.log("TV turned off");
        },
        back: () => {
            console.log("Previous channel");
        },
        next: () => {
            console.log("Next channel");
        },
    };
}
function beamer() {
    return {
        on: () => {
            console.log("Beamer on");
        },
        off() {
            console.log("Beamer off");
        },
        back: () => {
            console.log("Previous Slide");
        },
        next: () => {
            console.log("Next Slide");
        },
    };
}
function streaming() {
    return {
        on: () => {
            console.log("connected");
        },
        off() {
            console.log("disconnected");
        },
        back: () => {
            console.log("Back");
        },
        next: () => {
            console.log("Next");
        },
    };
}

function touch(tv) {
    let onState = "off";
    return {
        holdLong: () => {
            if (onState === "off") {
                tv.on();
                onState = "on";
            } else {
                tv.off();
                onState = "off";
            }
        },
        touchLeftSide: () => {
            tv.back();
        },
        touchRightSide: () => {
            tv.next();
        },
    };
}
function normalRemote(tv) {
    return {
        powerOn: () => {
            tv.on();
        },
        powerOff: () => {
            tv.off();
        },
        left: () => {
            tv.back();
        },
        right: () => {
            tv.next();
        },
    };
}
function gestures(tv) {
    return {
        swipeUp: () => {
            tv.on();
        },
        swipeDown: () => {
            tv.off();
        },
        swipeLeft: () => {
            tv.back();
        },
        swipeRight: () => {
            tv.next();
        },
    };
}

const tv1 = beamer();
const tv2 = normalTv();
const tv3 = streaming();

const remote1 = normalRemote(tv1);
const remote2 = touch(tv2);
const remote3 = gestures(tv3);

remote1.powerOn();

remote2.holdLong();
remote2.holdLong();
remote2.holdLong();

remote3.swipeDown();
remote3.swipeLeft();
