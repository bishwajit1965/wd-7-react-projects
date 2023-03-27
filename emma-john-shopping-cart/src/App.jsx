import "./App.css";
import Cart from "./components/cart/Cart";
import Header from "./components/header/Header";
import Products from "./components/products/Products";

function App() {
  return (
    <div className="App">
      <Header />
      <Products />
      {/* <Cart /> */}
    </div>
  );
}

export default App;
