// top level await (no async function necessary)
const response: Response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
const pokemon: any = await response.json();
console.log(pokemon);
document.getElementById('result')!.innerHTML = `You catched a ${pokemon.name} with a height of ${pokemon.height} decimetres.`;

// an ES6 module needs at least one import or export
export {};