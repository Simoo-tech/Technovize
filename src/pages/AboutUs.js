import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";
import { Cards } from "../components/Cards";

export default function AboutUs() {
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
      <div className="container bottom-40 relative  ">
        <div className=" bg-[#2F2D31] flex flex-col justify-center items-center rounded-xl py-10 container gap-10">
          {/* .......about... */}
          <div
            className="flex  flex-col justify-center  gap-10  text-white 
                          max-lg:items-center
                          max-md:gap-16          
                          "
          >
            <h1 className="text-6xl font-bold">من نحن . .</h1>
            <div
              className="flex gap-5 w-full
            max-lg:flex-col max-lg:items-center
            max-md:gap-10

            "
            >
              <p
                className="text-lg
                 sm:px-3
                md:text-base md:px-5 lg:text-xl
               lg:px-10
                text-pretty 
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
          {/* .....goales... */}
          <div
            className="flex flex-col justify-center px-10 gap-10 text-white
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
            className="flex flex-col justify-center mb-16 px-10 gap-10  text-white
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
      <Cards />
    </>
  );
}
