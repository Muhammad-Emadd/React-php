import ProductList from "./pages/ProductList";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProductAdd from "./pages/ProductAdd";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/add-product" element={<ProductAdd />} />
      </Routes>
    </div>
  );
}

export default App;
