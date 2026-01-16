import React from "react";
import Logo from "../components/Logo";

const Percentages = () => {
  return (
    <div className="pb-20 h-auto bg-yellow-200 w-full max-sm:px-6 px-20 py-20">
      <div className="flex flex-col gap-10">
        <h2 className="text-gray-400 uppercase">market insight</h2>
        <div className="mt-20 max-sm:mt-10">
          <Logo />
        </div>

        <div className="w-full border-t border-gray-400 mt-16 pt-12 h-80">
          <h1 className="text-5xl max-sm:text-3xl lg:w-150 text-gray-600">
          Your developers start shipping AI-enhanced features within the first week using battle-tested patterns tailored to your tech stack and workflows
          </h1>
        </div>
        <div className="pb-20">
        <div className="grid grid-cols-3 max-sm:grid-cols-1 w-full max-sm:gap-10  lg:border-r lg:border-gray-700">
          <div className="lg:border-l max-sm:border-t max-sm:pt-8 border-gray-600 px-10 md:border-l">
            <h1 className="text-3xl text-gray-700">FRAGMENTED ADOPTION</h1>
            <p className="pt-20 text-2xl text-gray-700">
             Developers experiment with AI tools individually, but what works for one person rarely scales to the whole team.
            </p>
          </div>
           <div className="lg:border-l max-sm:border-t max-sm:pt-8 border-gray-600 px-10 md:border-l">
            <h1 className="text-3xl text-gray-700">DURABLE SKILL FOUNDATION</h1>
            <p className="pt-20 text-2xl text-gray-700">
              Transfer knowledge that stays with your team permanently, creating capability that compounds over time as AI technology evolves
            </p>
          </div>
           <div className="lg:border-l max-sm:border-t max-sm:pt-8 border-gray-600 px-10 md:border-l md:mt-10">
            <h1 className="text-3xl text-gray-700">Strategic AI integration</h1>
            <p className="pt-20 text-2xl text-gray-700">
          Your entire development team works with AI tools through a proven framework that connects to your actual codebase, workflows, and business context
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Percentages;
