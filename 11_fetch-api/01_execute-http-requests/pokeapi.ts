
// For starting the typescript compiler in watchmode run 'tsc --watch'

// Fetches a pokemon in JSON format over the network
async function loadPokemon(): Promise<void> {
    // The simplest use of fetch() takes one argument — the path to the resource you want to fetch — and returns a promise containing the response (a Response object).
    const response: Response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");

    // You could extract the JSON body content this way
    // const body: string = await response.text();
    // const pokemon: any = JSON.parse(body);

    // But it is much simpler to use the json() method
    const pokemon: any = await response.json();
    console.log(pokemon);

    // Don't use innerHTML to show the fetch result, because this opens the door to cross-site-scripting (XSS)
    // pokemon.name = "<img src='x' onerror='alert(\"You have been hacked!!!\")'>";
    // pokemon.name = "<img src='x' onerror='document.getElementsByTagName(\"body\")[0].innerText = \"You have been hacked!!!\"'>";
    
    document.getElementById('result')!.innerHTML = `You catched a ${pokemon.name} with a height of ${pokemon.height} decimetres.`;
}