import "./style.css";

// a proxy object is needed sometimes, but as soon one is created during this applications runtime, the same must always be used
// in code it should be possible to access virtual instances of this proxy, which point always just to the same (or is the same)
// the proxy object should only be created if needed at least once

const Proxy = (function () {
    let proxy;
    function create() {
        proxy = {
            name: "The Proxy",
            purpose: "proxying",
            attitude: "motivated",
        };
    }
    function get() {
        if (!proxy) {
            create();
        }
        return proxy;
    }
    return { get };
})();

const proxy1 = Proxy.get();
const proxy2 = Proxy.get();

console.log(proxy1 === proxy2);
console.table(proxy1);
console.table(proxy2);
