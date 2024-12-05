import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { Ruta1 } from "@/Ruta1";
import { Ruta2 } from "@/Ruta2";
import { Index } from "@/Index";

function App() {
  return (
    <>
      <h1>App</h1>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Index />} />
          <Route path="/ruta1" element={<Ruta1 />} />
          <Route path="/ruta2" element={<Ruta2 />} />
        </Routes>
      </BrowserRouter>
      <h2>Fin de App</h2>
    </>
  );
}

export default App;
