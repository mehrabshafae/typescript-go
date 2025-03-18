//// [tests/cases/compiler/strictModeEnumMemberNameReserved.ts] ////

//// [strictModeEnumMemberNameReserved.ts]
"use strict";
enum E {
    static
}

const x1: E.static = E.static;


//// [strictModeEnumMemberNameReserved.js]
"use strict";
var E;
(function (E) {
    E[E["static"] = 0] = "static";
})(E || (E = {}));
const x1 = E.static;
