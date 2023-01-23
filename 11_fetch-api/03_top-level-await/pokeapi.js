// top level await (no async function necessary)
const response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
const pokemon = await response.json();
console.log(pokemon);
document.getElementById('result').innerHTML = `You catched a ${pokemon.name} with a height of ${pokemon.height} decimetres.`;
export {};
//# sourceMappingURL=pokeapi.js.map