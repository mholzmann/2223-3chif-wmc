# Fetch API

## What is the Fetch API for?

- It allows a client to retrieve data from a server.
- There is no a full page refresh necessary.
  - formerly this was done via `XMLHttpRequest` objects
  - nowadays always use the `Fetch API`<!---->
- For making a request use the [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/fetch) method.
  - the method is implemented in the [`Window`](https://developer.mozilla.org/en-US/docs/Web/API/Window) interface 
  - therefore it is globally available in every browser

## The `fetch()` method

- The `fetch()` method takes following arguments:
  - 1st (mandatory): the URL of the resource you want to fetch
  - 2nd (optional):  an options object (see [`fetch()`](https://developer.mozilla.org/en-US/docs/Web/API/fetch)).<!---->

- The `fetch()` method returns a [`Promise`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) that resolves to the [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response)
  - the `Promise` resolves as soon as the server responds
  - even if the server response contains an HTTP error status
    - so `try-catch` doesn't work for handling HTTP errors<!---->

- The [`Response`](https://developer.mozilla.org/en-US/docs/Web/API/Response) object allows you to access: 
  - the HTTP status of the server response
  - the body (payload) of the server response

## Using `fetch()` with `async/await`

- In classic scripts `await` can only be used in `async` functions.

```typescript
loadPokemon();

async function loadPokemon(): Promise<void> {
    const response: Response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
    const pokemon: any = await response.json();
    console.log(pokemon);
}
```

## Top level await

- In *ES6 modules* you dont' need to wrap `await` in an `async` function.

- *ES6 modules* follow the *same-origin policy*. 

   -  you need to host your website at a (local) server
   -  opening the file directly with a browser will not work<!---->

- For declaring a script as an *ES6 module* you have to include `type="module"` in the `<script>` element:

  ```html
  <script type="module" src="pokeapi.js" defer></script>
  ```

- Afterwards your script could look like this:

  ```typescript
  // no async function needed
  const response: Response = await fetch("https://pokeapi.co/api/v2/pokemon/ditto");
  const pokemon: any = await response.json();
  console.log(pokemon);
  
  export {};
  ```