//// [tests/cases/compiler/assignmentNestedInLiterals.ts] ////

//// [assignmentNestedInLiterals.ts]
var target, x, y;
target = [x = 1, y = x];

var aegis, a, b;
aegis = { x: a = 1, y: b = a };

var kowloona, c, d;
for (kowloona of [c = 1, d = c]) {
}


//// [assignmentNestedInLiterals.js]
var target, x, y;
target = [x = 1, y = x];
var aegis, a, b;
aegis = { x: a = 1, y: b = a };
var kowloona, c, d;
for (kowloona of [c = 1, d = c]) {
}
