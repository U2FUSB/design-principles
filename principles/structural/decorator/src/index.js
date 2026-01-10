import "./style.css";

// An API should extended with some weird base64 manipulation, but it cannot be changed.

function imutableApiCall() {
    console.log("I cannot be changed directly");
}
const returnAString = (fn) => () => {
    fn();
    return "QSBTdHJpbmdNdz09";
};
const translateToB64 = (fn) => () => {
    return btoa(fn());
};
const translateFromB64 = (fn) => () => {
    return atob(fn());
};
const add3 = (fn) => () => {
    return fn() + btoa(3);
};

let apiCallDecorated = returnAString(imutableApiCall);
apiCallDecorated = translateFromB64(apiCallDecorated);
apiCallDecorated = add3(apiCallDecorated);
apiCallDecorated = translateToB64(apiCallDecorated);
console.log(apiCallDecorated());
