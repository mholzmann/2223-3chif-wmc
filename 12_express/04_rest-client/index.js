"use strict";
// for starting the typescript compiler in watchmode run 'tsc --watch'
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function getAllFruits() {
    return __awaiter(this, void 0, void 0, function* () {
        // const response = await fetch('http://localhost:3000/api/fruit');
        // const fruits: string[] = await response.json();
        let fruits = yield fetchRestEndpoint('http://localhost:3000/api/fruit', 'GET');
        document.getElementById('result').innerText = fruits.join(', ');
    });
}
function getFirstFruit() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let fruit = yield fetchRestEndpoint('http://localhost:3000/api/fruit/0', 'GET');
            document.getElementById('result').innerText = fruit;
        }
        catch (error) {
            document.getElementById('result').innerText = 'fruit not found';
        }
    });
}
function addFruit() {
    return __awaiter(this, void 0, void 0, function* () {
        const data = { fruit: 'strawberry' };
        let fruit = yield fetchRestEndpoint('http://localhost:3000/api/fruit', 'POST', data);
        document.getElementById('result').innerText = fruit;
    });
}
function deleteAllFruits() {
    return __awaiter(this, void 0, void 0, function* () {
        yield fetchRestEndpoint('http://localhost:3000/api/fruit', 'DELETE');
        document.getElementById('result').innerText = 'deleted all fruits';
    });
}
function deleteFirstFruit() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield fetchRestEndpoint('http://localhost:3000/api/fruit/0', 'DELETE');
            document.getElementById('result').innerText = 'deleted first fruit';
        }
        catch (error) {
            document.getElementById('result').innerText = 'fruit not found';
        }
    });
}
function fetchRestEndpoint(route, method, data) {
    return __awaiter(this, void 0, void 0, function* () {
        let options = { method };
        if (data) {
            options.headers = { 'Content-Type': 'application/json' };
            options.body = JSON.stringify(data);
        }
        const res = yield fetch(route, options);
        if (!res.ok) {
            throw new Error(`${method} ${res.url} ${res.status} (${res.statusText})`);
        }
        if (res.status !== 204) {
            return yield res.json();
        }
    });
}
//# sourceMappingURL=index.js.map