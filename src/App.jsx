import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Game from "./components/Game";
import Level2 from "./levels/Level2";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route index element={<Game />} />
            <Route path="level-2" element={<Level2 />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
