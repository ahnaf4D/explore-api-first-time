const user = {
    id: 1,
    name: 'Gorib Amir',
    job: 'actor'
}
const stringify = JSON.stringify(user);
// console.log(stringify);
// console.log(user);


const shop = {
    owner: 'Alia',
    address: {
        street: 'Kochuket voot er goli',
        city: 'ranbir',
        country: 'BD'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false
}
// console.log(shop);
const shopJson = JSON.stringify(shop);
console.log(shopJson);
const shopObj = JSON.parse(shopJson);
console.log(shopObj);
