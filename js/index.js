function loadUsers2() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUser2(data));
}
function displayUser2(data) {

    const ul = document.getElementById('user-list');
    for (const user of data) {
        console.log(user.name);
        const createLi = document.createElement('li');
        createLi.innerText = user.name;
        ul.appendChild(createLi);
    }
}



function loadProducts(){
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => displayPd(data))
}
function displayPd(products){
    const pdContainer = document.getElementById('pd-image');
    for(const product of products){
        const pdImage = document.createElement('img');
        // console.log(pdImage);
        pdImage.setAttribute('src', `${product.image}`);
        pdImage.classList.add('w-10')
        pdContainer.appendChild(pdImage);
    }
}