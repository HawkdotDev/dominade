import moon from "./assets/icons/dark_mode.svg";
import sun from "./assets/icons/light_mode.svg";
import { useRef, useState } from "react";
import ThemeButton from "./components/ThemeButton";
import Scroller from "./components/Scroller";
import Footer from "./components/Footer";
import LatestNotification from "./components/LatestNotification";
import "./SectionList.css";
// import MasoneryLayout from "./components/MasoneryLayout";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import About from "./pages/About";
import Authors from "./pages/Authors";

function App() {
  const mainRef = useRef();
  const navRef = useRef();
  const [IsLight, setIsLight] = useState(false);

  // light theme
  const lightBG = "#141414"; //"#eddccc";
  const lightText = "#eddccc"; //"#141414";

  // dark theme
  const darkBG = lightBG;
  const darkText = lightText;

  const border = "#5c5a59"; // IsLight ? lightText :

  const bgColor = darkBG;
  const textColor = darkText;

  const sections = [
    { name: "Gaming", bgColor: "#FF4D4D" }, // Vibrant red
    { name: "Film & TV", bgColor: "#FFD700" }, // Bright yellow
    { name: "Esports", bgColor: "#4BFFA5" }, // Neon green
    { name: "Anime", bgColor: "#7D5FFF" }, // Electric purple
    { name: "Buzz", bgColor: "#FF6B81" }, // Coral pink
  ];

  const emailLink = "https://www.google.com";
  const paperName = "Dominade";

  return (
    <>
      <Router basename="/dominade">
        <main
          ref={mainRef}
          style={{
            backgroundColor: bgColor,
            color: textColor,
          }}
          className="w-screen text-lg px-6 flex flex-col items-center"
        >
          <div className="w-[92.5%] container">
            <LatestNotification
              backgroundColor={bgColor}
              color={textColor}
              border={border}
            />
            <nav
              ref={navRef}
              style={{
                backgroundColor: bgColor,
              }}
              className="w-full sticky top-[32.5px] z-[99]"
            >
              <div
                style={{
                  borderColor: border,
                }}
                className="w-full flex justify-between items-center border-b"
              >
                <div className="bg-transparent flex text-5xl py-[3px] text-[#fc116b] cursor-pointer">
                  {paperName}
                </div>
                <div className="flex justify-between w-[35%] text-lg font-hagrid font-bold">
                  <Link
                    to="/"
                    className="hover:text-emerald-400 cursor-pointer"
                  >
                    Home
                  </Link>
                  <Link
                    to="/discover"
                    className="hover:text-emerald-400 cursor-pointer"
                  >
                    Discover
                  </Link>
                  <Link
                    to="/about"
                    className="hover:text-emerald-400 cursor-pointer"
                  >
                    About
                  </Link>
                  <Link
                    to="/authors"
                    className="hover:text-emerald-400 cursor-pointer"
                  >
                    Authors
                  </Link>
                </div>
                <div className="flex gap-6 items-center px-2">
                  <ThemeButton
                    IsLight={IsLight}
                    setIsLight={setIsLight}
                    moonIcon={moon}
                    sunIcon={sun}
                  />
                  <h1 className="font-hagrid font-bold text-pink-600 cursor-pointer hover:text-blue-500">
                    Login
                  </h1>
                </div>
              </div>
              <div className="w-full flex justify-between items-center bg-neutral-800 border-b border-gray-500">
                <div className="w-[75%] flex items-center font-hagrid text-md py-[2px]">
                  {sections.map((section, index) => {
                    const hoverColor = section.bgColor;
                    return (
                      <h1
                        key={index}
                        style={{
                          "--hover-color": hoverColor,
                          // borderColor: textColor,
                        }}
                        className="section-item border-l border-gray-600"
                      >
                        {section.name}
                      </h1>
                    );
                  })}
                </div>
                <div
                  style={{ backgroundColor: textColor }}
                  className="w-[22.5%] h-[26px] flex justify-end"
                >
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full h-full px-2 bg-transparent text-black outline-none font-hagrid text-sm pl-5"
                    style={{ color: bgColor }}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="25px"
                    viewBox="0 -960 960 960"
                    width="25px"
                    fill={bgColor}
                    className="rounded-full p-[1px] mr-1"
                  >
                    <path d="M779.38-153.85 528.92-404.31q-30 25.54-69 39.54t-78.38 14q-96.1 0-162.67-66.53-66.56-66.53-66.56-162.57 0-96.05 66.53-162.71 66.53-66.65 162.57-66.65 96.05 0 162.71 66.56Q610.77-676.1 610.77-580q0 41.69-14.77 80.69t-38.77 66.69l250.46 250.47-28.31 28.3ZM381.54-390.77q79.61 0 134.42-54.81 54.81-54.8 54.81-134.42 0-79.62-54.81-134.42-54.81-54.81-134.42-54.81-79.62 0-134.42 54.81-54.81 54.8-54.81 134.42 0 79.62 54.81 134.42 54.8 54.81 134.42 54.81Z" />
                  </svg>
                </div>
              </div>
            </nav>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/discover" element={<Discover />} />
              <Route path="/about" element={<About />} />
              <Route path="/authors" element={<Authors />} />
            </Routes>

            <Scroller
              bgColor={bgColor}
              textColor={textColor}
              emailLink={emailLink}
            />
            <Footer bgColor={bgColor} textColor={textColor} border={border} />
          </div>
        </main>
      </Router>
    </>
  );
}

export default App;
