"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { pc, tab, phone } from "@/app/components/Export";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <div className="w-full pt-30 h-auto bg-white">
      <div className="flex px-36 h-screen max-sm:h-80 max-sm:px-10 max-sm:mt-10">
        <Image
          src={tab}
          alt="Hero Image"
          width={500}
          height={600}
          className="absolute mt-30 max-sm:w-30 max-sm:h-30 max-sm:mt-16"
        />
        <motion.div

        >
          <Image
            src={pc}
            alt="Hero Image"
            height={800}
            className=" absolute z-20 ml-30 max-sm:ml-2 max-sm:w-80"
          />
        </motion.div>
        <Image
          src={phone}
          alt="Hero Image"
          height={400}
          className="absolute z-30 ml-184 mt-24 max-sm:ml-60 max-sm:h-40 max-sm:w-22 max-sm:mt-10"
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
            <button className="btnn px-6 mt-6 max-sm:w-full">    <Link href="https://wa.link/4jye7i">Get in touch</Link></button>
      </div>
    </div>
  );
};

export default Hero;
