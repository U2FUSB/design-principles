import "./style.css";

function iterator(array) {
    let index = 0;
    let tempIndex = 0;
    return {
        first: function (start, step) {
            this.reset(start);
            return this.next(step);
        },
        reset: function (start = 0) {
            if (start < 0) {
                start = 0;
            }
            index = start;
        },
        next: function (step = 1) {
            tempIndex = index;
            index += step;
            return array[tempIndex];
        },
        hasNext: function (end = array.length - 1) {
            if (end >= array.length) {
                end = array.length - 1;
            }
            return tempIndex <= end;
        },
        range: function ({ start, end, step }, callback) {
            for (
                let item = this.first(start, step);
                this.hasNext(end);
                item = this.next(step)
            ) {
                callback(item);
            }
        },
        each: function (callback) {
            for (let item = this.first(); this.hasNext(); item = this.next()) {
                callback(item);
            }
        },
    };
}

const myArray = [2, "bob", "stuff", 3.3, 3 + 1];
const myArrayIterator = iterator(myArray);

myArrayIterator.each((item) => {
    console.log(item);
});
myArrayIterator.range({ start: 1, end: 10, step: 1 }, (item) => {
    console.log(item);
});
