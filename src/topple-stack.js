var ToppleStack = function(capacity) {
    // Maximum capacity of items that the stack can hold
    this._capacity = capacity || Infinity;
    this._storage = {};

    // Count variable to keep track of the size of the stack
    this.count = 0;
}

// O (1)
// The implementaron of this method is pretty straightforward,
// we just check if the actual count is less that the capacity 
// then it is safe to add the element, otherwise we return an error message. 
// We then add the ítem, increment the count and return the count.
ToppleStack.prototype.push = function(val) {
    if (this._count < this._capacity) {
        this._storage[this._count + 1] = val;
        this._count += 1;
        return this._count;
    }
    return 'Max capacity already reached. Remove element before adding a new one.';
};

// O (1)
// we first get a reference to the element we are going to remove.
// We then proceed to remove that element, decrement de count and if
// the count is less than 0 we set it back to 0, and finally we return the value. 
ToppleStack.prototype.pop = function() {
    var value = this._storage[this._count - 1];
    this._count -= 1;
    delete this._storage[this._count];
    if (this._count < 0) {
        this._count = 0;
    }
    return value;
};

// O (n)
// The implementaron of this method is pretty straightforward,
// we just topple the stack to the element we want. It's like
// if I had a stack of pancakes with 3 chocolate chip pancake
// on the top, 3 blueberry pancake in the middle, and 3 plain
// pancakes at the bottom and I wanted... actually pancakes are
// too stable. Let's say I was having some drinks with my
// friends and we start a tower of cans and I want the can on
// the bottom, that means all the other cans are going to fall
// over, because that's how stacks of things work. I can have my
// bottoms can, but I can't have the other things. They're gone
// forever. Input the index of the item you want and you lose
// everything above it
ToppleStack.prototype.topple = function(idx) {
    var value = this._storage[idx];
    for (let i = idx; i++; i < this._count) {
        delete this._storage[i];
    }
    this._count = idx;
    if (this._count < 0) {
        this._count = 0;
    }
    return value
}

// O (1)
ToppleStack.prototype.peek = function() {
    return this._storaget[this._count - 1];
}

// O (1)
ToppleStack.prototype.size = function(val) {
    return this._count;
};