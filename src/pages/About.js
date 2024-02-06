import React from "react";

function About() {
  return (
    <>
      <div className=" about relative h-[60vh] bg-gray-400 flex justify-between items-center"></div>
       
       {/* about company... */}
      <div className="container  top-0 right-0 absolute">
        <div className=" h-[60vh] flex flex-col  gap-10 justify-center">
          <h1 className="text-6xl text-white font-bold">عن شركة . . .</h1>
          <h3 className="text-2xl text-white">
            نحن معك خطوة بخطوة لتحويل فكرتك الي بيزنيس حقيقي
          </h3>
        </div>
      </div>
      {/* .......about company end.... */}
      <div className="container left-12 w-12/12 bottom-20 relative flex ">
        <div className=" bg-[#2F2D31] h-full flex flex-col   justify-center items-center">
          {/* .......about... */}
          <div className="flex py-10 flex-col justify-center px-10 gap-10  text-white ">
            <h1 className="text-6xl font-bold">من نحن . .</h1>
            <div className="flex  gap-5 w-[80%]">
              <p className="text-2xl ">
              شركة تكنو فايز هي احدي اكبر شركات البرمجة في مصر و الوطن العربي  معنا يمكنك تحويل مشروعك
 من مجرد فكرة الي حقيقة من خلال تطوير البرامج الخاصة
 و نشرها من خلال مختصين في مجالات عديدة مثل التسويق الاكتروني, تصميم و تطوير المواقع الأكترونية الخاصة, تصميم هوية تجارية
 برامج ادرية و محاسبية, برامج العيادات الطبية, برمجة تطبيقات الهاتف
              </p>
              <butto className="bg-color3 h-[70px] text-white px-10 py-2  text-center flex items-center  rounded-lg font-bold ">
                المزيد
              </butto>
            </div>
          </div>
          {/* .....gooles... */}
          <div className="flex  h-[50vh] flex-col justify-center  px-10 gap-10  text-white ">
            <h1 className="text-6xl font-bold">هدفنا </h1>
            <div className="flex  gap-5 w-[80%]">
              <p className="text-2xl ">
              هو تقديم حلول تقنية متقدمة ومبتكرة لتلبية احتياجات عملائها. نسعى لتحويل الأفكار إلى واقع رقمي من خلال تطوير مواقع الويب وتطبيقات الجوال بأعلى معايير الجودة والأمان. 
نحن نعتمد على فريق من المطورين المحترفين والمبدعين الذين يجمعون بين الخبرة والإلمام بأحدث التقنيات. نحن نسعى جاهدين لتحقيق تجارب مستخدم مميزة وملهمة، مما يسهم في نجاح مشاريع عملائنا وتحقيق رؤى تقنية فريدة.
              </p>
              <butto className="bg-color3 h-[70px] text-white px-10 py-2  text-center flex items-center  rounded-lg font-bold ">
                المزيد
              </butto>
            </div>
          </div>
          {/* .....estrategy... */}
          <div className="flex  h-[50vh]  flex-col justify-center mb-16 px-10 gap-10  text-white ">
            <h1 className="text-6xl font-bold">استراجياتنا </h1>
            <div className="flex  gap-5 w-[80%] ">
              <p className="text-2xl ">
              نقوم بتحليل الاحتياجات: سنقوم بالاستماع إلى متطلباتك 
              وفهم أهدافك ورؤيتك. سنعمل معك على وضع استراتيجية تطوير ملائمة تلبي احتياجاتك الفريدة.
تطوير البرمجيات والوظائف: سنقوم بتحويل التصميمات إلى واقع رقمي من خلال تطوير برمجيات ووظائف متقدمة.
نستخدام احدث التقنيات لمواكبة العصر الجديد وانتشار موقعك اسرع , هناك خبرا
 سيقدمون افضل الحلول للمشكلات التي ستواجك خلال بدا مشروعك و سيقدمون اقتراحات تجعل مشروعك افضل و اوضح
              </p>
              <butto className="bg-color3 text-white px-10 py-2 h-[70px] text-center flex items-center  rounded-lg font-bold ">
                المزيد
              </butto>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
