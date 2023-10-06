import "./styles/main.css";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Prices from "./pages/Prices";
import Header from "./components/header/Header";
import Other from "./pages/Other";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prices" element={<Prices />} />
        <Route path="/other" element={<Other />} />
      </Routes>
    </div>
  );
}

export default App;
