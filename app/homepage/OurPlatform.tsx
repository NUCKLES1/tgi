"use client"

import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
import { div } from "framer-motion/client";

const Section = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });


  return (
    <div>
      <div className="w-full h-screen max-sm:h-auto flex justify-center items-center lg:px-60 md:pl-20 px-6  bg-gradient-to-r from-gray-100 via-yellow-50 to-blue-200 py-20">
        <div>
              <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          ref={ref}
        >
          <h1 className="text-4xl max-sm:text-3xl text-left lg:leading-12">
            Our platform empowers both small and large{" "}
            <span className="text-blue-300">business</span> owners to seamlessly
            bring their products and services{" "}
            <span className="text-yellow-300">online</span>, enabling them to
            compete and grow in today’s digital{" "}
            <span className="text-purple-300">marketplace.</span>
          </h1>
          <h1></h1>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Section;
