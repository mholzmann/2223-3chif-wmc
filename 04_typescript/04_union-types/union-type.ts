let houseno: number | string = 7;
houseno = "7A";

let neighbour: number;

if (typeof houseno === "number") {
    neighbour = houseno + 1;
} else {
    neighbour = parseInt(houseno) + 1;
}

console.log(neighbour);