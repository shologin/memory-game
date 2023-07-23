import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import Level1 from "./levels/Level1";
import Level2 from "./levels/Level2";
import Level3 from "./levels/Level3";
import Page404 from "./components/Page404";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <header>
          <Header />
        </header>
        <main>
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="level-1" element={<Level1 />} />
            <Route path="level-2" element={<Level2 />} />
            <Route path="level-3" element={<Level3 />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
