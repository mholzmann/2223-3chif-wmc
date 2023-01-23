// For starting the typescript compiler in watchmode run 'tsc --watch'

// Prevent redirection on form submit and load pokemon instead
const pokemonForm: HTMLFormElement = document.getElementById('pokemon-form') as HTMLFormElement;
pokemonForm.addEventListener('submit', event => {
    event.preventDefault();
    loadPokemon();
});

// Fetches a pokemon in JSON format over the network
async function loadPokemon() {
    const resultElement: HTMLElement = document.getElementById('result');
    const pokemonInput: HTMLInputElement = document.getElementById('pokemon') as HTMLInputElement;
    const name: string = pokemonInput.value;

    try {
        // Trying to fetch a pokemon which might not exist
        const response: Response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}/`);

        if (response.ok) {
            // Executed if the response was successfull (HTTP status code in the range 200-299)
            const pokemon: any = await response.json();
            resultElement.innerText = `You caught a ${pokemon.name} with a height of ${pokemon.height} decimetres.`;
        } else {
            // Executed if the response fails e.g. if server returns HTTP status code 404 (NOT FOUND)
            resultElement.innerText = `Error: Could not fetch a pokemon called ${name}`;
        }
    } catch (error) {
        // Executed if the server doesn't respond e.g. if there is no network connection
        resultElement.innerText = "Error: Server didn't respond. Please try again later.";
    }
}