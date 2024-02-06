import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { IoIosArrowUp } from "react-icons/io";
import { useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import About from "./pages/About";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      <div className="App relative">
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"*"} element={<Home />} />
          <Route path={"about"} element={<About />} />
        </Routes>
        <Footer />
        <ToTop />
      </div>
    </Router>
  );
}

export default App;

// to Top buttom
const ToTop = () => {
  const [top, setTop] = useState(false);
  const toTop = () => {
    window.scrollTo(0, 0);
  };

  window.addEventListener("scroll", (e) => {
    setTop(window.scrollY);
  });

  return (
    <IoIosArrowUp
      onClick={toTop}
      size={40}
      className={`fixed bottom-0 left-2 bg-black text-white p-2 rounded-t-xl z-50 cursor-pointer hover:bg-white hover:text-black ${
        top >= 200 ? "visible" : "invisible"
      }`}
      title="To Top"
      id="to-top-btn"
    />
  );
};
