import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { IoIosArrowUp } from "react-icons/io";
import { Suspense, useEffect, useState } from "react";
import { Footer } from "./components/Footer";
import { lazy } from "react";
import { Loading } from "./components/Loading";

const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Services = lazy(() => import("./pages/Services"));
const Service = lazy(() => import("./pages/Services"));
const AllPortfolio = lazy(() => import("./pages/Portfolio"));
const Portfolio = lazy(() => import("./pages/Portfolio"));

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <div className="App relative">
          <Header />
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"*"} element={<Home />} />
            <Route path="من-نحن" element={<AboutUs />} />
            <Route path="خدامتنا" element={<Services />}>
              <Route path=":path" element={<Service />} />
            </Route>
            <Route path="اعمالنا" element={<AllPortfolio />}>
              <Route path=":path" element={<Portfolio />} />
            </Route>
          </Routes>
          <Footer />
          <ToTop />
        </div>
      </Suspense>
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
