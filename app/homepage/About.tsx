"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { dev } from "../components/Export";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true, margin: "-50px" });

  const ref2 = useRef(null);
  const isInView2 = useInView(ref2, { once: true, margin: "-50px" });

  return (
    <div>
      <div className="w-full  lg:flex">
        <div className="w-1/2 h-full bg-amber-200 max-sm:w-full pb-19">
          <div className="p-20 max-sm:p-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut" }}
              ref={ref}
            >
              <Image
                src={dev}
                width={500}
                height={600}
                className="object-cover mt-20 img-border max-sm:w-150"
                alt="About Us"
              />
            </motion.div>
          </div>
        </div>

        <div className="w-1/2 max-sm:w-full h-full bg-gradient-to-t from-amber-100  to-amber-200 max-sm:bg-gradient-to-l max-sm:from-amber-100 max-sm:-mt-10  max-sm:to-amber-200 pb-30 max-sm:pb-20">
          <div className="pb-10 pt-10 max-sm:m-6 m-10 lg:border-b">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView1 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut" }}
              ref={ref1}
            >
              <div className="lg:hidden">
                <h1>ABOUT US</h1>
              </div>
              <h1 className="text-4xl max-sm:text-2xl text-gray-800 lg:pr-20 max-sm:mt-4">
                “Let us build your website, to expand your product reach and
                services”
              </h1>
            </motion.div>
          </div>
          <div className="max-sm:px-4 px-10 justify-between lg:flex">
            <div className="max-sm:hidden">
              <h1>ABOUT US</h1>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView2 ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeOut" }}
              ref={ref2}
            >
              <div className="lg:w-80 max-sm:mt-4">
                <h1>
                  As said by CTO Bart van Muijen of GOconnectIT, who’s been
                  working hand in hand with our engineers for over 4 years. How
                  can we help?
                </h1>

                <button className="button1 mt-20 px-12.5 max-sm:px-32 py-4">
                  <Link href="https://wa.link/4jye7i">
                    Explain your project
                  </Link>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
