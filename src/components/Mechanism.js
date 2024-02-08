import React from "react";
import bgImg from "../assets/Mechanism.jpg";
import { AiOutlineSetting } from "react-icons/ai";

export const Mechanism = () => {
  return (
    <section
      id="Mechanism"
      style={{ backgroundImage: `url(${bgImg})` }}
      className=" w-full container py-5 bg-contain bg-no-repeat bg-white bg-center relative
      before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black before:opacity-80 before:z-0 group"
    >
      <div className="container flex flex-col gap-10 relative z-10 text-white">
        <div className="top-text ">
          <h1 className="text-3xl font-semibold flex items-center gap-3">
            الية العمل في
            <AiOutlineSetting
              className="text-color3 group-hover:rotate-180 duration-500"
              size={35}
            />
          </h1>
          <h2 className="text-lg font-normal mr-16">
            خطوات بسيطة لتحويل الفكرة الي حقيقة
          </h2>
        </div>
        <div className="boxs flex">
          <div className="box">
            <span>1</span>
            <p>اختر الخدمة</p>
          </div>
          <div className="box">
            <span>2</span>
            <p>عرض السعر</p>
          </div>
          <div className="box">
            <span>3</span>
            <p>بدا في التنفيذ</p>
          </div>
          <div className="box">
            <span>4</span>
            <p>التسليم </p>
          </div>
        </div>
      </div>
    </section>
  );
};
