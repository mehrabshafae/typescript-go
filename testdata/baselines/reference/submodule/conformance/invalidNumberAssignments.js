//// [tests/cases/conformance/types/primitives/number/invalidNumberAssignments.ts] ////

//// [invalidNumberAssignments.ts]
var x = 1;

var a: boolean = x;
var b: string = x;
var c: void = x;
var d: typeof undefined = x;

class C { foo: string; }
var e: C = x;

interface I { bar: string; }
var f: I = x;

var g: { baz: string } = 1;
var g2: { 0: number } = 1;

module M { export var x = 1; }
M = x;

function i<T>(a: T) {
    a = x;
}
i = x;

//// [invalidNumberAssignments.js]
var x = 1;
var a = x;
var b = x;
var c = x;
var d = x;
class C {
    foo;
}
var e = x;
var f = x;
var g = 1;
var g2 = 1;
var M;
(function (M) {
    M.x = 1;
})(M || (M = {}));
M = x;
function i(a) {
    a = x;
}
i = x;
