import React from "react";
import Logo from "../components/Logo";

const Percentages = () => {
  return (
    <div className="pb-20 h-auto bg-blue-200 w-full max-sm:px-6 px-20 py-20">
      <div className="flex flex-col gap-10">
        <h2 className="text-gray-400 uppercase">market insight</h2>
        <div className="mt-20 max-sm:mt-10">
          <Logo />
        </div>

        <div className="w-full border-t border-gray-400 mt-16 pt-12 h-80">
          <h1 className="text-5xl max-sm:text-3xl lg:w-150 text-gray-600">
            Without proper guidance, 72% of modernization projects fail
          </h1>
        </div>
        <div className="pb-20">
        <div className="grid grid-cols-3 w-full max-sm:gap-10  lg:border-r lg:border-gray-700">
          <div className="lg:border-l max-sm:border-t max-sm:pt-8 border-gray-600 px-10 md:border-l">
            <h1 className="text-3xl text-gray-700">01</h1>
            <p className="pt-20 text-2xl text-gray-700">
                <span className="font-bold">50%</span> of execs and architects           <span className="font-bold">can't create a case for application modernization</span>
            </p>
          </div>
           <div className="lg:border-l max-sm:border-t max-sm:pt-8 border-gray-600 px-10 md:border-l">
            <h1 className="text-3xl text-gray-700">02</h1>
            <p className="pt-20 text-2xl text-gray-700">
                <span className="font-bold">75%</span> of organizations don't know where to start with modernization
            </p>
          </div>
           <div className="lg:border-l max-sm:border-t max-sm:pt-8 border-gray-600 px-10 md:border-l md:mt-10">
            <h1 className="text-3xl text-gray-700">03</h1>
            <p className="pt-20 text-2xl text-gray-700">
                <span className="font-bold">85%</span> of modernization efforts are delayed or canceled
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Percentages;
