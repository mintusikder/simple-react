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

const removeFormLocalStorage = (id) =>{
        const storedCart = getCartLocalStorage()
        const remainingCart =storedCart.filter(storedId => storedId !== id)
        saveCartToLocalStorage(remainingCart)
}

export {
  getCartLocalStorage as getStoredCart,
  addItemToCartLocalStorage as addToStoredCart,
  removeFormLocalStorage as removeStoredCart
};
