import React from "react";
import BackgroundVideo from 'next-video/background-video'

const SeeOutcomes = () => {
  return (
    <div className="h-screen w-full px-10 pt-30 max-sm:px-6">
      <div>
        <div className="w-full justify-between lg:flex">
          <div>
            <h1 className="text-5xl pb-10 text-gray-700">
              See profound <br /> outcomes
            </h1>
          </div>
          <div className="w-60 lg:text-right">
            <h1 className=" pb-10 text-gray-700">
              60+ businesses made their product competitive with
              our help
            </h1>
            <button className="btnn">
                Go to cases
            </button>
          </div>
        </div>
        <div className="h-screen w-full border-l border-r mt-10">
       <div className="w-full grid grid-col-2">
  
        </div>     
        </div>
      </div>
    </div>
  );
};

export default SeeOutcomes;


