
This is a simple implementation of a binary heap data structure in JavaScript.

MinHeap always has the minimum value at the root; MaxHeap always has the maximum at the root.

Usage:

```js
const heaps = require('jsheap'),
    MinHeap = heaps.MinHeap,
    MaxHeap = heaps.MaxHeap;

var heap = new MinHeap();
heap.push(8);
heap.push(11);
heap.push(1);
heap.push(4);
heap.size(); // 4
heap.peek(); // 1
heap.pop();  // 1
heap.pop();  // 4
heap.peek(); // 8
heap.pop();  // 8
```

Print the running median of some integers using two heaps:

```js
const heaps = require('jsheap'),
    leftHeap = new heaps.MaxHeap(),
    rightHeap = new heaps.MinHeap();

const numbers = [1,2,3,4,5,6,7,8,9,10];

for (var i = 0; i < numbers.length; i++) {
    rightHeap.push(numbers[i]);
    if (i > 0) {
        leftHeap.push(rightHeap.pop());
        if (leftHeap.size() > rightHeap.size()) {
            rightHeap.push(leftHeap.pop());
        }
    }

    if (leftHeap.size() < rightHeap.size()) {
        console.log(rightHeap.peek());
    } else {
        console.log(((rightHeap.peek() + leftHeap.peek()) / 2));
    }
}
```
