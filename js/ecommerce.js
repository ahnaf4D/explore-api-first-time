function loadProducts(){
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => displayProducts(json));
}
function displayProducts(products){
    const productsContainer = document.getElementById('products-container');
    for(const product of products){
        const createCard = document.createElement('div');
        createCard.classList.add('card' , 'w-96', 'bg-base-100' , 'shadow-xl')
        createCard.innerHTML = `
        <figure><img src="${product.image}" alt="Shoes" /></figure>
        <div class="card-body">
          <h2 class="card-title">${product.title}</h2>
          <p>${product.description}</p>
          <p>Price : ${product.price}</p>
        </div>
        `
        productsContainer.appendChild(createCard);
    }
}
loadProducts()