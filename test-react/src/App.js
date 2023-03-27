import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import "./Components/Products";

import Users from "./Components/Users";
import "./Components/Users.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Users />
      <Footer />
    </div>
  );
}

export default App;
