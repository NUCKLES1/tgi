"use client";

import React, { useEffect, useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { LuSearch } from "react-icons/lu";
import { BiCart } from "react-icons/bi";
import { LiaTimesSolid } from "react-icons/lia";
import Link from "next/link";
import NavLinks from "./NavLinks";
import Logo from "./Logo";

const Navbar = () => {
  const [isStyled, setIsStyled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isStyled) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isStyled]);

  const toggleStyle = () => {
    setIsStyled(!isStyled);
  };
  return (
    <div>
      <div className="w-full background py-6 px-10 max-sm:px-4 fixed z-100 overflow-hidden">
        <div className="flex justify-between">
          <Link href="/" className="cursor-pointer">
            <div className="mt-2 flex">
              <Logo />
              <div className="pl-14 -mt-2 font-bold">
                <h1>TGI</h1>
              </div>
            </div>
          </Link>

          <div
            className="text-bold text-xl gap-1 flex cursor-pointer"
            onClick={toggleStyle}
          >
            <IoIosMenu size={30} className="hidden max-sm:block" />
            <h1 className="max-sm:hidden">Menu</h1>
          </div>
        </div>
      </div>
      <div
        style={{
          width: isStyled ? (isMobile ? "105%" : "30%") : "0",
          position: "fixed",
          opacity: isStyled ? "1" : "1",
          transition: "width 0.5s ease-in-out",
        }}
        className="absolute overflow-hidden bg-black bg-opacity-[0.5] right-0 h-screen z-120 rounded-tl-3xl rounded-bl-3xl bottom-0"
      >
        <div className="w-full px-8 md:px-4 pt-6">
          <div
            onClick={toggleStyle}
            className="flex gap-3 text-white text-xl font-bold cursor-pointer justify-end"
          >
            <button>Close</button>
            <LiaTimesSolid size={30} />
          </div>
          <div>
            <NavLinks />
          </div>
        </div>
      </div>
      <div
        style={{
          position: isStyled ? "fixed" : "absolute",
          opacity: isStyled ? "1" : "0",
          height: isStyled ? "100vh" : "0",
          display: isStyled ? "block" : "none",
          background:
            "linear-gradient(111deg, rgba(0, 0, 0, .8) 1.21%, rgba(0, 0, 0, .32))",
        }}
        onClick={toggleStyle}
        className="hidden
          top-0 left-0 z-80 w-full bg-[#00000078]"
      ></div>
    </div>
  );
};

export default Navbar;
