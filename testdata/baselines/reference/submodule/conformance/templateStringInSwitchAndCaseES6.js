//// [tests/cases/conformance/es6/templates/templateStringInSwitchAndCaseES6.ts] ////

//// [templateStringInSwitchAndCaseES6.ts]
switch (`abc${0}abc`) {
    case `abc`:
    case `123`:
    case `abc${0}abc`:
        `def${1}def`;
}

//// [templateStringInSwitchAndCaseES6.js]
switch (`abc${0}abc`) {
    case `abc`:
    case `123`:
    case `abc${0}abc`:
        `def${1}def`;
}
