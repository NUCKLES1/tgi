"use client";

import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { pro1, pro2, pro3, pro4, pro5, pro6, pro7 } from "../components/Export";
import BackgroundVideo from "next-video/background-video";

const SeeOutcomes = () => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <div className="h-auto w-full px-10 pt-30 max-sm:px-2">
      <div>
        <div className="w-full justify-between lg:flex max-sm:px-4">
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
        <div className="h-auto w-full lgborder-l lg:border-r mt-10">
          <div className="w-full h-auto grid md:grid-col-2 gap-12">
            <div className="bg-white pt-4 px-2 pb-8 rounded-sm">
              <Link href={"https://www.soilboy.sg/"}>
                <Image src={pro3} width={500} height={400} alt="" />
                <div className="p-4 text-gray-800">
                  <h1 className="text-xl underline">Soilboy</h1>
                  <h2>
                    built and modernize their marketplace which is now used by
                    7m+ users
                  </h2>
                  <p></p>
                </div>
              </Link>
            </div>
            <div className="bg-white pt-4 px-2 pb-8 rounded-sm">
              <Image src={pro1} width={600} height={400} alt="" />
              <div className="p-4 text-gray-800">
                <h1 className="text-xl underline">EZYShop</h1>
                <h2>
                  Achieved online presence for shopping platform for a retail chain with 16+
                  stores
                </h2>
                <p></p>
              </div>
            </div>
            <div className="bg-white pt-4 px-2 pb-8 rounded-sm">
              <Link href={"https://augen.pro/"}>
                <BackgroundVideo
                  src="https://res.cloudinary.com/dbc4muo4t/video/upload/v1768491895/pro9_lsxiua.mp4"
                  className="w-full"
                />
                <div className="p-4 text-gray-800">
                  <h1 className="text-xl underline">Augen</h1>
                  <h2>
                   help achieved a 90% increase in user engagement through the support of our team website redesign and development.
                  </h2>
                  <p></p>
                </div>
              </Link>
            </div>
            <div className="bg-white pt-4 px-2 pb-8 rounded-sm">
              <Link href={"https://www.supernaturalkitchen.com/"}>
                <Image src={pro4} width={600} height={400} alt="" />
                <div className="p-4 text-gray-800">
                  <h1 className="text-xl underline">Supernatural</h1>
                  <h2>
                   Facilitated the user experience and flow for bettwe user experience.
                  </h2>
                  <p></p>
                </div>
              </Link>
            </div>

            <div className="bg-white pt-4 px-2 pb-8 rounded-sm">
              <Link href={"https://www.insteon.com/"}>
                <Image src={pro5} width={600} height={400} alt="" />
                <div className="p-4 text-gray-800">
                  <h1 className="text-xl underline">Instean</h1>
                  <h2>
                    Our client builds a custom payment integration for Insteon.
                  </h2>
                  <p></p>
                </div>
              </Link>
            </div>
            <div className="bg-white pt-4 px-2 pb-8 rounded-sm">
              <Link href={"https://lovi.care/"}>
                <BackgroundVideo
                  src="https://res.cloudinary.com/dbc4muo4t/video/upload/v1768493203/pro11_zl28iz.mp4"
                  className="w-full"
                />
                <div className="p-4 text-gray-800">
                  <h1 className="text-xl underline">Lovi</h1>
                  <h2>
                   Our client got seamless user experience that significantly boosted customer satisfaction and retention. 
                  </h2>
                  <p></p>
                </div>
              </Link>
            </div>
            <div className="bg-white pt-4 px-2 pb-8 rounded-sm">
              <Link href={"https://emlid.com/"}>
                <Image src={pro7} width={600} height={400} alt="" />
                <div className="p-4 text-gray-800">
                  <h1 className="text-xl underline">Emlid</h1>
                  <h2>
                    built and modernize their marketplace that is now used 7m+
                    users
                  </h2>
                  <p></p>
                </div>
              </Link>
            </div>
            <div className="bg-white pt-4 px-2 pb-8 rounded-sm">
              <Link href={"https://afoxevent.com/"}>
                <Image src={pro6} width={600} height={400} alt="" />
                <div className="p-4 text-gray-800">
                  <h1 className="text-xl underline">Afoxevent</h1>
                  <h2>
                    Improved user engagement by 50% through a complete website development overhaul.
                  </h2>
                  <p></p>
                </div>
              </Link>
            </div>
            <div className="bg-white pt-4 px-2 pb-8 rounded-sm">
              <Link href={"https://silencio.es/"}>
                <BackgroundVideo
                  src=" https://res.cloudinary.com/dbc4muo4t/video/upload/v1768492671/pro10_jfpm8v.mp4"
                  className="w-full"
                />
                <div className="p-4 text-gray-800">
                  <h1 className="text-xl underline">Silencio</h1>
                  <h2>
                   built a futuristic website that captivates users with its innovative design and seamless functionality.
                  </h2>
                  <p></p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeeOutcomes;
