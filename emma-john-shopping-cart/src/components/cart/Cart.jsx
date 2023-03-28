import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  console.log(cart);
  let totalPrice = 0;
  let totalShipping = 0;
  let tax = 0;
  let quantity = 0;

  for (const product of cart) {
    product.quantity = product.quantity || 1;
    totalPrice += product.price * product.quantity;
    totalShipping += product.shipping;
    quantity += product.quantity;
  }
  tax = totalPrice * 0.07;

  const grandTotal = totalPrice + totalShipping + tax;

  return (
    <div className="cart">
      <h2 className="text-2xl font-bold mb-4">Order summary</h2>
      <h3 className="font-bold mb-8">
        Selected products:{" "}
        <span className="rounded-full bg-orange-600 px-2 text-slate-50  animate-pulse border-blue-300 shadow-lg float-right">
          {quantity}
        </span>
      </h3>
      <p>
        Total price:{" "}
        <span className="float-right">${totalPrice.toFixed(2)}</span>
      </p>
      <p>
        Shipping:{" "}
        <span className="float-right">${totalShipping.toFixed(2)}</span>
      </p>
      <p>
        Tax: <span className="float-right">${tax.toFixed(2)}</span>
      </p>
      <h6 className="text-1xl font-bold border-solid border-2 border-amber-600 px-1 rounded-full mt-4">
        Grand Total:{" "}
        <span className="float-right">${grandTotal.toFixed(2)}</span>
      </h6>
    </div>
  );
};

export default Cart;
