import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  console.log(cart);
  let totalPrice = 0;
  let totalShipping = 0;
  let tax = 0;

  for (const product of cart) {
    totalPrice += product.price;
    totalShipping += product.shipping;
  }
  tax = (totalPrice * 0.07).toFixed(2);

  const grandTotal = totalPrice + totalShipping + parseFloat(tax);
  return (
    <div className="cart">
      <h2 className="text-2xl font-bold mb-4">Order summary</h2>
      <h3 className="font-bold">
        Selected products:{" "}
        <span className="rounded-full bg-orange-600 px-2 py-2 text-slate-50  animate-pulse border-blue-300 shadow-lg">
          {cart.length}
        </span>{" "}
      </h3>
      <p>Total price: ${totalPrice}</p>
      <p>Shipping: ${totalShipping}</p>
      <p>Tax: ${tax}</p>
      <h6 className="text-1xl font-bold">Grand Total: ${grandTotal}</h6>
    </div>
  );
};

export default Cart;
