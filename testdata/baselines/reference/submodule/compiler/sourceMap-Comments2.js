//// [tests/cases/compiler/sourceMap-Comments2.ts] ////

//// [sourceMap-Comments2.ts]
function foo(str: string, num: number): void {
    return;
}

/**
 * some sort of block quote
 */
function bar(str: string, num: number): void {
    return;
}

// some sort of comment
function baz(str: string, num: number): void {
    return;
}

function qat(str: string, num: number): void {
    return;
}

//// [sourceMap-Comments2.js]
function foo(str, num) {
    return;
}
function bar(str, num) {
    return;
}
function baz(str, num) {
    return;
}
function qat(str, num) {
    return;
}
