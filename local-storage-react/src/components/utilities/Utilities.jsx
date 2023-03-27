const saveToCart = (_id) => {
  let shoppingCart;
  const storedCart = getItemsFromShoppingCart();
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  } else {
    shoppingCart = {};
  }
  const quantity = shoppingCart[_id];
  if (quantity) {
    let newQuantity = quantity + 1;
    shoppingCart[_id] = newQuantity;
  } else {
    shoppingCart[_id] = 1;
  }
  setItemToShoppingCart(shoppingCart);
};

const removeFromShoppingCart = (_id) => {
  const storedCart = getItemsFromShoppingCart();
  const shoppingCart = JSON.parse(storedCart);
  if (_id in shoppingCart) {
    delete shoppingCart[_id];
    setItemToShoppingCart(shoppingCart);
  }
};

const getItemsFromShoppingCart = () => localStorage.getItem("shopping-cart");

const setItemToShoppingCart = (shoppingCart) => {
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

const shortenText = (string, limit) => {
  if (string.length > limit) {
    return string.substring(0, limit) + "...";
  } else {
    return string;
  }
};

export { saveToCart, removeFromShoppingCart, shortenText };
