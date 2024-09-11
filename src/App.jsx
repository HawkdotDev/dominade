import moon from "./assets/icons/moon.svg";
import sun from "./assets/icons/sun.svg";
import { useRef, useState } from "react";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
import ThemeButton from "./components/ThemeButton";
import Scroller from "./components/Scroller";
import Footer from "./components/Footer";
import LatestNotification from "./components/LatestNotification";

function App() {
  const mainRef = useRef();
  const navRef = useRef();
  const [IsLight, setIsLight] = useState(true);

  // light theme
  const lightBG = "#eddccc";
  const lightText = "#1b1b1b";

  // dark theme
  const darkBG = "#1b1b1b";
  const darkText = "#c4bcb2";

  const border = IsLight ? lightText : "#5c5a59";

  const bgColor = IsLight ? lightBG : darkBG;
  const textColor = IsLight ? lightText : darkText;

  const sections = ["Gaming", "Film & TV", "Esports", "Anime", "Buzz"];

  const emailLink = "https://www.google.com";
  const paperName = "Dominade";

  // const tl = gsap.timeline();

  // useGSAP(() => {
  //   tl.to(mainRef.current, {
  //     y: "100vh",
  //     scale: 0.5,
  //     duration: 0.1,
  //     delay: 0.1,
  //   })
  //     .to(mainRef.current, {
  //       y: "-70vh",
  //       duration: 1,
  //     })
  //     .to(mainRef.current, {
  //       y: 0,
  //       duration: 1,
  //       scale: 1,
  //     });
  // });

  return (
    <>
      <main
        ref={mainRef}
        style={{
          backgroundColor: bgColor,
          color: textColor,
        }}
        className="w-screen text-lg px-3"
      >
        <LatestNotification
          backgroundColor={bgColor}
          color={textColor}
          border={border}
        />
        <nav ref={navRef} className="w-full">
          <div
            style={{
              borderColor: border,
            }}
            className="w-full flex justify-between items-center border-b"
          >
            <div className="bg-transparent flex text-5xl py-1">{paperName}</div>
            <div className="flex justify-between w-[30%] text-xl">
              <h1>Home</h1>
              <h1>Discover</h1>
              <h1>About</h1>
            </div>
            <div className="flex gap-6 text-center px-2 cursor-pointer hover:text-blue-500">

            <ThemeButton
              IsLight={IsLight}
              setIsLight={setIsLight}
              moonIcon={moon}
              sunIcon={sun}
            />
            <h1>
              Login
            </h1>
            </div>
          </div>
          <div className="w-full flex items-center">
            {sections.map((section) => (
              <h1
                style={{ borderColor: border }}
                className="hover:bg-blue-500 hover:text-black w-[15%] text-center border-x py-[1px]"
                key={section}
              >
                {section}
              </h1>
            ))}
          </div>
        </nav>
        <div
          style={{ backgroundColor: textColor }}
          className="flex w-full gap-2 overflow-auto whitespace-nowrap scrollbar-hide h-[15vh] items-center"
        >
          <div
            style={{ borderColor: bgColor }}
            className="w-[30vh] h-[13vh] ml-1 flex border-r"
          >
            <div className="bg-red-400 w-[35%] h-full"></div>
            <div
              style={{ color: IsLight ? darkText : lightText }}
              className=" w-[65%] h-full text-wrap p-1"
            >
              <h1 className="text-xs flex justify-between mr-2 mb-[2px]">
                <h2>date</h2>
                <h2 className="bg-green-600 px-2">#tag</h2>
              </h1>
              <h1 className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </h1>
            </div>
          </div>
          <div
            style={{ borderColor: bgColor }}
            className="w-[30vh] h-[13vh] ml-1 flex border-r"
          >
            <div className="bg-blue-400 w-[35%] h-full"></div>
            <div
              style={{ color: IsLight ? darkText : lightText }}
              className=" w-[65%] h-full text-wrap p-1"
            >
              <h1 className="text-xs flex justify-between mr-2 mb-[2px]">
                <h2>date</h2>
                <h2 className="bg-orange-600 px-2">#tag</h2>
              </h1>
              <h1 className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing.
              </h1>
            </div>
          </div>
        </div>
        <div className="flex">
          <div
            style={{
              borderColor: border,
            }}
            className="w-[80%] bg-transparent border-t p-3"
          >
            <div className="w-full">
              <h1
                // style={{ backgroundColor: textColor, color: bgColor }}
                className="text-xl"
              >
                Hero Section
              </h1>
            </div>
          </div>
          <div
            style={{
              borderColor: border,
            }}
            className="w-[20%] bg-transparent relative border-l"
          >
            <h1
              style={{ backgroundColor: bgColor, color: textColor }}
              className="text-4xl py-1 px-2"
            >
              Trending
            </h1>
            <h1 className="h-screen p-2">lendi stories</h1>
          </div>
        </div>
        {/* <div style={{backgroundColor: textColor}} className="flex w-full overflow-auto whitespace-nowrap scrollbar-hide h-[15vh] items-center">
            <div style={{borderColor: bgColor}} className="w-[30vh] h-[13vh] ml-1 flex border-r">
                <div className="bg-red-400 w-[35%] h-full">

                </div>
                <div style={{color: IsLight? darkText : lightText}} className=" w-[65%] h-full text-wrap p-1">
                    <h1 className="text-xs">
                      some date
                    </h1>
                    <h1 className="text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing.
                    </h1>

                </div>
            </div>
        </div> */}
        {/* <div className="w-full h-screen bg-transparent p-3">lendi</div> */}
        {/* <div className="w-full h-screen bg-transparent p-3">
          return of lendi
        </div>
        <div
          style={{
            borderColor: border,
          }}
          className="w-full h-screen bg-transparent p-3"
        >
          the last lendi
        </div> */}
        <Scroller
          bgColor={bgColor}
          textColor={textColor}
          emailLink={emailLink}
        />
        <Footer bgColor={bgColor} textColor={textColor} border={border} />
      </main>
    </>
  );
}

export default App;
