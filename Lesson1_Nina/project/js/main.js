const products = [
  {id: 1, title: 'Notebook', price: 20000},
  {id: 2, title: 'Mouse', price: 1500},
  {id: 3, title: 'Keyboard', price: 5000},
  {id: 4, title: 'Gamepad', price: 4500},
];

const renderProduct = (title, price, img = 'https://via.placeholder.com/150') => {
  return `<div class="product-item">
            <h3>${title}</h3>
            <p>${price}</p>
            <img src="${img}" alt="img">
          </div>`;
};

const renderProducts = goodsList => {
  const productsList = goodsList.map(good => renderProduct(good.title, good.price));
  document.querySelector('.products').innerHTML = productsList.join(' ');
};

renderProducts(products);
