"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const SeeOutcomes = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div className="h-screen w-full px-10 pt-30 max-sm:px-6">
      <div>
        <div className="w-full justify-between lg:flex">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut" }}
              ref={ref}
            >
              <h1 className="text-5xl pb-10 text-gray-700">
                See profound <br /> outcomes
              </h1>
            </motion.div>
          </div>
          <div className="w-60 lg:text-right">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
              ref={ref}
            >
              <h1 className=" pb-10 text-gray-700">
                60+ businesses made their product competitive with our help
              </h1>
              <button className="btnn">Go to cases</button>
            </motion.div>
          </div>
        </div>
        <div className="h-screen w-full border-l border-r mt-10">
          <div className="w-full grid grid-col-2"></div>
        </div>
      </div>
    </div>
  );
};

export default SeeOutcomes;
