import "./App.css";
import DeviceDetails from "./components/products/Products";
import Products from "./components/devices/Devices";
import Counter from "./components/counter/Counter";
import ShowHide from "./components/showHide/ShowHide";
import Posts from "./components/posts/Posts";

function App() {
  return (
    <div className="App">
      <Posts />
      <Products name="Tablet" price="15000" />
      <DeviceDetails name="Laptop" price="70000" />
      <Counter />
      <ShowHide />
    </div>
  );
}

export default App;
