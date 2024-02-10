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
        service.serBenefit.list.length > 6 ? "text-[17.5px]" : "text-[17.9px] "
      } text-pretty mr-5 mb-2 leading-relaxed`}
    >
      {li}
    </li>
  ));

  // strategy steps
  const serStrategy = service.strategy.steps.map((ser, i) => (
    <div
      no={`${i + 1}`}
      key={i}
      className={`card w-4/12 mt-8 m-2 bg-color4 flex flex-col gap-2 p-4 h-fit relative rounded-lg hover:scale-105 duration-200 ease-in-out
    before:border-2 before:border-primary before:absolute before:content-[attr(no)] before:text-xl hover:before:text-white hover:before:bg-color3
   before:text-color3 before:-top-[60px] before:left-[50%] before:translate-x-[-50%] before:bg-color4 before:p-4
   before:rounded-full before:w-[50px] before:h-[50px] before:flex before:justify-center before:items-center `}
    >
      <RiArrowUpSFill
        className="absolute -top-4 left-[50%] translate-x-[-50%] text-color4 "
        size={30}
      />
      <h5 className="text-lg font-medium">{ser.name}</h5>
      <p className="leading-relaxed ">{ser.val}</p>
    </div>
  ));

  return (
    <main key={service.id} id={service.name}>
      {/* top service img  */}
      <div
        className="img-content h-[90vh] w-full bg-cover relative before:z-0 flex justify-between items-center flex-col py-3
        before:absolute before:top-0 before:left-0 before:bg-black before:opacity-85 before:w-full before:h-full bg-center"
        style={{ backgroundImage: `url(${service.bgImg}) ` }}
      >
        <span className=" text-4xl text-white font-bold opacity-40 flex items-center gap-1 self-start text-right mr-2">
          <CgMenuMotion className="text-color3 " size={40} />
          <span>{service.name}</span>
        </span>
        <div className="container relative z-10 flex items-center justify-between gap-4 min-h-[90%]">
          <div className="text text-white flex flex-col gap-5 h-full justify-center w-full">
            <h1 className="text-3xl font-bold">
              كيف يمكنك الاستفادة من الخدمة
            </h1>
            <ul id="services-benefits" className="list-decimal ">
              <h2 className="text-xl font-semibold mb-2">
                {service.serBenefit.submain}
              </h2>
              {serBenefit}
            </ul>
            <Link
              className="text-lg bg-color3 py-2 px-6 rounded-xl w-fit font-semibold flex items-center gap-1 border-2 border-color3
            hover:bg-transparent hover:border-white duration-200 group mr-2 "
            >
              اطلب الخدمة
              <IoIosArrowBack className="group-hover:animate-pulse " />
            </Link>
          </div>
          <img
            src={service.bgImg}
            alt={service.imgAlt}
            className="w-[630px] max-w-[630px] h-[460px] max-h-[460px] rounded-xl shadow-2xl"
          />
        </div>
      </div>
      {/* service info */}
      <div className="container flex justify-between items-center flex-row-reverse py-10">
        <img
          src={service.subimg}
          alt={service.imgAlt}
          className="w-[550px] h-[400px] rounded-xl shadow-lg"
        />
        <div className="text w-7/12 flex flex-col justify-center">
          <h3 className="text-3xl font-semibold mb-6 flex flex-col gap-1">
            خدمة {service.name}
            <span className="text-lg mr-20 font-normal">{service.serDesc}</span>
          </h3>
          <ul className="flex flex-col gap-3">
            <li className="text-lg leading-relaxed">{service.serDesc1}</li>
            <li className="text-lg leading-relaxed">{service.serDesc2}</li>
            <li className="text-lg leading-relaxed">{service.serDesc3}</li>
            <li className="text-lg leading-relaxed">{service.serDesc4}</li>
          </ul>
        </div>
      </div>
      {/* strategy */}
      <div className="container flex flex-col py-10 items-center gap-7">
        <h3 className="text-3xl font-semibold mb-3 flex flex-col gap-1 w-full">
          استراتيجيتنا في العمل
          <span className="text-lg mr-20 font-normal">
            خطوات بسيطة للوصول الي القمة
          </span>
        </h3>
        <div className="steps w-full flex items-center justify-between flex-col">
          <span className="w-11/12 bg-color4 h-2 block rounded-xl  " />
          <div className="step relative z-10 flex justify-between text-white w-full">
            {serStrategy}
          </div>
        </div>
      </div>
    </main>
  );
}

export default (Services, Service);
