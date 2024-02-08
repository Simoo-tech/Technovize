import React from "react";
import {
  BiShieldAlt2,
  BiSolidHourglassBottom,
  BiSupport,
} from "react-icons/bi";
import { FaCoins, FaRegLightbulb } from "react-icons/fa";
import { GiRibbonMedal } from "react-icons/gi";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div className=" about relative h-[60vh] bg-gray-500  bg-blend-overlay flex justify-between items-center"></div>

      {/* about company... */}
      <div className="container  top-0 right-0 absolute">
        <div
          className=" h-[60vh] flex flex-col  gap-10 justify-center
                sm:flex-col sm:items-center 
                md:justify-center md:items-center
                lg:justify-center lg:items-start
        "
        >
          <h1 className="text-6xl text-white font-bold">عن شركة . . .</h1>
          <h3 className="text-2xl text-white">
            نحن معك خطوة بخطوة لتحويل فكرتك الي بيزنيس حقيقي
          </h3>
        </div>
      </div>
      {/* .......about company end.... */}
      <div className="container   bottom-20 relative  ">
        <div className=" bg-[#2F2D31]  flex flex-col   justify-center items-center">
          {/* .......about... */}
          <div
            className="flex py-10 flex-col justify-center px-10 gap-10  text-white 
                          max-lg:items-center
                          max-md:gap-16          
                          "
          >
            <h1 className="text-6xl font-bold">من نحن . .</h1>
            <div
              className="flex  gap-5 w-[80%]
            max-lg:flex-col max-lg:items-center
            max-md:gap-10

            "
            >
              <p
                className="text-lg  w-7/12
                max-md:text-sm
              "
              >
                شركة تكنو فايز هي احدي اكبر شركات البرمجة في مصر و الوطن العربي
                معنا يمكنك تحويل مشروعك من مجرد فكرة الي حقيقة من خلال تطوير
                البرامج الخاصة و نشرها من خلال مختصين في مجالات عديدة مثل
                التسويق الاكتروني, تصميم و تطوير المواقع الأكترونية الخاصة,
                تصميم هوية تجارية برامج ادرية و محاسبية, برامج العيادات الطبية,
                برمجة تطبيقات الهاتف
              </p>
              <Link
              to={""}
              className="flex w-fit py-2 sm:text-base md:text-lg px-6 items-center gap-2 bg-orange-900 text-white group
          duration-300 rounded-l-2xl hover:bg-color3 hover:rounded-md hover:-translate-x-2
          
          md:h-[60px]          "
            >
              المزيد عنا
              <IoIosArrowBack className="group-hover:animate-rightLeft" />
            </Link>
            </div>
          </div>
          {/* .....gooles... */}
          <div
            className="flex  h-[50vh] flex-col justify-center  px-10 gap-10  text-white
                          max-lg:items-center
                          max-md:gap-16          

          "
          >
            <h1 className="text-6xl font-bold">هدفنا </h1>
            <div
              className="flex  gap-5 w-[80%]
            max-lg:flex-col max-lg:items-center
            "
            >
              <p
                className="text-lg  w-7/12              
               max-md:text-sm

"
              >
                هو تقديم حلول تقنية متقدمة ومبتكرة لتلبية احتياجات عملائها. نسعى
                لتحويل الأفكار إلى واقع رقمي من خلال تطوير مواقع الويب وتطبيقات
                الجوال بأعلى معايير الجودة والأمان. نحن نعتمد على فريق من
                المطورين المحترفين والمبدعين الذين يجمعون بين الخبرة والإلمام
                بأحدث التقنيات. نحن نسعى جاهدين لتحقيق تجارب مستخدم مميزة
                وملهمة، مما يسهم في نجاح مشاريع عملائنا وتحقيق رؤى تقنية فريدة.
              </p>
              <Link
              to={""}
              className="flex w-fit py-2 sm:text-base md:text-lg px-6 items-center gap-2 bg-orange-900 text-white group
          duration-300 rounded-l-2xl hover:bg-color3 hover:rounded-md hover:-translate-x-2
          
          md:h-[60px]
          "
            >
              المزيد عنا
              <IoIosArrowBack className="group-hover:animate-rightLeft" />
            </Link>
            </div>
          </div>
          {/* .....estrategy... */}
          <div
            className="flex  h-[50vh]  flex-col justify-center mb-16 px-10 gap-10  text-white
                                    max-lg:items-center
                                    max-md:mt-14         

          "
          >
            <h1 className="text-6xl font-bold">استراجياتنا </h1>
            <div
              className="flex  gap-5 w-[80%]
                        max-lg:flex-col max-lg:items-center

            "
            >
              <p
                className="text-lg w-7/12
                max-md:text-sm
              
              "
              >
                نقوم بتحليل الاحتياجات: سنقوم بالاستماع إلى متطلباتك وفهم أهدافك
                ورؤيتك. سنعمل معك على وضع استراتيجية تطوير ملائمة تلبي احتياجاتك
                الفريدة. تطوير البرمجيات والوظائف: سنقوم بتحويل التصميمات إلى
                واقع رقمي من خلال تطوير برمجيات ووظائف متقدمة. نستخدام احدث
                التقنيات لمواكبة العصر الجديد وانتشار موقعك اسرع , هناك خبرا
                سيقدمون افضل الحلول للمشكلات التي ستواجك خلال بدا مشروعك و
                سيقدمون اقتراحات تجعل مشروعك افضل و اوضح
              </p>
              <Link
              to={""}
              className="flex w-fit py-2 sm:text-base md:text-lg px-6 items-center gap-2 bg-orange-900 text-white group
          duration-300 rounded-l-2xl hover:bg-color3 hover:rounded-md hover:-translate-x-2
          md:h-[60px]          "
            >
              المزيد عنا
              <IoIosArrowBack className="group-hover:animate-rightLeft" />
            </Link>
            </div>
          </div>
        </div>
      </div>
      <section id="why-us" className="h-fit  my-10 w-full relative">
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
            className="box flex flex-col bg-color4 rounded-lg shadow-xl drop-shadow-xl justify-evenly items-center cursor-pointer 
            sm:w-9/12 sm:h-fit sm:text-xl sm:py-3 sm:gap-2 
            md:py-3 md:px-4 
            lg:w-[190px] lg:h-[120px] 
            xl:w-[220px] xl:h-[140px] "
          >
            <FaRegLightbulb
              color="white"
              className="sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl hover:scale-150 duration-300  cursor-pointer "
            />
            <p className="sm:text-lg sm:text-center md:text-xl text-white font-semibold">
              لدينا حلول مبتكرة
            </p>
          </div>
          <div
            className="box flex flex-col bg-color4 rounded-lg shadow-xl drop-shadow-xl justify-evenly items-center cursor-pointer 
            sm:w-9/12 sm:h-fit sm:text-xl sm:py-3 sm:gap-2 
            md:py-3 md:px-4 
            lg:w-[190px] lg:h-[120px] 
            xl:w-[220px] xl:h-[140px]  "
          >
            <BiShieldAlt2
              color="white"
              className="sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl hover:scale-150 duration-300"
            />
            <p className="sm:text-lg sm:text-center md:text-xl text-white font-semibold">
              حماية قوية
            </p>
          </div>
          <div
            className="box flex flex-col bg-color4 rounded-lg shadow-xl drop-shadow-xl justify-evenly items-center cursor-pointer 
            sm:w-9/12 sm:h-fit sm:text-xl sm:py-3 sm:gap-2
            md:py-3 md:px-4 
            lg:w-[190px] lg:h-[120px] 
            xl:w-[220px] xl:h-[140px] "
          >
            <BiSupport
              color="white"
              className="sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl hover:scale-150 duration-300"
            />
            <p className="sm:text-lg sm:text-center md:text-xl text-white font-semibold">
              دعم فني 24/7
            </p>
          </div>
          <div
            className="box flex flex-col bg-color4 rounded-lg shadow-xl drop-shadow-xl justify-evenly items-center cursor-pointer 
            sm:w-9/12 sm:h-fit sm:text-xl sm:py-3 sm:gap-2
            md:py-3 md:px-4 
            lg:w-[190px] lg:h-[120px] 
            xl:w-[220px] xl:h-[140px] "
          >
            <FaCoins
              color="white"
              className="sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl hover:scale-150 duration-300"
            />
            <p className="sm:text-lg sm:text-center md:text-xl text-white font-semibold">
              افضل الاسعار
            </p>
          </div>
          <div
            className="box flex flex-col bg-color4 rounded-lg shadow-xl drop-shadow-xl justify-evenly items-center cursor-pointer 
            sm:w-9/12 sm:h-fit sm:text-xl sm:py-3 sm:gap-2
            md:py-3 md:px-4 
            lg:w-[190px] lg:h-[120px] 
            xl:w-[220px] xl:h-[140px] "
          >
            <GiRibbonMedal
              color="white"
              className="sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl hover:scale-150 duration-300"
            />
            <p className="sm:text-lg sm:text-center md:text-xl text-white font-semibold">
              جودة عالية
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
