
function createHeap(upCompare, downCompare) {
    return function() {
        var list = [0];

        var childPos = function(list, pos) {
            var p1 = pos*2, p2 = p1 + 1;
            if (p2 >= list.length ||
                downCompare(list, p1, p2)) {
                return p1;
            } else {
                return p2;
            }
        };

        var swap = function(pos1, pos2) {
            var tmp = list[pos1];
            list[pos1] = list[pos2];
            list[pos2] = tmp;
        };

        this.push = function (value) {
            list.push(value);
            var p = list.length-1;
            while (true) {
                var parent = Math.floor(p/2);
                if (!parent || upCompare(list, p, parent)) break;
                swap(parent, p);
                p = parent;
            }
            return value;
        };

        this.pop = function () {
            if (list.length < 2) return;
            if (list.length == 2) return list.pop();
            var value = list[1];
            list[1] = list.pop();

            var p = 1;
            while (p * 2 <= list.length) {
                var cp = childPos(list, p);
                if (!list[cp] || downCompare(list, p, cp)) break;
                swap(cp, p);
                p = cp;
            }
            return value;
        };

        this.raw = function() {
            return list.slice();
        };

        this.size = function() {
            return list.length - 1;
        };

        this.peek = function() {
            if (list.length < 2) return;
            return list[1];
        };
    };
}

module.exports = {
    MinHeap: createHeap(
        function(list, current, parent) {
            return list[parent] < list[current];
        },

        function(list, current, child) {
            return list[child] > list[current];
        }
    ),
    MaxHeap: createHeap(
        function(list, current, parent) {
            return list[parent] > list[current];
        },

        function(list, current, child) {
            return list[child] < list[current];
        }
    )
};