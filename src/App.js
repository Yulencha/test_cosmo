import "./styles/main.css";

import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

import Home from "./pages/Home";
import Prices from "./pages/Prices";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prices" element={<Prices />} />
      </Routes>
    </div>
  );
}

export default App;
