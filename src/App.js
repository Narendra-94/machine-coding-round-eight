import "./App.css";
import { Header } from "./components/header/Header";
import { Home } from "./components/pages/Home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="App-main-page-content"></div>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
