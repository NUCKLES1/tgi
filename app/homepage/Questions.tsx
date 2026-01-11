"use client";

import React, { useEffect, useState } from "react";
import { FiPlus } from "react-icons/fi";
import { IoArrowForwardOutline } from "react-icons/io5";
import Logo from "../components/Logo";

const Question = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const faqs = [
    {
      question: "Do you offer custom software development for my industry?",
      answer: "We’re open to working with many industries",
      desc: "Our skills have proven to be especially effective in Fintech, MedTech, B2B SaaS, and Marketplaces.",
      p1: "The Grid Innovations has even provided support to other custom software development companies.",
      p2: "Industries for which we offer more refined experience include:",
      p3: "→ Events → MedTech → FinTech and banking → E-commerce → Logistics & Transportation → Government",
      p4: "Companies in these industries can expect us to understand how they deliver custom software solutions and can adapt to or guide the process.",
      p5: "Visit the case studies page to learn what you can expect from us as a software development partner.",
    },
    {
      question: "What makes development process different?",
      answer: "Predictability and speed",
      desc: "We prioritize getting your product to market quickly over building unnecessarily complex systems.",
      p1: "We’re highly collaborative. Since the early years, we have shaped The Grid Innovations to be an understanding and flexible partner that adjusts to the client’s development process.",
      p2: "You set the metrics, help us grasp the business know-how, and our product team presents you with a predictable development plan with a clearly defined budget and deliverables.",
      p3: "Should you need it, The Grid Innovations is ready to advise you on strategy, technology choice, and project management methods so that you develop software as efficiently as possible.",
    },
    {
      question: "Why should i work with you?",
      answer: "4.9/5.0 willing to refer score",
      desc: "Based on 70 impartial reviews verified by Clutch. Most partners stay over 3 years.",
      p1: "The Grid Innovations has 300+ technology talents that can support you in product development at any stage of the project.",
      p2: "Let's talk if you care about:",
      p3: "→ Quick ramp-up time with on-demand team availability and required domain knowledge",
      p4: "→ Development flexibility that lets you easily scale up/down and change the team's composition to refocus",
      p5: "→ An outcome-based work model that keeps our team accountable for improving specific metrics",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div
      className="w-full bg-white pt-24 max-sm:px-4 lg:px-16 md:px-8 h-auto pb-20
    "
    >
      <div className="w--full text-left">
        <h1 className="font-anton text-[56px] max-sm:text-[28px] leading-[100%]">
          FAQ
        </h1>
        <p className="text-[#707070] lg:text-[22px] lg:pt-10 p-2">
          We`re happy to answer your questions
        </p>
      </div>
      <div className="w-full mt-20">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="border-t border-b py-8 border-[#DEDEDE] text-gray-700"
            >
              <div className="w-full flex justify-between px-4">
                <h3
                  className="font-anton text-[36px] max-sm:text-[18px] lg:pr-80"
                  style={{
                    textDecoration: isOpen ? "underline" : "none",
                    transition: "rotate 0.5s ease-in-out",
                  }}
                >
                  {faq.question}
                </h3>
                <button
                  className="w-12 h-12 rounded-full px-3 text-[#786F77] bg-[#F7F7F7]"
                  onClick={() => toggle(index)}
                >
                  {!isOpen ? (
                    <IoArrowForwardOutline className="w-6 h-6 transition-all duration-500 rotate-90" />
                  ) : (
                    <IoArrowForwardOutline
                      className="w-6 h-6 rotate-45 transition-all duration-500"
                      style={{
                        rotate: isOpen ? "-90deg" : "0",
                        transition: "rotate 0.5s ease-in-out",
                      }}
                    />
                  )}
                </button>
              </div>
              <div
                className="w-full overflow-hidden lg:px-4"
                style={{
                  height: isOpen ? (isMobile ? "1000px" : "650px") : "0",
                  display: isOpen ? "block" : "hidden",
                  transition: "height display 0.8s ease-in-out",
                }}
              >
                <div className="bg-gradient-to-r from-gray-100 via-yellow-50 to-blue-200 w-full h-250 lg:flex mt-10 max-sm:h-300">
                  <div className="lg:w-1/2 lg:h-full">
                    <div className="p-10 pt-16">
                      <Logo />
                      <h1 className="pt-10">TGI</h1>
                    </div>
                    
                    <div className="lg:w-120 p-10 pt-44 max-sm:pt-2">
                      <p className="text-gray-700 mt-10 max-sm:w-[80%] lg:w-[70%] lg:text-4xl flex max-sm:text-2xl">
                        <IoArrowForwardOutline className="w-20 max-sm:text-3xl max-sm:hidden" />{" "}
                        {faq.answer}
                      </p>
                      <p className="lg:w-100 pt-8">{faq.desc}</p>
                    </div>
                  </div>

                  <div className="lg:w-1/2 h-full">
                    <div className="p-14 max-sm:p-10 max-sm:-mt-14 flex flex-col gap-4 lg:h-110">
                      <p>{faq.p1}</p>
                      <p>{faq.p2}</p>
                      <p>{faq.p3}</p>
                      <p>{faq.p4}</p>
                      <p>{faq.p5}</p>
                    </div>
                    <div className="pl-14 max-sm:pl-10">
                      <button className="button2 max-sm:px-26 lg:w-50">
                        See cases <span>⟶</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Question;
