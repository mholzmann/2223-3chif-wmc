async function getAllFruits() {
    let fruits: string[] = await fetchRestEndpoint('/api/fruits', 'GET');
    document.getElementById('result').innerText = fruits.join(', ');
}

async function getFirstFruit() {
    try {
        let fruit: string = await fetchRestEndpoint('/api/fruits/0', 'GET');
        document.getElementById('result').innerText = fruit;
    } catch (error) {
        document.getElementById('result').innerText = 'fruit not found';
    }
}

async function addFruit() {
    const data = { fruit: 'strawberry' };
    let fruit: string = await fetchRestEndpoint('/api/fruits', 'POST', data);
    document.getElementById('result').innerText = fruit;
}

async function deleteAllFruits() {
    await fetchRestEndpoint('/api/fruits', 'DELETE');
    document.getElementById('result').innerText = 'deleted all fruits'; 
}

async function deleteFirstFruit() {
    try {
        await fetchRestEndpoint('/api/fruits/0', 'DELETE');
        document.getElementById('result').innerText = 'deleted first fruit'; 
    } catch (error) {
        document.getElementById('result').innerText = 'fruit not found'; 
    }
}

async function fetchRestEndpoint(route: string, method: 'GET' |'POST' |'PUT' |'DELETE', data?: object): Promise<any> {
    let options: any = { method };
    if (data) {
        options.headers = { 'Content-Type': 'application/json' };
        options.body = JSON.stringify(data);
    }
    const res = await fetch(route, options);
    if (!res.ok) {
        throw new Error(`${method} ${res.url} ${res.status} (${res.statusText})`);
    }
    if (res.status !== 204) {
        return await res.json();
    } 
}