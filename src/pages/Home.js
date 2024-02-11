import React from "react";
// image
import landingImg from "../assets/landing-img.webp";
import aboutImg2 from "../assets/about-2.png";
// other
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// data
import { CustomerData, PortfolioData, ServicesData } from "../data";
// icon
import { IoIosArrowBack } from "react-icons/io";
import { spiral } from "ldrs";
import { Cards } from "../components/Cards";

spiral.register();
export default function Home() {
  return (
    <main id="home-page" className="flex flex-col gap-28">
      <Landing />
      <Services />
      <AboutUs />
      <Portfolio />
    </main>
  );
}

/////////// landing ///////////
const Landing = () => {
  //// carsoul settings /////

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1550 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1550, min: 766 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 766, min: 430 },
      items: 3,
    },
    smmobile: {
      breakpoint: { max: 430, min: 0 },
      items: 2,
    },
  };
  return (
    <section id="landing-section" className="page-h relative w-full flex pb-5">
      {/* shape */}
      <div
        className="sm:hidden lg:block triangle-shape h-full sm:w-6/12 lg:w-4/12 top-0 left-0
        bg-color3 z-0 absolute float-left"
      />
      <img
        src={landingImg}
        alt="landingImgs"
        className="absolute z-20 lg:w-[500px] xl:w-[620px] 2xl:w-6/12 bottom-0 left-10 float-left sm:hidden lg:block"
      />
      {/* right side */}
      <div
        className="text container float-right lg:w-6/12 xl:w-6/12 sm:h-[93%] lg:h-full flex flex-col 
        justify-center relative "
      >
        {/* text and buttoms */}
        <div className="top sm:gap-10 md:gap-14 lg:gap-8 xl:gap-10 2xl:gap-14 flex flex-col justify-center h-[90%]">
          <h1 className="sm:text-4xl sm:text-center lg:text-start md:text-4xl lg:text-5xl 2xl:text-[5rem] w-full">
            <strong className=" text-color3 ">تكنو فايز</strong> للبرمجيات
          </h1>
          <h2
            className=" sm:text-lg md:text-xl lg:text-2xl 2xl:text-[2.3rem] sm:text-center lg:text-start leading-snug 2xl:leading-snug  "
            style={{ color: "black" }}
          >
            تتميز شركة تكنو فايز بفريق عمل مؤهل ومتخصص من المطورين والمصممين
            والمهندسين الذين يتمتعون بخبرة واسعة في مجالات مختلفة مثل التسويق
            الاكتروني, تطوير الويب, تطوير تطبيقات الجوال, تصميم واجهات المستخدم,
            سيستم ERP
          </h2>
          <div className="btn flex w-full sm:justify-center lg:justify-start lg:gap-8 2xl:gap-11">
            <button
              className="text-lg font-medium bg-color3 py-2 shadow-[10px_13px_26px_0px_#ccc7c6] text-white 
              rounded-xl hover:text-color3 hover:bg-white duration-300 flex items-center justify-center gap-2
              sm:w-5/12
              md:w-4/12  
              lg:w-4/12
              xl:w-3/12 xl:text-xl
              2xl:text-3xl 2xl:py-4 2xl:w-4/12
            "
            >
              <span>من نحن </span>
              <IoIosArrowBack className="" />
            </button>
            {/* <button
              className="sm:w-5/12 md:w-4/12 lg:w-4/12 xl:w-4/12 text-lg 2xl:text-2xl font-medium bg-white py-2 shadow-[10px_13px_26px_0px_#ccc7c6]
            text-color3 rounded-lg hover:bg-color3 hover:text-white duration-300"
            >
              سابقة الاعمال
            </button> */}
          </div>
        </div>
        {/* logo slider */}
        <aside
          className="customers flex flex-col justify-start w-full items-start gap-4 
            px-4 py-2 rounded-xl h-fit  "
        >
          <Carousel
            infinite={true}
            autoPlay
            autoPlaySpeed={3000}
            responsive={responsive}
            arrows={false}
            rtl={true}
            className="w-full"
          >
            {CustomerData.map((customer) => (
              <img
                key={customer.id}
                src={customer.img}
                title={customer.name}
                alt="customer-logo"
                datatype={customer.name}
                className=" w-[90px] max-w-[90px] 2xl:w-[130px] 2xl:max-w-[130px] "
              />
            ))}
          </Carousel>
        </aside>
      </div>
    </section>
  );
};

/////////// services ///////////
const Services = () => {
  return (
    <section id="services-section" className="relative w-full flex ">
      <h1
        className="sm:text-7xl md:text-8xl lg:text-9xl 
      font-extrabold text-white opacity-60 absolute right-8
       sm:-top-8 md:-top-11 lg:-top-16 z-0"
      >
        خدماتنا
      </h1>
      <div className="container relative z-10 flex flex-col gap-10">
        <dl id="services-title" className="w-fit">
          <dt className="sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-semibold sm:mb-1 lg:mb-2">
            اطلق فكرتك للعالم
          </dt>
          <dd className="sm:text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-medium sm:text-end lg:mr-[8.6rem]">
            و اطلب خدمتك الان
          </dd>
        </dl>
        <div className="services flex items-center sm:gap-10 lg:gap-20 justify-center flex-wrap">
          {ServicesData.map((service) => (
            <div
              key={service.id}
              style={{ backgroundImage: `url(${service.bgImg})` }}
              className="min-h-[320px] h-fit 2xl:h-[340px] flex duration-[.4s] relative group rounded-3xl rounded-ee-none hover:-translate-y-[15px] bg-cover
               bg-center shadow-lg drop-shadow-md shadow-zinc-600
              sm:w-11/12 
              md:w-5/12 
              lg:w-4/12   
              xl:w-3/12          
              before:z-0 before:rounded-3xl before:rounded-ee-none before:absolute before:bg-black before:w-full 
              before:h-full before:top-0 before:left-0 before:opacity-85"
            >
              {/* card text */}
              <div
                className="text relative flex min-h-[300px] flex-col z-10 text-white w-full justify-center items-center gap-4
                  group-hover:justify-between group-hover:gap-4 duration-[.4s] p-4 pb-0"
              >
                <img
                  src={service.img}
                  alt={service.imgAlt}
                  className="w-[150px] 2xl:w-[180px] group-hover:hidden duration-[.4s]"
                />
                <div className="title-info flex flex-col gap-4">
                  <h4 className="text-xl 2xl:text-2xl font-semibold text-center w-full capitalize">
                    {service.name}
                  </h4>
                  <p className="hidden group-hover:block w-full leading-relaxed text-[16px] 2xl:text-xl duration-[.4s] truncate text-balance ">
                    {service.Cardinfo}
                  </p>
                </div>
                <Link
                  reloadDocument
                  to={`/خدامتنا/${service.path}`}
                  className="hidden group-hover:flex flex-row items-center gap-2 border-t-2 duration-[.4s] w-full justify-center py-3"
                >
                  اقرأ المزيد
                  <IoIosArrowBack
                    size={15}
                    className="group-hover:animate-rightLeft"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/////////// about us ///////////
const AboutUs = () => {
  return (
    <section id="about-us-section" className="relative w-full flex flex-col">
      <h1
        className="sm:text-7xl md:text-8xl lg:text-9xl 
      font-extrabold text-white opacity-60 absolute right-8
       sm:-top-8 md:-top-11 lg:-top-16 z-0"
      >
        من نحن
      </h1>
      <div className="container flex flex-col justify-between h-full gap-7 relative z-10">
        <dl id="services-title" className="w-fit">
          <dt className="sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl font-semibold sm:mb-1 lg:mb-2">
            معًا سنحقق هدفك
          </dt>
          <dd className="sm:text-base md:text-xl lg:text-2xl 2xl:text-3xl font-medium sm:text-end lg:mr-[4.6rem]">
            نحن معك خطوة بخطوة لتحويل فكرتك الي بيزنيس حقيقي
          </dd>
        </dl>
        <div className="body-container flex items-center sm:gap-6 sm:flex-col-reverse lg:flex-row ">
          <hgroup className="text sm:gap-4 xl:gap-8 2xl:gap-11 sm:w-full lg:w-7/12 flex flex-col justify-between text-pretty self-start mt-2 ">
            <h3 className="sm:text-base md:text-lg xl:text-[21px] 2xl:text-2xl font-medium">
              شركة تكنو فايز هي احدي اكبر شركات البرمجة في مصر و الوطن العربي,
              لدينا خدمات ستجعل فكرتك او مشروعك ينمو و ينتشر اسرع, لدينا خبرة
              كافية في مجالات عديدة مثل :
              <ul className="sm:text-sm md:text-lg xl:text-xl 2xl:text-[23px] list-disc pr-5 flex flex-col gap-2 mt-4 ">
                <li>التسويق الاكتروني</li>
                <li>تصميم و تطوير المواقع الأكترونية الخاصة</li>
                <li>برمجة تطبيقات الهاتف</li>
                <li>تصميم هوية تجارية</li>
              </ul>
            </h3>
            <h4 className="sm:text-base md:text-lg xl:text-[21px] 2xl:text-2xl font-medium text-pretty">
              نستخدم احدث التقنيات و الاستراتيجيات, هناك ايضا خبراء سيقدمون افضل
              الحلول للمشكلات التي ستواجك خلال بدء مشروعك و سيقدمون اقتراحات
              تجعل مشروعك افضل و اوضح.
            </h4>
            <Link
              to={"/من-نحن"}
              className="flex w-fit py-2 sm:text-base md:text-lg xl:text-xl 2xl:text-2xl px-6 items-center gap-2 bg-color4 text-white group
          duration-300 rounded-l-2xl hover:bg-color3 hover:rounded-md hover:-translate-x-2"
            >
              المزيد عنا
              <IoIosArrowBack className=" group-hover:animate-pulse" />
            </Link>
          </hgroup>
          <img
            src={aboutImg2}
            alt="about-section-img"
            className="sm:w-10/12 md:w-8/12 lg:w-5/12 shadow-2xl drop-shadow-xl rounded-md"
          />
        </div>
      </div>
      {/* why us */}
      <Cards />
    </section>
  );
};

/////////// portfolio ///////////
const Portfolio = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 924 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section
      id="portfolio-section"
      className="relative w-full flex flex-col mb-10"
    >
      <h1 className="sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-white opacity-50 absolute right-3 sm:-top-8 md:-top-11 lg:-top-14 z-0">
        اعمالنا
      </h1>
      <div className="container flex flex-col justify-between h-full gap-5 relative z-10">
        <dl id="services-title" className="w-fit">
          <dt className="sm:text-2xl md:text-3xl lg:text-4xl font-semibold ">
            بعض اعمالنا
          </dt>
        </dl>
        <Carousel
          infinite={true}
          autoPlay
          autoPlaySpeed={2000}
          responsive={responsive}
          arrows={false}
          rtl={true}
          className="w-full"
        >
          {PortfolioData.map((por) => (
            <a
              href={`/اعمالنا/${por.path}`}
              key={por.id}
              style={{ backgroundColor: por.bgColor }}
              className={`relative flex w-[330px] h-fit flex-col gap-3 items-center p-5 text-white rounded-2xl
              before:absolute before:bottom-0 before:w-full before:h-[70%] before:bg-gradient-to-t before:rounded-2xl before:duration-300
              before:from-black before:via-black before:to-transparent before:opacity-70 hover:before:opacity-85`}
            >
              <img src={por.logo} alt="" className="w-[20px] flex self-start" />
              <img src={por.img} alt="" className="w-[310px] " />
              <div className="text relative flex flex-col items-start justify-end w-full">
                <p className="text-lg opacity-85">{por.type}</p>
                <p className="text-2xl font-semibold">{por.cusname}</p>
              </div>
            </a>
          ))}
        </Carousel>
      </div>
    </section>
  );
};
