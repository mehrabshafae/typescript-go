//// [tests/cases/conformance/es6/destructuring/objectBindingPatternKeywordIdentifiers04.ts] ////

//// [objectBindingPatternKeywordIdentifiers04.ts]
var { "while": while } = { while: 1 }

//// [objectBindingPatternKeywordIdentifiers04.js]
var { "while": , while:  } = { while: 1 };
