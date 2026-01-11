"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { IoArrowForwardOutline } from "react-icons/io5";
import { motion, useInView } from "framer-motion";

const Effective = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <div className="w-full mt-40 max-sm:mt-20 px-20 max-sm:px-4">
      <div className="w-full h-full bg-white rounded-[2rem] pb-6">
        <div className="h-full pt-10">
          <div className="w-full justify-between lg:flex lg:pr-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut" }}
              ref={ref}
            >
              <h1 className="text-4xl max-sm:text-2xl p-12 max-sm:p-6 pb-10">
                Efficient and Reliable <br /> Software Development
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, ease: "easeOut" }}
              ref={ref}
            >
              <h1 className="text-gray-400 max-lg:-pl-10 lg:mt-26 max-sm:pl-6 lg:text-lg uppercase">
                what we do
              </h1>
            </motion.div>
          </div>
          <div className="grid grid-cols-3 max-sm:grid-cols-1 px-5 gap-3 mt-20">
 
              <div className="px-4 w-full bg-amber-200 h-auto pb-6 rounded-2xl pt-8 item">
                           <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: "easeOut" }}
              ref={ref}
            >
                <Link href="/modernization">
                  <h1 className="text-3xl flex text-gray-700 max-sm:text-2xl">
                    {" "}
                    01 <IoArrowForwardOutline className="mt-1" />
                  </h1>
                  <h1 className="text-3xl text-gray-700 max-sm:text-2xl">
                    {" "}
                    PLATFORM MODERNIZATION
                  </h1>
                  <p className="text-gray-700 mt-26 max-sm:mt-10 text-lg">
                    Upgrade your platform with a clear, structured plan that
                    enables faster delivery and improved performance—without
                    disrupting ongoing business operations.
                  </p>
                </Link>
                </motion.div>
              </div>
            <div className="px-4 w-full bg-blue-200 h-auto pb-6 rounded-2xl pt-8 item">
              <h1 className="text-3xl flex text-gray-700 max-sm:text-2xl">
                {" "}
                02 <IoArrowForwardOutline className="mt-1" />
              </h1>
              <h1 className="text-3xl text-gray-700 max-sm:text-2xl">
                {" "}
                WEB <br /> DEVELOPMENT
              </h1>
              <p className="text-gray-700 mt-26 max-sm:mt-10 text-lg">
                Our web development process is built on professionalism,
                precision, and performance. We design and develop websites using
                modern, industry-standard technologies that ensure reliability,
                scalability, and long-term value for your business.
              </p>
            </div>
            <div className="px-4 w-full bg-purple-200 h-auto pb-6 rounded-2xl pt-8 item">
              <h1 className="text-3xl flex text-gray-700 max-sm:text-2xl ">
                {" "}
                03 <IoArrowForwardOutline className="mt-1" />
              </h1>
              <h1 className="text-3xl text-gray-700 max-sm:text-2xl">
                {" "}
                SOFTWARE <br /> DELIVERY
              </h1>
              <p className="text-gray-700 mt-26 max-sm:mt-10 text-lg">
                Build, upgrade or rearchitect your digital products on time with
                the help of a self-managed engineering team.
              </p>
            </div>
          </div>

          {/*<p className='text-xl pb-6'>
        Effective Solutions for Your Online Business
        
        
        
        At TGI, we understand the challenges faced by businesses in establishing a strong online presence. Our platform offers effective solutions tailored to meet the unique needs of your business, ensuring you can reach your target audience and achieve your goals.</p>*/}
        </div>
      </div>
    </div>
  );
};

export default Effective;
