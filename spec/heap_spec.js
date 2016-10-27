
const heaps = require('..'),
    MinHeap = heaps.MinHeap,
    MaxHeap = heaps.MaxHeap;

const values = [38,8,78,77,80,1,71,51,87,71,20,77,80,39,34,56,4,40,1,46,83,78,75,52,90,31,21,20,94,96,85];

describe("A MinHeap", () => {
    it("maintains heap sort on push", () => {
        const heap = new MinHeap();
        for (var i = 0; i < values.length; i++) {
            heap.push(values[i]);
        }

        const list = heap.raw();
        const expected = [0,1,1,8,4,38,21,20,51,20,46,71,77,31,34,39,77,56,87,40,80,83,78,75,78,90,80,52,71,94,96,85];
        expect(list.length).toBe(expected.length);
        expect(list).toEqual(expected);
    });

    it("pops in ascending order", () => {
        const heap = new MinHeap();
        for (var i = 0; i < values.length; i++) {
            heap.push(values[i]);
        }

        var min = -1;
        for (var i = 0; i < values.length; i++) {
            var value = heap.pop();
            expect(value).not.toBeLessThan(min);
            min = Math.max(min, value);
        }
        expect(heap.raw().length).toBe(1);
    });

    it("reports the correct size", () => {
        const heap = new MinHeap();
        for (var i = 0; i < values.length; i++) {
            expect(heap.size()).toBe(i);
            heap.push(values[i]);
        }
        for (var i = 0; i < values.length; i++) {
            expect(heap.size()).toBe(values.length - i);
            heap.pop();
        }
        expect(heap.size()).toBe(0);
    });

    it("allows peeking", () => {
        const heap = new MinHeap();
        expect(heap.peek()).not.toBeDefined();
        var min = Number.MAX_SAFE_INTEGER;
        for (var i = 0; i < values.length; i++) {
            heap.push(values[i]);
            min = Math.min(min, values[i]);
            expect(heap.peek()).toBe(min);
        }
    });
});

describe("A MaxHeap", () => {
    it("maintains heap sort on push", () => {
        const heap = new MaxHeap();
        for (var i = 0; i < values.length; i++) {
            heap.push(values[i]);
        }

        const list = heap.raw();
        const expected = [0,96,83,94,78,80,80,90,56,51,77,78,77,71,39,87,8,4,40,1,46,71,20,75,1,52,31,21,20,38,34,85];
        expect(list.length).toBe(expected.length);
        expect(list).toEqual(expected);
    });

    it("pops in descending order", () => {
        const heap = new MaxHeap();
        for (var i = 0; i < values.length; i++) {
            heap.push(values[i]);
        }

        var max = Number.MAX_SAFE_INTEGER;
        for (var i = 0; i < values.length; i++) {
            var value = heap.pop();
            expect(value).not.toBeGreaterThan(max);
            max = Math.min(max, value);
        }
        expect(heap.raw().length).toBe(1);
    });

    it("reports the correct size", () => {
        const heap = new MaxHeap();
        for (var i = 0; i < values.length; i++) {
            expect(heap.size()).toBe(i);
            heap.push(values[i]);
        }
        for (var i = 0; i < values.length; i++) {
            expect(heap.size()).toBe(values.length - i);
            heap.pop();
        }
        expect(heap.size()).toBe(0);
    });

    it("allows peeking", () => {
        const heap = new MaxHeap();
        expect(heap.peek()).not.toBeDefined();
        var max = -1;
        for (var i = 0; i < values.length; i++) {
            heap.push(values[i]);
            max = Math.max(max, values[i]);
            expect(heap.peek()).toBe(max);
        }
    });
});

