//// [tests/cases/conformance/es6/destructuring/iterableArrayPattern13.ts] ////

//// [iterableArrayPattern13.ts]
class Bar { x }
class Foo extends Bar { y }
class FooIterator {
    next() {
        return {
            value: new Foo,
            done: false
        };
    }

    [Symbol.iterator]() {
        return this;
    }
}

function fun([a, ...b]) { }
fun(new FooIterator);

//// [iterableArrayPattern13.js]
class Bar {
    x;
}
class Foo extends Bar {
    y;
}
class FooIterator {
    next() {
        return {
            value: new Foo,
            done: false
        };
    }
    [Symbol.iterator]() {
        return this;
    }
}
function fun([a, ...b]) { }
fun(new FooIterator);
