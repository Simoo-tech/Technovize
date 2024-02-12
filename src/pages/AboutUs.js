import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { Cards } from "../components/Cards";
import { FaPeopleRoof } from "react-icons/fa6";
import { GoGoal } from "react-icons/go";
import { FaChartLine } from "react-icons/fa";
import imgeStrategic from "../assets/about-us-est.webp";
import imgGoals from "../assets/about-us-goals.webp";
import imgAbout from "../assets/about-us.webp";
import AboutBgImg from "../assets/About-bg.webp";
export default function AboutUs() {
  return (
    <div
      id="About-us"
      className="flex justify-start items-center flex-col gap-5 mb-10"
    >
      {/* title text */}
      <div
        id="text-about"
        className="sm:h-[25vh] md:h-[40vh] lg:h-[45vh] 2xl:h-[30vh] max-h-[45vh] w-full max-w-[3000px] flex flex-col gap-3 relative container justify-center
        before:absolute before:w-full before:h-full before:bg-black before:opacity-75 before:left-0 before:top-0 before:z-10 "
      >
        <img
          src={AboutBgImg}
          alt=""
          loading="eager"
          className="absolute object-cover w-full h-full top-0 left-0 "
        />
        <h1
          className=" font-extrabold text-color3 relative z-20
        sm:text-4xl
        md:text-5xl 
        xl:text-6xl"
        >
          سينوفا تك
        </h1>
        <h3
          className="text-3xl text-white relative z-20
        sm:text-xl sm:mr-5
        md:text-3xl md:mr-10"
        >
          نحن معك خطوة بخطوة لتحويل فكرتك الي بيزنيس حقيقي
        </h3>
      </div>
      <div
        className="cards container flex justify-between items-center gap-5
          sm:flex-col sm:relative         
          lg:flex-row  "
      >
        {/* .......about... */}
        <div
          style={{ backgroundImage: `url(${imgAbout})` }}
          className="flex justify-between items-center bg-cover bg-top text-white gap-6 px-5 py-2 relative min-h-[290px] group duration-200
          before:absolute before:w-full before:h-full before:bg-black before:opacity-80 before:left-0 before:top-0 before:z-0 
          hover:scale-105
          sm:w-full sm:h-fit
          md:w-10/12           
          lg:w-4/12 "
        >
          <div id="about-text" className="flex flex-col gap-4 relative z-10 ">
            <h3
              className="font-extrabold flex items-center gap-4
            sm:text-2xl sm:justify-center 
            md:text-3xl
            lg:justify-start 
            xl:text-3xl"
            >
              من نحن
              <FaPeopleRoof className="text-color3" />
            </h3>
            <p
              className="text-pretty leading-relaxed
              sm:text-base sm:text-center
              md:text-lg
             lg:text-start lg:text-base
             xl:text-base"
            >
              شركة سينوفا تك هي احدي اكبر شركات البرمجة في مصر و الوطن العربي
              معنا يمكنك تحويل مشروعك من مجرد فكرة الي حقيقة من خلال تطوير
              البرامج الخاصة و نشرها من خلال مختصين في مجالات عديدة مثل التسويق
              الاكتروني, تصميم و تطوير المواقع الأكترونية الخاصة, تصميم هوية
              تجارية برامج ادرية و محاسبية, برامج العيادات الطبية, برمجة تطبيقات
              الهاتف
            </p>
            <Link
              to={""}
              className="flex w-fit py-1 px-6 items-center self-center gap-2 bg-color3 text-white border-2 border-color3 group
                duration-300 rounded-lg hover:bg-color3 hover:rounded-md hover:bg-transparent hover:border-white"
            >
              خدماتنا
              <IoIosArrowBack className="group-hover:animate-rightLeft " />
            </Link>
          </div>
        </div>
        {/* .....goales... */}
        <div
          style={{ backgroundImage: `url(${imgGoals})` }}
          className="flex justify-between items-center bg-cover bg-top text-white gap-6 px-5 py-2 relative min-h-[290px] group duration-200
            before:absolute before:w-full before:h-full before:bg-black before:opacity-80 before:left-0 before:top-0 before:z-0 
            hover:scale-105
            sm:w-full sm:h-fit 
            md:w-10/12          
            lg:w-4/12 "
        >
          <div id="about-target" className="flex flex-col gap-3 relative z-10 ">
            <h3
              className="font-extrabold flex items-center gap-4
            sm:text-2xl sm:justify-center 
            md:text-3xl
            lg:justify-start 
            xl:text-3xl"
            >
              هدفنا
              <GoGoal className="text-color3" />
            </h3>
            <p
              className="text-pretty leading-relaxed
              sm:text-base sm:text-center
              md:text-lg
             lg:text-start lg:text-base
             xl:text-base"
            >
              هو تقديم حلول تقنية متقدمة ومبتكرة لتلبية احتياجات عملائها. نسعى
              لتحويل الأفكار إلى واقع رقمي من خلال تطوير مواقع الويب وتطبيقات
              الجوال بأعلى معايير الجودة والأمان. نحن نعتمد على فريق من المطورين
              المحترفين والمبدعين الذين يجمعون بين الخبرة والإلمام بأحدث
              التقنيات. نحن نسعى جاهدين لتحقيق تجارب مستخدم مميزة وملهمة، مما
              يسهم في نجاح مشاريع عملائنا وتحقيق رؤى تقنية فريدة.
            </p>
          </div>
        </div>

        {/* .....Strategic... */}
        <div
          style={{ backgroundImage: `url(${imgeStrategic})` }}
          className="flex justify-between items-center bg-cover bg-top text-white gap-6 px-5 py-2 relative min-h-[290px] group duration-200
          before:absolute before:w-full before:h-full before:bg-black before:opacity-80 before:left-0 before:top-0 before:z-0 
          hover:scale-105
          sm:w-full sm:h-fit   
          md:w-10/12     
          lg:w-4/12"
        >
          <div
            id="about-Strategic"
            className="flex flex-col gap-3 relative z-10 "
          >
            <h3
              className="font-extrabold flex items-center gap-4
            sm:text-2xl sm:justify-center 
            md:text-3xl
            lg:justify-start 
            xl:text-3xl"
            >
              استراتيجيتنا
              <FaChartLine className="text-color3" />
            </h3>
            <p
              className="text-pretty leading-relaxed
              sm:text-base sm:text-center
              md:text-lg
             lg:text-start lg:text-base
             xl:text-base"
            >
              نقوم بتحليل الاحتياجات عبر الستماع إلى متطلباتك وفهم أهدافك
              ورؤيتك. سنعمل معك على وضع استراتيجية تطوير ملائمة تلبي احتياجاتك
              الفريدة. تطوير البرمجيات والوظائف نقوم بتحويل التصميمات إلى واقع
              رقمي من خلال تطوير برمجيات ووظائف متقدمة. نستخدام احدث التقنيات
              لمواكبة العصر الجديد وانتشار موقعك اسرع .
            </p>
          </div>
        </div>
      </div>
      <Cards />
    </div>
  );
}
