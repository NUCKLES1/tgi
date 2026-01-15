import React from "react";

const Expertise = () => {
  return (
    <div className="w-full h-auto bg-[#232020] p-20 max-sm:p-10 lg:flex">
      <div className="lg:w-1/2 flex flex-col gap-16">
        <h1 className="text-white text-5xl lg:w-120 max-sm:text-3xl">
          Bring your app back on track in weeks
        </h1>
        <p className="text-gray-300 pr-20 max-sm:pr-10">
          Move from "how do I even start" to "let's go for it". Work with
          experienced engineers who can rebuild specific parts of your legacy
          software and fix performance issues that have been holding your
          product back for too long.
        </p>
        <button className="button2 bg-[#232020] w-60 ">
          Explain your project
        </button>
      </div>
      <div className="lg:w-1/2 text-right max-sm:pt-20 max-sm:h-auto pb-30">
        <h1 className="uppercase text-blue-300 text-xl mt-10">
          Modernization Roadmap Sprint
        </h1>
        <div className="w-full flex flex-col gap-6 pt-4">
          <p className="text-gray-300 lg:pl-30 ">
            10-day strategic planning that gives you a complete business case
            before you commit.
          </p>
          <p className="text-gray-300 lg:pl-30">
            The roadmap sprint ensures alignment with your project goals, so
            every decision supports your modernization strategy.
          </p>
          <p className="text-gray-300 lg:pl-30">
            You get a prioritized backlog, architecture proposal, migration
            paths for each component, and cost estimates. No guesswork.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Expertise;
