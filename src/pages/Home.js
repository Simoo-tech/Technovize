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
import { FaRegLightbulb } from "react-icons/fa";
import { FaCoins } from "react-icons/fa6";
import { BiSupport } from "react-icons/bi";
import { GiRibbonMedal } from "react-icons/gi";
import { BiShieldAlt2 } from "react-icons/bi";

export const Home = () => {
  return (
    <main id="home-page" className="flex flex-col gap-20">
      <Landing />
      <Services />
      <AboutUs />
      <Portfolio />
    </main>
  );
};

//////////////* landing */////////////
const Landing = () => {
  //// carsoul settings /////

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1550 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1550, min: 924 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
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
        className="absolute z-20 lg:w-6/12 xl:w-5/12 bottom-0 left-10 float-left sm:hidden lg:block"
      />
      {/* right side */}
      <div
        className="text container float-right lg:w-6/12 xl:w-6/12 sm:h-[93%] lg:h-full flex flex-col 
        justify-center relative "
      >
        {/* text and buttoms */}
        <div className="top sm:gap-10 md:gap-14 lg:gap-8 flex flex-col justify-center h-[90%]">
          <h1 className="sm:text-4xl md:text-4xl lg:text-5xl text-center w-full">
            <strong className=" text-color3 ">تكنو فايز</strong> للبرمجيات
          </h1>
          <h2
            className=" sm:text-lg md:text-xl lg:text-2xl sm:text-center lg:text-start leading-snug "
            style={{ color: "black" }}
          >
            تتميز شركة تكنو فايز بفريق عمل مؤهل ومتخصص من المطورين والمصممين
            والمهندسين الذين يتمتعون بخبرة واسعة في مجالات مختلفة مثل التسويق
            الاكتروني, تطوير الويب, تطوير تطبيقات الجوال, تصميم واجهات المستخدم,
            سيستم ERP
          </h2>
          <div className="btn flex w-full sm:justify-evenly lg:justify-center lg:gap-8">
            <button
              className="sm:w-5/12 md:w-4/12 lg:w-4/12 xl:w-3/12 text-lg font-medium bg-color3 py-2 shadow-[10px_13px_26px_0px_#ccc7c6]
            text-white rounded-lg hover:text-color3 hover:bg-white duration-300"
            >
              من نحن
            </button>
            <button
              className="sm:w-5/12 md:w-4/12 lg:w-4/12 xl:w-3/12 text-lg font-medium bg-white py-2 shadow-[10px_13px_26px_0px_#ccc7c6]
            text-color3 rounded-lg hover:bg-color3 hover:text-white duration-300"
            >
              سابقة الاعمال
            </button>
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
                className=" w-[100px] max-w-[100px] h-[100px] "
              />
            ))}
          </Carousel>
        </aside>
      </div>
    </section>
  );
};

//////////////* services */////////////
const Services = () => {
  return (
    <section id="services-section" className="relative w-full flex">
      <h1 className="sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-white opacity-50 absolute right-3 sm:-top-8 md:-top-11 lg:-top-14 z-0">
        خدماتنا
      </h1>
      <div className="container relative z-10">
        <dl id="services-title" className="w-fit">
          <dt className="sm:text-2xl md:text-3xl lg:text-4xl font-semibold sm:mb-1 lg:mb-2">
            اطلق فكرتك للعالم
          </dt>
          <dd className="sm:text-lg md:text-xl lg:text-2xl font-medium sm:text-end lg:mr-[8.6rem]">
            و اطلب خدمتك الان
          </dd>
        </dl>
        <div className="services flex items-center sm:gap-10 lg:gap-4 sm:justify-evenly xl:justify-between flex-wrap mt-8">
          {ServicesData.map((service) => (
            <div
              key={service.id}
              className="sm:w-9/12 md:w-4/12 lg:w-3/12 lg:mb-7 xl:w-2/12 bg-white h-[330px] flex flex-col justify-between items-center duration-[.4s]
              relative group rounded-3xl rounded-ee-none hover:justify-end hover:translate-y-[20px]"
            >
              <span className="serviceShape bg-color4 absolute top-0 left-0 w-full h-[35%] duration-[.4s] group-hover:bg-transparent rounded-t-3xl" />
              <span className="serviceShape bg-black rotate-180 absolute top-0 left-0 w-full h-[35%] group-hover:bg-transparent duration-[.4s] rounded-b-3xl" />
              {/* card image */}
              <div
                className={`
            img-holder h-[120px] sm:w-full lg:w-10/12 rounded-t-2xl duration-[.4s] ease-in-out relative   
            group-hover:absolute group-hover:w-fit group-hover:justify-center 
            group-hover:-top-8 group-hover:flex`}
              >
                <img
                  src={service.img}
                  className="max-w-[200px] absolute top-5 left-[50%] translate-x-[-50%] duration-[.4s] ease-in-out
              group-hover:max-w-[100px] group-hover:top-2  "
                  alt="service-img"
                />
              </div>
              {/* card text */}
              <div
                className="text h-2/4 flex flex-col justify-evenly items-center
          group-hover:h-[88%] group-hover:justify-start group-hover:gap-2 duration-[.4s] py-2 px-4 ease-in-out"
              >
                <h4 className="text-lg font-semibold text-center w-full capitalize">
                  {service.name}
                </h4>
                <p
                  className="hidden group-hover:block w-full leading-snug text-base h-[215px]
            truncate text-pretty "
                >
                  {service.info}
                </p>
                <Link
                  to={""}
                  className="hidden group-hover:flex flex-row items-center gap-2 border-t-2 
              w-full justify-center pt-2"
                >
                  اقرأ المزيد{" "}
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

//////////////* about us */////////////
const AboutUs = () => {
  return (
    <section id="about-us-section" className="relative w-full flex  flex-col">
      <h1 className=" sm:text-7xl md:text-8xl lg:text-9xl font-extrabold text-white opacity-50 absolute right-3 sm:-top-8 md:-top-11 lg:-top-14 z-0">
        من نحن
      </h1>
      <div className="container flex flex-col justify-between h-full gap-5 relative z-10">
        <dl id="services-title" className="w-fit">
          <dt className="sm:text-2xl md:text-3xl  lg:text-4xl font-semibold sm:mb-1 lg:mb-2 ">
            معًا سنحقق هدفك
          </dt>
          <dd className="sm:text-lg md:text-xl lg:text-2xl font-medium sm:mr-[2rem] lg:mr-[4.6rem]">
            نحن معك خطوة بخطوة لتحويل فكرتك الي بيزنيس حقيقي
          </dd>
        </dl>
        <div className="body-container flex items-center sm:gap-6 sm:flex-col-reverse lg:flex-row">
          <hgroup className=" text px-4 sm:gap-4 xl:gap-7 sm:w-full lg:w-7/12 flex flex-col justify-evenly text-pretty ">
            <h3 className="sm:text-base md:text-lg xl:text-xl font-medium">
              شركة تكنو فايز هي احدي اكبر شركات البرمجة في مصر و الوطن العربي,
              لدينا خدمات ستجعل فكرتك او مشروعك ينمو و ينتشر اسرع, لدينا خبرة
              كافية في مجالات عديدة مثل خدمات:
              <ul className="sm:text-base md:text-lg list-disc pr-5 flex flex-col gap-2 mt-3 font-normal">
                <li>التسويق الاكتروني</li>
                <li>تصميم و تطوير المواقع الأكترونية الخاصة</li>
                <li>برمجة تطبيقات الهاتف</li>
                <li>تصميم هوية تجارية</li>
              </ul>
            </h3>
            <h4 className="sm:text-base md:text-lg xl:text-xl font-medium text-pretty">
              نستخدام احدث التقنيات و الاستراتيجيات, هناك ايضا خبراء سيقدمون
              افضل الحلول للمشكلات التي ستواجك خلال بدا مشروعك و سيقدمون
              اقتراحات تجعل مشروعك افضل و اوضح,
            </h4>
            <Link
              to={""}
              className="flex w-fit py-2 sm:text-base md:text-lg px-6 items-center gap-2 bg-color4 text-white group
          duration-300 rounded-l-2xl hover:bg-color3 hover:rounded-md hover:-translate-x-2"
            >
              المزيد عنا
              <IoIosArrowBack className=" group-hover:animate-pulse" />
            </Link>
          </hgroup>
          <img
            src={aboutImg2}
            alt="about-section-img"
            className="sm:w-11/12 md:w-7/12 lg:w-5/12 shadow-2xl drop-shadow-xl rounded-md"
          />
        </div>
      </div>
      {/* why us */}
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
    </section>
  );
};

//  portfolio
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
            <Link
              to={""}
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
            </Link>
          ))}
        </Carousel>
      </div>
    </section>
  );
};
