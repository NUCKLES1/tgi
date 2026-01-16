import React from "react";
import Image from "next/image";
import { pro1 } from "../components/Export";

const Review = () => {
  return (
    <div className="h-auto">
      <div className="grid px-2 py-20 bg-white h-auto">
        <div className="w-full h-auto py-4 bg-gray-200 rounded-sm">
          <Image src={pro1} width={80} height={80} alt="" className="rounded-sm  w-full px-6"/>
          <div className="px-6 flex flex-col gap-4 pt-4">
            <p>Micheal Jorde</p>
            <p className="text-xl">"I have nothing but great respect for them"</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
