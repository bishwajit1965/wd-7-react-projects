import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () => {
  const loadedProducts = await fetch("products.json");
  const products = await loadedProducts.json();
  // If cart data is in database async await must be used
  const storedCart = getShoppingCart();
  const savedCart = [];
  for (const id in storedCart) {
    const addedProduct = products.find((prod) => prod.id === id);
    if (addedProduct) {
      const quantity = storedCart[id];
      addedProduct.quantity = quantity;
      savedCart.push(addedProduct);
    }
  }
  console.log(savedCart);
  return savedCart;
  // If it is needed to send two things the following techniques can be applied
  // return [one, teo];
  // OR
  // return { one, two };
};

export default cartProductsLoader;
