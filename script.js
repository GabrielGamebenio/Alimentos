const cart = [];
 
function addToCart(productId) {
  const products = {
    'Feijoada': {
      name: 'Feijoada',
      price: 80.00
    },
    'Brigadeiro': {
      name: 'Brigadeiro',
      price: 3.00
    },
    'Coxinha': {
      name: 'Coxinha',
      price: 6.00
    }
  };
 
  const product = products[productId];
 
  if (product) {
    cart.push(product);
    alert(`${product.name} foi adicionado ao carrinho!`);
    updateCartView();
  } else {
    alert('Produto não encontrado!');
  }
}
 
function updateCartView() {
  let cartContainer = document.getElementById('cart');
  if (!cartContainer) {
    cartContainer = document.createElement('section');
    cartContainer.id = 'cart';
    cartContainer.innerHTML = '<h2>Carrinho de Compras</h2><ul id="cart-items"></ul><p id="cart-total"></p>';
    document.querySelector('main').appendChild(cartContainer);
  }
 
  const cartItemsList = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');
 
  cartItemsList.innerHTML = '';
 
  let total = 0;
  cart.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
    cartItemsList.appendChild(li);
    total += item.price;
  });
 
  cartTotal.textContent = `Total: R$ ${total.toFixed(2)}`;
}
 