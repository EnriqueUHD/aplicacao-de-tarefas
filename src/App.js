import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AdicionarTarefa from "./pages/AdicionarTarefa";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adicionar" element={<AdicionarTarefa />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;