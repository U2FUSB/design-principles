import "./style.css";

const darkThemeCreator = () => ({
    createButton: (className) => {
        const button = document.createElement("button");
        button.classList = className;
        button.style = "background: black";
        return button;
    },
    createInput: (className) => {
        const input = document.createElement("input");
        input.classList = className;
        input.style = "background: black";
        return input;
    },
});
const lightThemeCreator = () => ({
    createButton: (className) => {
        const button = document.createElement("button");
        button.classList = className;
        button.style = "background: white";
        return button;
    },
    createInput: (className) => {
        const input = document.createElement("input");
        input.classList = className;
        input.style = "background: white";
        return input;
    },
});
const themeCreator = (themeFactory, className) => {
    const themeElements = themeFactory();
    return {
        button: themeElements.createButton(className),
        input: themeElements.createInput(className),
    };
};

const darkThemeElements = themeCreator(darkThemeCreator, "darkTheme");
const lightThemeElements = themeCreator(lightThemeCreator, "lightTheme");

document.querySelector("body").append(darkThemeElements.button);
document.querySelector("body").append(lightThemeElements.button);
document.querySelector("body").append(lightThemeElements.input);
