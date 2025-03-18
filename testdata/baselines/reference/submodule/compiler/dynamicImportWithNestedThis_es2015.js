//// [tests/cases/compiler/dynamicImportWithNestedThis_es2015.ts] ////

//// [dynamicImportWithNestedThis_es2015.ts]
// https://github.com/Microsoft/TypeScript/issues/17564
class C {
	private _path = './other';

	dynamic() {
		return import(this._path);
	}
}

const c = new C();
c.dynamic();

//// [dynamicImportWithNestedThis_es2015.js]
class C {
    _path = './other';
    dynamic() {
        return Promise.resolve(`${this._path}`).then(s => require(s));
    }
}
const c = new C();
c.dynamic();
