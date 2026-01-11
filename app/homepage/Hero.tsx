"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { pc, tab, phone } from "@/app/components/Export";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <div className="w-full pt-30 h-auto bg-white">
      <div className="flex px-36 h-screen max-sm:hidden">
        <Image
          src={tab}
          alt="Hero Image"
          width={500}
          height={600}
          className="absolute mt-30"
        />
        <motion.div

        >
          <Image
            src={pc}
            alt="Hero Image"
            height={800}
            className=" absolute z-20 ml-30"
          />
        </motion.div>
        <Image
          src={phone}
          alt="Hero Image"
          height={400}
          className="absolute z-30 ml-184 mt-24"
        />
      </div>
      <div className="text-center -mt-14 px-70 max-sm:px-10 w-full pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          ref={ref}
        >
          <h1 className="text-5xl max-sm:text-4xl font-bold ">
            Build with assurance and deliver on schedule
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          ref={ref}
        >
          <p className="text-center mt-6 lg:text-xl lg:px-30">
            {" "}
            We provide a structured, reliable, and professional online presence
            that enhances product credibility and builds trust with customers.
          </p>
        </motion.div>
        <button className="mt-8 bg-blue-500 text-white px-10 py-3 rounded-4xl hover:bg-blue-600 lg:font-bold">
          React Out
        </button>
      </div>
    </div>
  );
};

export default Hero;
