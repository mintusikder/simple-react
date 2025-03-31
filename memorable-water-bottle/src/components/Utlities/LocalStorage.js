const getCartLocalStorage = () => {
  const storedCartString = localStorage.getItem("cart");
  if (storedCartString) {
    const storedCart = JSON.parse(storedCartString);
    return storedCart;
  }
  return [];
};

const saveCartToLocalStorage = (cart) => {
  const cartStringify = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringify);
};

const addItemToCartLocalStorage = (id) => {
  const cart = getCartLocalStorage();
  const newCart = [...cart, id];
  saveCartToLocalStorage(newCart);
};

export {
  getCartLocalStorage as getStoredCart,
  addItemToCartLocalStorage as addToStoredCart,
};
