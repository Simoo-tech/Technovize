import React from "react";
import {
  FaRegCopyright,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import logo from "../assets/main logo.webp";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div id="Footer" className="bg-color4 flex items-center flex-col">
      <div
        className="top container my-10 flex items-center gap-7 w-full flex-wrap
      sm:flex-col md:flex-row sm:justify-center xl:justify-between"
      >
        {/* logo and social media */}
        <div className="logo flex flex-col items-center gap-6 sm:w-full md:w-5/12 xl:w-2/12">
          <img src={logo} alt="logo" className="sm:w-[200px] md:w-[250px]" />
          <div className="social-media flex items-center justify-center gap-10 w-full text-color3">
            <Link>
              <FaFacebook size={30} className="hover:text-white duration-200" />
            </Link>
            <Link>
              <FaInstagram
                size={30}
                className="hover:text-white duration-200"
              />
            </Link>
            <Link>
              <FaTiktok size={30} className="hover:text-white duration-200" />
            </Link>
            <Link>
              <FaLinkedin size={30} className="hover:text-white duration-200" />
            </Link>
          </div>
        </div>
        {/* subscribe form */}
        <div
          id="subscribe"
          className="sm:w-full md:w-10/12 xl:w-7/12 sm:order-3 lg:order-2 py-5 flex flex-col items-center gap-5"
        >
          <dl className="w-full ">
            <dt className="sm:text-lg md:text-2xl font-semibold text-white ">
              اشترك ليصلك كل جديد عن ايجي ديف
            </dt>
            <dd className="sm:text-base md:text-lg text-white font-light">
              بعد الاشتراك سيصلك تنبيه علي الايميل بكل نشاطاتنا الجديدة و
              خدماتنا
            </dd>
          </dl>
          <div className="form w-full flex items-center gap-2 shadow-xl">
            <button
              className="text-white border-[1px] py-2 px-6 text-xl
            hover:text-color4 hover:bg-white duration-200"
            >
              اشترك
            </button>
            <input
              type="email"
              className=" w-11/12 p-2 text-lg outline-none focus-visible:border-black text-left"
              placeholder="example@gmail.com"
            />
          </div>
        </div>
        {/* contact */}
        <div
          className="contact flex flex-col gap-5 text-white
        sm:w-full sm:items-center 
        md:items-end md:w-5/12 
        xl:order-3 xl:w-2/12 
        "
        >
          <h5 className="sm:text-xl md:text-2xl font-semibold text-right w-full">
            تواصل معنا
          </h5>
          <a
            href="tel:+201116648153"
            className="flex items-center gap-2 sm:text-lg md:text-xl"
          >
            <span>01116648153</span>
            <FaPhoneAlt
              className="bg-color3 p-2 rounded-lg text-color4"
              size={35}
            />
          </a>
          <a
            href="tel:+201116648153"
            className="flex items-center gap-2 sm:text-lg md:text-xl"
          >
            <span>example@gmail.com</span>
            <MdEmail
              className="bg-color3 p-2 rounded-lg text-color4"
              size={35}
            />
          </a>
        </div>
      </div>
      <div className="bottom flex justify-center items-center bg-color3 w-full">
        <p
          className="w-10/12 flex justify-center items-center 
        py-3 flex-row-reverse gap-2 font-semibold text-sm text-white "
        >
          <FaRegCopyright size={16} />
          جميع الحقوق محفوظة لشركة ايجي ديف
        </p>
      </div>
    </div>
  );
};
