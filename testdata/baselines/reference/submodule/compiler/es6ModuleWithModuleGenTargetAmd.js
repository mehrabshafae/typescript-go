//// [tests/cases/compiler/es6ModuleWithModuleGenTargetAmd.ts] ////

//// [es6ModuleWithModuleGenTargetAmd.ts]
export class A
{
    constructor ()
    {
    }

    public B()
    {
        return 42;
    }
}

//// [es6ModuleWithModuleGenTargetAmd.js]
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.A = void 0;
class A {
    constructor() {
    }
    B() {
        return 42;
    }
}
exports.A = A;
