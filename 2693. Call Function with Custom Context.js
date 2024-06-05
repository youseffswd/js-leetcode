


Function.prototype.callPolyfill = function (context, ...args) {
    return this.call(context,...args)
};

function increment() {
    this.count++;
    return this.count;
}
console.log(increment.callPolyfill({ count: 1 }));
