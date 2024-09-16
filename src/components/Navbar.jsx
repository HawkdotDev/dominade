/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moon from "../assets/icons/dark_mode.svg";
import sun from "../assets/icons/light_mode.svg";
import ThemeButton from "../components/ThemeButton";

// eslint-disable-next-line react/prop-types
const Navbar = ({ bgColor, textColor, border, sections, paperName, IsLight, setIsLight }) => {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
  
    useEffect(() => {
      const handleScroll = () => {
        const currentScrollY = window.scrollY;
  
        if (currentScrollY < 20) {
          setShowNavbar(true);
        } else if (currentScrollY < lastScrollY) {
          // Scrolling up
          setShowNavbar(true);
        } else {
          // Scrolling down
          setShowNavbar(false);
        }
  
        setLastScrollY(currentScrollY);
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [lastScrollY]);
  
    return (
      <nav
        style={{ backgroundColor: bgColor }}
        className={`fixed top-0 left-0 w-full z-[99] transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-12"
        }`}
      >
        <div
          style={{ borderColor: border }}
          className="w-full flex justify-between items-center border-b"
        >
          <div className="bg-transparent flex text-5xl py-[3px] text-[#fc116b] cursor-pointer">
            {paperName}
          </div>
          <div className="flex justify-between w-[35%] text-lg font-hagrid font-bold">
            <Link to="/" className="hover:text-emerald-400 cursor-pointer">
              Home
            </Link>
            <Link to="/tags" className="hover:text-emerald-400 cursor-pointer">
              Tags
            </Link>
            <Link to="/about" className="hover:text-emerald-400 cursor-pointer">
              About
            </Link>
            <Link to="/authors" className="hover:text-emerald-400 cursor-pointer">
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
                <Link
                  to={`/${section.name.replace(/ & /g, "-")}`}
                  key={index}
                  style={{ "--hover-color": hoverColor }}
                  className="section-item border-l border-gray-600"
                >
                  {section.name}
                </Link>
              );
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
              viewBox="http://www.w3.org/2000/svg"
              width="25px"
              fill={bgColor}
              className="rounded-full p-[1px] mr-1"
            >
              <path d="M779.38-153.85 528.92-404.31q-30 25.54-69 39.54t-78.38 14q-96.1 0-162.67-66.53-66.56-66.53-66.56-162.57 0-96.05 66.53-162.71 66.53-66.65 162.57-66.65 96.05 0 162.71 66.56Q610.77-676.1 610.77-580q0 41.69-14.77 80.69t-38.77 66.69l250.46 250.47-28.31 28.3ZM381.54-390.77q79.61 0 134.42-54.81 54.81-54.8 54.81-134.42 0-79.62-54.81-134.42-54.81-54.81-134.42-54.81-79.62 0-134.42 54.81-54.81 54.8-54.81 134.42 0 79.62 54.81 134.42 54.8 54.81 134.42 54.81Z" />
            </svg>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;