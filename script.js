let cartCount = 0;

function addToCart() {
  cartCount++;
  document.getElementById('cart-count').textContent = cartCount;
  alert('เพิ่มสินค้าในตะกร้าแล้ว!');
}

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', addToCart);
});
