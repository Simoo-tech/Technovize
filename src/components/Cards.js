import React from "react";
import { BiShieldAlt2, BiSupport } from "react-icons/bi";
import { FaCoins, FaRegLightbulb } from "react-icons/fa";
import { GiRibbonMedal } from "react-icons/gi";

export const Cards = () => {
  return (
    <section id="why-us" className="h-fit my-10 w-full relative">
      <span
        className="z-0 absolute top-[50%] bg-color3  translate-y-[-50%]
        sm:w-2 sm:h-5/6 sm:left-[50%] translate-x-[-50%]
        lg:w-11/12 lg:left-10 lg:h-2 lg:translate-x-0
        xl:left-16"
      />
      <div
        className="container flex items-center z-10 relative sm:gap-2 flex-wrap
        sm:flex-col sm:justify-center 
        md:justify-between
        lg:flex-row
        "
      >
        <div
          className="box flex flex-col bg-color4 rounded-lg shadow-xl drop-shadow-xl justify-evenly items-center
            sm:w-9/12 sm:h-fit sm:text-xl sm:py-3 sm:gap-2
            md:py-3 md:px-4 
            lg:w-[190px] lg:h-[120px] 
            xl:w-[220px] xl:h-[140px] "
        >
          <FaRegLightbulb
            color="white"
            className="sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
          />
          <p className="sm:text-lg sm:text-center md:text-xl text-white font-semibold">
            لدينا حلول مبتكرة
          </p>
        </div>
        <div
          className="box flex flex-col bg-color4 rounded-lg shadow-xl drop-shadow-xl justify-evenly items-center
            sm:w-9/12 sm:h-fit sm:text-xl sm:py-3 sm:gap-2
            md:py-3 md:px-4 
            lg:w-[190px] lg:h-[120px] 
            xl:w-[220px] xl:h-[140px]  "
        >
          <BiShieldAlt2
            color="white"
            className="sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
          />
          <p className="sm:text-lg sm:text-center md:text-xl text-white font-semibold">
            حماية قوية
          </p>
        </div>
        <div
          className="box flex flex-col bg-color4 rounded-lg shadow-xl drop-shadow-xl justify-evenly items-center
            sm:w-9/12 sm:h-fit sm:text-xl sm:py-3 sm:gap-2
            md:py-3 md:px-4 
            lg:w-[190px] lg:h-[120px] 
            xl:w-[220px] xl:h-[140px] "
        >
          <BiSupport
            color="white"
            className="sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
          />
          <p className="sm:text-lg sm:text-center md:text-xl text-white font-semibold">
            دعم فني 24/7
          </p>
        </div>
        <div
          className="box flex flex-col bg-color4 rounded-lg shadow-xl drop-shadow-xl justify-evenly items-center
            sm:w-9/12 sm:h-fit sm:text-xl sm:py-3 sm:gap-2
            md:py-3 md:px-4 
            lg:w-[190px] lg:h-[120px] 
            xl:w-[220px] xl:h-[140px] "
        >
          <FaCoins
            color="white"
            className="sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
          />
          <p className="sm:text-lg sm:text-center md:text-xl text-white font-semibold">
            افضل الاسعار
          </p>
        </div>
        <div
          className="box flex flex-col bg-color4 rounded-lg shadow-xl drop-shadow-xl justify-evenly items-center
            sm:w-9/12 sm:h-fit sm:text-xl sm:py-3 sm:gap-2
            md:py-3 md:px-4 
            lg:w-[190px] lg:h-[120px] 
            xl:w-[220px] xl:h-[140px] "
        >
          <GiRibbonMedal
            color="white"
            className="sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl"
          />
          <p className="sm:text-lg sm:text-center md:text-xl text-white font-semibold">
            جودة عالية
          </p>
        </div>
      </div>
    </section>
  );
};
