//ITERATOR

var collection = (function () {
    var current = -1;
    data = [1, 2, 3, 4, 5, 6, 7, 8,9,10];
    count = data.length;

    return {

        moveNext() {
            if (current == count - 1) {
                return false;
            } else {
                current++;
                return true;
            }
        },

        getCurrent() {
            return data[current];
        },

        reset() {
            current = -1;
        }
    };

})();

while (collection.moveNext()) {
    var temp = collection.getCurrent();
    console.log(temp);
}