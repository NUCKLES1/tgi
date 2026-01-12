import React from "react";
import Logo from "./Logo";
import { IoArrowForwardOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="-mt-20 w-full overflow-hidden">
      <div className=" bg-gradient-to-r from-gray-100 via-yellow-50 to-blue-200 max-sm:py-10 lg:h-screen max-sm:h-180">
        <div className="w-full justify-between lg:flex p-10 max-sm:px-6">
          <div>
            <h1 className="text-6xl max-sm:text-3xl pb-10 text-gray-700">
              KICKSTART <br /> YOUR PROJECT <br /> IN JUST → 2 WEEKS
            </h1>
          </div>
          <div className="w-60 lg:text-right">
            <h1 className=" pb-10 text-gray-700">
              Explain what you need with our experts
            </h1>
            <button className="btnn px-6 max-sm:w-full">Get in touch</button>
          </div>
        </div>
        <div className="loaderi mt-28 mx-auto">
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
      <div className="w-full h-100 bg-[#232020] pt-10 px-20 max-sm:px-0 max-sm:h-auto md:h-auto pb-10">
        <div className="border-t border-b border-gray-600  w-full py-10">
          <div className="lg:flex w-full justify-between">
            <div>
              <h1 className="text-[15rem] max-sm:hidden leading-50 font-bold text-gray-500 loader-text">
                TGI
              </h1>
              <div className="lg:hidden ml-20 justify-start gap-10 flex flex-col">
              <div className="loader-text">
                <span>The</span>
                <span>The</span>
              </div>
              <div className="loader-text">
                <span>Grid</span>
                <span>Grid</span>
              </div>
              <div className="loader-text ml-20">
                <span>Innovations</span>
                <span>Innovations</span>
              </div>
              </div>
            </div>
            <div className="text-white w-100 text-left uppercase flex flex-col max-sm:gap-5 gap-26 max-sm:mt-12">
              <div className="flex md:mt-10">
                <IoArrowForwardOutline className="w-10 max-sm:text-3xl lg:mt-2 max-sm:ml-8" />
                <p className="text-2xl max-sm:text-xl">Get in Touch</p>
              </div>
              <div>
                <ul className="text-gray-600  pl-10">
                  <li>privacy policy</li>
                  <li>terms of service</li>
                  <li>cookies policy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:flex justify-between">
          <ul className="flex text-gray-600 uppercase gap-5 text-sm pt-5">
            <li>Whatsapp</li>
            <li>Linkedin</li>
            <li>Github</li>
          </ul>
          <div className="text-sm text-gray-600 pt-5">
            powered by The Grid Innovations © 2024 All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
