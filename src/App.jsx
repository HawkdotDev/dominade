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

function App() {
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
                  <div className="flex justify-between items-center w-[80%] text-lg font-hagrid font-bold">
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
                  <div className="flex items-center border-l border-gray-500 w-[20%] justify-between">
                    <div className="flex font-hagrid items-center cursor-pointer hover:bg-purple-500 hover:text-black w-[55%] h-[30px] justify-center pl-2">
                      <h1>More</h1>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="34px"
                        viewBox="0 -960 960 960"
                        width="34px"
                        fill="#e8eaed"
                        className="mb-[2px]"
                      >
                        <path d="M460-460H240v-40h220v-220h40v220h220v40H500v220h-40v-220Z"/>
                      </svg>
                    </div>
                    <h1 className="font-hagrid font-bold text-pink-600 cursor-pointer w-[45%] text-center hover:text-blue-500">
                      Login
                    </h1>
                  </div>
                </div>
              </div>

              {/* <div className="w-full flex justify-between items-center bg-neutral-800 border-b border-gray-500">
                <div className="w-[75%] flex items-center font-hagrid text-md py-[2px]">
                  {sections.map((section, index) => {
                    const hoverColor = section.bgColor;
                    if (section.name == "Film & TV") {
                      return (
                        <Link
                          to={`/Film-and-TV`}
                          key={index}
                          style={{
                            "--hover-color": hoverColor,
                            // borderColor: textColor,
                          }}
                          className="section-item border-l border-gray-600"
                        >
                          {section.name}
                        </Link>
                      );
                    } else {
                      return (
                        <Link
                          to={`/${section.name}`}
                          key={index}
                          style={{
                            "--hover-color": hoverColor,
                            // borderColor: textColor,
                          }}
                          className="section-item border-l border-gray-600"
                        >
                          {section.name}
                        </Link>
                      );
                    }
                  })}
                </div>
                <div
                  style={{ backgroundColor: textColor }}
                  className="w-[22.5%] h-[30px] flex justify-end"
                >
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full h-full px-[3px] bg-transparent text-black outline-none text-md pl-2 font-hagrid"
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
              </div> */}
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
