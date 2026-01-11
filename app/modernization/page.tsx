import React from "react";
import { FaAws } from "react-icons/fa6";
import { IoLogoFirebase } from "react-icons/io5";
import { GiFire } from "react-icons/gi";
import Percentages from "../modernization/Percentages";
import Footer from "../components/Footer";

const page = () => {
  return (
    <div className="bg-gradient-to-r from-gray-100 via-yellow-50 to-blue-200 pt-20">
      <div className="lg:flex px-20 max-sm:px-6">
        <div className="lg:w-1/2 flex flex-col gap-10 pr-20 max-sm:pr-10 mt-20">
          <p className="uppercase text-gray-700">
            PLATFORM MODERNIZATION SERVICES
          </p>
          <h1 className="text-5xl text-gray-600 max-sm:text-4xl">
            App Modernization: Get out of legacy chaos
          </h1>
          <p className="text-gray-700">
            Work with experienced engineers who not only rebuild legacy
            applications but actually fix the performance issues that have been
            holding your product back for too long.
          </p>
          <button className="button2 bg-[#232020] w-60">
            Describe your project
          </button>
        </div>
        <div className="lg:w-1/2 ">
          <div className="loaderi mt-58 mx-auto">
            <div className="boxi box-1i">
              <div className="side-left"></div>
              <div className="side-right"></div>
              <div className="side-top rotate-45"></div>
            </div>
            <div className="boxi box-2i">
              <div className="side-left"></div>
              <div className="side-right"></div>
              <div className="side-top rotate-45"></div>
            </div>
            <div className="boxi box-3i">
              <div className="side-left"></div>
              <div className="side-right"></div>
              <div className="side-top rotate-45"></div>
            </div>
            <div className="boxi box-4i">
              <div className="side-left"></div>
              <div className="side-right"></div>
              <div className="side-top rotate-45"></div>
            </div>
          </div>
          <div className="background w-full h-100 -mt-50 relative z-10"></div>
        </div>
      </div>
      <div className="w-full bg-[#232020] h-22 max-sm:h-auto mt-20">
        <ul className="px-20 max-sm:px-6  grid max-sm:grid-cols-2">
          <li className="border-r text-gray-400 py-6 text-center w-80 max-sm:w-40 pr-10">
            Trusted by 160+ clients
          </li>
          <li className="py-6 px-30 max-sm:px-14 border-r text-gray-300">
            <FaAws className=" w-10 h-10" />
          </li>
          <li className="py-4 px-30 max-sm:px-14 border-r text-gray-300 ">
            <IoLogoFirebase className=" w-6 h-6" />
            Firebase
          </li>
          <li className="py-4 px-20 max-sm:px-10 border-r text-gray-300 text-center flex">
            {" "}
            <GiFire className=" w-6 h-6" />
            TigerFirerose <br /> media
          </li>
        </ul>
      </div>
      <Percentages />
      <Footer />
    </div>
  );
};

export default page;
