//// [tests/cases/compiler/recursiveObjectLiteral.ts] ////

//// [recursiveObjectLiteral.ts]
var a = { f: a };

//// [recursiveObjectLiteral.js]
var a = { f: a };
