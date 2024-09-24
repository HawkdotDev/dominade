import Scroller from "./components/Scroller";
import Footer from "./components/Footer";
import LatestNotification from "./components/LatestNotification";
import "./SectionList.css";
// import MasoneryLayout from "./components/MasoneryLayout";

import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home";
// import Discover from "./pages/Discover";
import Tags from "./pages/Tags";
import About from "./pages/About";
import Authors from "./pages/Authors";
import Anime from "./pages/categories/Anime";
import Esports from "./pages/categories/Esports";
import Buzz from "./pages/categories/Buzz";
import Gaming from "./pages/categories/Gaming";
import FilmandTv from "./pages/categories/FilmandTv";
import { useState } from "react";

function App() {
  // light theme
  const lightBG = "#141414"; //"#eddccc";
  const lightText = "#ebe3dd"; //"#141414";

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

  const [sideNav, setsideNav] = useState(false)

  return (
    <>
      <Router basename="/dominade">
        <main
          style={{
            backgroundColor: bgColor,
            color: textColor,
          }}
          className="w-screen select-none text-lg px-6 flex flex-col items-center relative"
        >
          <div  className={`w-full h-screen z-[101] justify-between fixed ${sideNav ? "flex" : "hidden"}`}>
            <div className="w-[35%] h-full right-0">

            </div>
            <div className="w-[25%] h-full bg-blue-600 right-0 flex flex-col justify-between p-3">
              <div className="flex justify-between">
                <div className="bg-pink-600 rounded-full w-9 h-9">

                </div>
                <button onClick={() => setsideNav(!sideNav)} className="bg-green-600 rounded-full w-9 h-9">

                </button>
              </div>
              <div className="">

              </div>
            </div>
          </div>
          <div className="w-[92.5%] container">
            <LatestNotification
              backgroundColor={bgColor}
              color={textColor}
              border={border}
            />
            <nav
              style={{
                backgroundColor: bgColor,
              }}
              className="w-full sticky top-0 z-[100]"
            >
              <div
                style={{
                  borderColor: border,
                }}
                className="w-full flex justify-between items-center border-b"
              >
                <Link
                  to={"/"}
                  className="bg-transparent flex text-5xl py-[3px] text-[#fc116b] cursor-pointer"
                >
                  {paperName}
                </Link>
                <div className="w-[70%] flex justify-end">
                  <div className="flex justify-between items-center w-[77.5%] text-lg font-hagrid font-bold">
                    {sections.map((section, index) => {
                      const hoverColor = section.bgColor;
                      return (
                        <Link
                          to={
                            section.name === "Film & TV"
                              ? `/Film-and-TV`
                              : `/${section.name}`
                          }
                          key={index}
                          style={{
                            "--hover-color": hoverColor,
                          }}
                          className="section-item border-l border-gray-600"
                        >
                          {section.name}
                        </Link>
                      );
                    })}
                  </div>
                  <div className="flex items-center border-l border-gray-500 w-[22.5%] justify-between">
                    <div onClick={() => setsideNav(!sideNav)} className="flex font-hagrid items-center cursor-pointer hover:bg-purple-500 hover:text-black w-[55%] h-[30px] justify-center pl-3">
                      <h1>More</h1>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="34px"
                        viewBox="0 -960 960 960"
                        width="34px"
                        fill="#4BFFA5"
                        className="mb-[2px]"
                      >
                        <path d="M460-460H240v-40h220v-220h40v220h220v40H500v220h-40v-220Z" />
                      </svg>
                    </div>
                    <h1 className="font-hagrid font-bold text-pink-600 cursor-pointer w-[45%] text-center hover:text-blue-500">
                      Login
                    </h1>
                  </div>
                </div>
              </div>
            </nav>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tags" element={<Tags />} />
              <Route path="/about" element={<About />} />
              <Route path="/authors" element={<Authors />} />

              <Route path="/Anime" element={<Anime />} />
              <Route path="/Esports" element={<Esports />} />
              <Route path="/Buzz" element={<Buzz />} />
              <Route path="/Gaming" element={<Gaming />} />
              <Route path="/Film-and-TV" element={<FilmandTv />} />
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
