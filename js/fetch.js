function loadData() {
    const url = 'https://jsonplaceholder.typicode.com/users/1';
    fetch(url)
        .then(res => res.json())
        .then(json => console.log(json));
}