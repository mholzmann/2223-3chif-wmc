const names: string[] = ['John', 'Jane', 'Joe', 'Jessica'];

// with a for-loop you can access each array element via its index
for (let i = 0; i < names.length; i++) {
    console.log(`${i} -> ${names[i]}`);
}

console.log('---------------------------------------------------');

// with a for-of-loop you can directly iterate over all values 
for (const name of names) {
    console.log(name);
}