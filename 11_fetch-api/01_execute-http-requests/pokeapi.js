"use strict";
// For starting the typescript compiler in watchmode run 'tsc --watch'
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Fetches a pokemon in JSON format over the network
function loadPokemon() {
    return __awaiter(this, void 0, void 0, function* () {
        // The simplest use of fetch() takes one argument — the path to the resource you want to fetch — and returns a promise containing the response (a Response object).
        const response = yield fetch("https://pokeapi.co/api/v2/pokemon/ditto");
        // You could extract the JSON body content this way
        // const body: string = await response.text();
        // const pokemon: any = JSON.parse(body);
        // But it is much simpler to use the json() method
        const pokemon = yield response.json();
        console.log(pokemon);
        // Don't use innerHTML to show the fetch result, because this opens the door to cross-site-scripting (XSS)
        // pokemon.name = "<img src='x' onerror='alert(\"You have been hacked!!!\")'>";
        // pokemon.name = "<img src='x' onerror='document.getElementsByTagName(\"body\")[0].innerText = \"You have been hacked!!!\"'>";
        document.getElementById('result').innerHTML = `You catched a ${pokemon.name} with a height of ${pokemon.height} decimetres.`;
    });
}
//# sourceMappingURL=pokeapi.js.map