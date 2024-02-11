import React from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { ServicesData } from "../data";
import { CgMenuMotion } from "react-icons/cg";
import { IoIosArrowBack } from "react-icons/io";
import { RiArrowUpSFill } from "react-icons/ri";

function Services() {
  return (
    <div>
      <Outlet />
    </div>
  );
}

function Service() {
  const { path } = useParams();
  const service = ServicesData.find((ser) => path === ser.path);

  // services benefit
  const serBenefit = service.serBenefit.list.map((li, i) => (
    <li
      key={i}
      className={`${
        service.serBenefit.list.length > 6
          ? "lg:text-[16.5px] xl:text-[17.5px]"
          : "lg:text-[16.9px] xl:text-[17.9px] "
      }  mr-5 mb-2 text-pretty
      sm:text-base sm:leading-relaxed 
       md:text-xl 
       2xl:text-[28px] 2xl:leading-normal 2xl:mb-4 `}
    >
      {li}
    </li>
  ));

  // strategy steps
  const serStrategy = service.strategy.steps.map((ser, i) => (
    <div
      no={`${i + 1}`}
      key={i}
      className={`step justify-end flex flex-col gap-2 h-fit group relative duration-200
      sm:w-full sm:my-2 sm:items-center 
      lg:w-4/12 lg:mx-2 lg:mt-10 lg:my-0
      2xl:py-5 2xl:mt-8

      before:border-2 before:border-primary before:absolute before:content-[attr(no)] before:text-xl before:duration-200
      before:text-color3 before:bg-color4 before:p-4 hover:before:text-white hover:before:bg-color3
      before:rounded-full before:w-[50px] before:h-[50px] before:flex before:justify-center before:items-center 

      before:sm:-right-2 before:sm:top-[50%] before:sm:translate-y-[-50%] 
      before:md:right-5
      before:lg:-top-[36px] before:lg:right-[50%] before:lg:translate-x-[50%] 
      before:2xl:text-3xl before:2xl:w-[70px] before:2xl:h-[70px] before:2xl:-top-[30px]
   `}
    >
      <div
        className="flex flex-col bg-color4 p-3 group-hover:scale-105 rounded-lg relative
      sm:mr-12 sm:w-10/12
      md:mr-14
      lg:w-full lg:m-0
      "
      >
        <RiArrowUpSFill
          className="absolute text-color4 
          sm:-right-4 sm:rotate-90 sm:top-[50%] sm:translate-y-[-50%]
          lg:-top-4 lg:right-[50%] lg:translate-x-[50%] lg:rotate-0 lg:translate-y-0"
          size={30}
        />
        <h5
          className="font-medium
        sm:text-base
         md:text-lg 
         2xl:text-2xl "
        >
          {ser.name}
        </h5>
        <p
          className=" leading-relaxed
        sm:text-sm
        md:text-base 
        2xl:text-xl "
        >
          {ser.val}
        </p>
      </div>
    </div>
  ));

  return (
    <main
      key={service.id}
      id={service.name}
      className="flex flex-col items-center gap-8"
    >
      {/* top service img  */}
      <div
        className="img-content sm:min-h-fit lg:min-h-[90vh] h-fit w-full bg-cover bg-no-repeat relative before:z-0 flex justify-start sm:gap-8 md:gap-10 items-center flex-col py-6
        before:absolute before:top-0 before:left-0 before:bg-black before:opacity-85 before:w-full before:h-full bg-center"
        style={{ backgroundImage: `url(${service.bgImg})` }}
      >
        <span className="sm:text-3xl md:text-4xl xl:text-5xl 2xl:text-6xl text-white font-bold opacity-40 flex items-center gap-1 self-start text-right mr-2 ">
          <CgMenuMotion className="text-color3 " />
          <span>{service.name}</span>
        </span>
        <div className="container relative z-10 flex items-center justify-between gap-4 h-full">
          <div className="text text-white flex flex-col h-full justify-evenly sm:gap-5 md:gap-7 w-full">
            <h1 className="sm:text-xl xl:text-3xl 2xl:text-5xl font-bold">
              كيف يمكنك الاستفادة من الخدمة
            </h1>
            <ul id="services-benefits" className="list-decimal ">
              <h2 className="sm:text-[17px] md:text-xl xl:text-xl 2xl:text-4xl font-semibold mb-3 2xl:mb-10">
                {service.serBenefit.submain}
              </h2>
              {serBenefit}
            </ul>
            <Link
              className="sm:text-base lg:text-lg 2xl:text-3xl bg-color3 py-2 px-6 rounded-xl w-fit font-semibold flex items-center gap-1 border-2 border-color3
            hover:bg-transparent hover:border-white duration-200 group mr-2 "
            >
              اطلب الخدمة
              <IoIosArrowBack className="group-hover:animate-pulse " />
            </Link>
          </div>
          <img
            src={service.bgImg}
            alt={service.imgAlt}
            className="sm:hidden lg:block 
            lg:w-[450px] lg:h-[300px] lg:max-h-[300px]
            xl:w-[620px] xl:h-[440px] xl:max-h-[460px]
             2xl:w-[710px] 2xl:h-[550px] 2xl:max-h-[550px] rounded-xl shadow-2xl"
          />
        </div>
      </div>
      {/* service info */}
      <div className="container flex flex-col justify-between">
        <h3 className="sm:text-2xl lg:text-3xl 2xl:text-5xl font-semibold mb-6 flex flex-col gap-2">
          خدمة {service.name}
          <q className="sm:text-base lg:text-lg 2xl:text-2xl sm:mr-5 lg:mr-20 font-normal">
            {service.serDesc}
          </q>
        </h3>
        <div className="text w-full flex justify-center sm:flex-col-reverse lg:flex-row gap-5 items-center">
          <ul className="flex flex-col gap-3 2xl:gap-5">
            <li className="sm:text-base lg:text-lg 2xl:text-2xl leading-relaxed 2xl:leading-[1.8]">
              {service.serDesc1}
            </li>
            <li className="sm:text-base lg:text-lg 2xl:text-2xl leading-relaxed 2xl:leading-[1.8]">
              {service.serDesc2}
            </li>
            <li className="sm:text-base lg:text-lg 2xl:text-2xl leading-relaxed 2xl:leading-[1.8]">
              {service.serDesc3}
            </li>
            <li className="sm:text-base lg:text-lg 2xl:text-2xl leading-relaxed 2xl:leading-[1.8]">
              {service.serDesc4}
            </li>
          </ul>
          <img
            src={service.subimg}
            alt={service.imgAlt}
            className="
            lg:w-[550px] lg:h-[400px] 
            sm:w-11/12 sm:h-auto 
    
            2xl:w-[630px] 2xl:h-[480px] rounded-xl shadow-lg"
          />
        </div>
      </div>
      {/* strategy */}
      <div className="container flex flex-col items-center gap-7 h-full mb-16">
        <h3 className="sm:text-2xl text-3xl 2xl:text-5xl font-semibold mb-3 flex flex-col gap-2 w-full">
          استراتيجيتنا في العمل
          <span className="sm:text-base text-lg 2xl:text-2xl sm:mr-10 mr-20 font-normal">
            خطوات بسيطة للوصول الي القمة
          </span>
        </h3>
        <div
          className="steps relative z-10 flex h-full text-white
           sm:flex-col sm:items-end sm:pl-1 sm:justify-end
           md:items-center md:pl-3 md:justify-center
           lg:flex-row lg:p-0 lg:items-start"
        >
          <span
            className=" bg-color4 block rounded-xl absolute
          sm:h-[100%] sm:w-2 sm:right-3
          md:right-10
          lg:w-full lg:right-0 lg:h-2 lg:top-0 
          "
          />
          {serStrategy}
        </div>
      </div>
    </main>
  );
}

export default (Services, Service);
