//// [tests/cases/compiler/fileReferencesWithNoExtensions.ts] ////

//// [t.ts]
/// <reference path="a"/>
/// <reference path="b"/>
/// <reference path="c"/>
var a = aa;  // Check that a.ts is referenced
var b = bb;  // Check that b.d.ts is referenced
var c = cc;  // Check that c.ts has precedence over c.d.ts

//// [a.ts]
var aa = 1;

//// [b.d.ts]
declare var bb: number;

//// [c.ts]
var cc = 1;

//// [c.d.ts]
declare var xx: number;


//// [t.js]
var a = aa;
var b = bb;
var c = cc;
//// [a.js]
//// [c.js]
//// [b.js]
