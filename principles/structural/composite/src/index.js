import "./style.css";

// Create something that can create a directory structure for media files.
// Collections of media files are saved together, but can contain other collections

// collection is the actual pattern
function collection(name) {
    const children = [];
    return {
        addChild: (child) => {
            children.push(child);
        },
        removeChild: (child) => {
            const indexOfChild = children.findIndex(
                (currentChild) => currentChild === child
            );
            if (indexOfChild !== -1) {
                children.splice(indexOfChild, 1);
            }
        },
        getChild: (index) => children[index],
        hasChildren: () => children.length > 0,
        getChildren: () => children,
        getName: () => name,
        isCollection: true,
    };
}
// traverse is just a way to use this composite
function traverse(mediaElement, indentationCount = 0) {
    const indentation = () => " ".repeat(indentationCount);

    if (!mediaElement.isCollection) {
        console.log(`${indentation()}${mediaElement}`);
        return mediaElement;
    }
    console.log(`${indentation()}${mediaElement.getName()}`);
    if (!mediaElement.hasChildren()) {
        return mediaElement;
    }
    indentationCount++;
    mediaElement.getChildren().forEach((child) => {
        traverse(child, indentationCount);
    });
}

const movies = collection("movies");

const actionMovies = collection("action");
const romances = collection("romance");

const bestActionMovieEver = "bestActionMovieEver.mp4";
const bestRomanceEver = "schmaltzy romance 2.mp4";

movies.addChild(romances);
movies.addChild(actionMovies);
actionMovies.addChild(bestActionMovieEver);
romances.addChild(bestRomanceEver);

traverse(movies);
