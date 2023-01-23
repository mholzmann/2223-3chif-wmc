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
// Prevent redirection on form submit and load pokemon instead
const pokemonForm = document.getElementById('pokemon-form');
pokemonForm.addEventListener('submit', event => {
    event.preventDefault();
    loadPokemon();
});
// Fetches a pokemon in JSON format over the network
function loadPokemon() {
    return __awaiter(this, void 0, void 0, function* () {
        const resultElement = document.getElementById('result');
        const pokemonInput = document.getElementById('pokemon');
        const name = pokemonInput.value;
        try {
            // Trying to fetch a pokemon which might not exist
            const response = yield fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}/`);
            if (response.ok) {
                // Executed if the response was successfull (HTTP status code in the range 200-299)
                const pokemon = yield response.json();
                resultElement.innerText = `You caught a ${pokemon.name} with a height of ${pokemon.height} decimetres.`;
            }
            else {
                // Executed if the response fails e.g. if server returns HTTP status code 404 (NOT FOUND)
                resultElement.innerText = `Error: Could not fetch a pokemon called ${name}`;
            }
        }
        catch (error) {
            // Executed if the server doesn't respond e.g. if there is no network connection
            resultElement.innerText = "Error: Server didn't respond. Please try again later.";
        }
    });
}
//# sourceMappingURL=pokeapi.js.map