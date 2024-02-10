import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { Cards } from "../components/Cards";
import { FaPeopleRoof } from "react-icons/fa6";
import { GoGoal } from "react-icons/go";
import { FaChartLine } from "react-icons/fa";
import imgeStrategic from "../assets/est.jpg";
import imgGoals from "../assets/goals.jpg";
import imgAbout from "../assets/about.jpg";

export default function AboutUs() {
  return (
    <>
      <div className=" about relative h-[60vh] bg-gray-400  bg-blend-overlay flex justify-between items-center"></div>

      {/* about company... */}
      <div className="container  top-0 right-0 absolute">
        <div
          className=" h-[60vh] flex flex-col  gap-10 justify-center px-4
                sm:flex-col sm:items-center 
                md:justify-center md:items-start
                lg:justify-center lg:items-start
        "
        >
          <h1 className="text-6xl font-extrabold text-color3 3  ">تكنو فايز</h1>
          <h3 className="text-2xl text-white">
            نحن معك خطوة بخطوة لتحويل فكرتك الي بيزنيس حقيقي
          </h3>
        </div>
      </div>
      {/* .......about company end.... */}
      <div className="container bottom-28  relative  ">
        <div className=" bg-[#252427e3] flex flex-col justify-center items-center rounded-xl py-12 px-14 container gap-14">
          {/* .......about... */}
          <div
            className="flex  justify-between  items-center   text-white
            max-lg:items-center lg:mt-16
          max-md:mt-10   lg:w-8/12      
          "
          >
            <div
              className="flex  flex-col gap-4 
               max-md:items-Center *:md:mt-6 
            "
            >
              <h3
                className="text-4xl font-extrabold flex items-center gap-4
            sm:text-3xl  sm:items-center  
            "
              >
                من نحن
              <FaPeopleRoof  className='text-color3'/>
              </h3>


              <p
                className="text-lg 
                sm:text-base sm:mr-4 sm:items-start  
                md:text-base md:w-10/12 
                lg:w-9/12
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
          
          md:h-[60px]    
          sm:mr-4  sm:h-[35px]
                "
              >
                المزيد عنا
                <IoIosArrowBack className="group-hover:animate-rightLeft " />
              </Link>
            </div>
            <img
              className="w-5/12   rounded-xl  max-md:hidden"
              src={imgAbout}
              alt="imgeStrategic"
            />
          </div>
          {/* .....goales... */}
          <div
            className="flex  justify-evenly items-center gap-14  text-white    lg:w-8/12      
              max-lg:items-center
          "
          >
            <img
              className="w-4/12 max-md:hidden  rounded-xl"
              src={imgGoals}
              alt=""
            />

            <div
              className="flex flex-col justify-between gap-8 
            max-lg:flex-col max-lg:items-start
            sm:itms-start
            "
            >
              <h3
                className="  text-4xl font-extrabold items-center flex gap-4
               sm:items-center
               max-lg:text-right 
            "
              >
                هدفنا<GoGoal className='text-color3'/>
              </h3>

              <p
                className="text-lg  lg:w-11/12          
               max-md:text-md
               sm:text-base 
               sm:mr-4 sm:items-start"
              >
                هو تقديم حلول تقنية متقدمة ومبتكرة لتلبية احتياجات عملائها. نسعى
                لتحويل الأفكار إلى واقع رقمي من خلال تطوير مواقع الويب وتطبيقات
                الجوال بأعلى معايير الجودة والأمان. نحن نعتمد على فريق من
                المطورين المحترفين والمبدعين الذين يجمعون بين الخبرة والإلمام
                بأحدث التقنيات. نحن نسعى جاهدين لتحقيق تجارب مستخدم مميزة
                وملهمة، مما يسهم في نجاح مشاريع عملائنا وتحقيق رؤى تقنية فريدة.
              </p>
            </div>
          </div>

          {/* .....Strategic... */}
          <div
            className="flex  justify-between  items-center   text-white
              max-lg:items-center
              max-md:mt-14   lg:w-8/12      
          "
          >
            <div
              className="flex  flex-col gap-8 
               max-md:items-Center
            "
            >
              <h3
                className="text-4xl font-extrabold flex items-center gap-4
            sm:text-center
             lg:text-start 
            "
              >
             استراجياتنا
             <FaChartLine className='text-color3'/>
             </h3>
              <p
                className="
                text-base  sm:items-start  sm:w-full  max-md:text-md max-md:mr-4
                lg:w-10/12
                md:w-10/12
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
            </div>
            <img
              className="w-4/12   rounded-xl  max-md:hidden"
              src={imgeStrategic}
              alt="imgeStrategic"
            />
          </div>
        </div>
      </div>
      <Cards />
    </>
  );
}
