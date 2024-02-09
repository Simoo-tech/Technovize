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
      <div className="top container my-8 flex items-center gap-7 w-full sm:justify-center lg:justify-between flex-wrap  ">
        {/* logo and social media */}
        <div className="logo flex flex-col items-center gap-6 w-fit lg:order-2">
          <img
            src={logo}
            alt="logo"
            className="sm:w-[180px] md:w-[200px] h-[100px]"
          />
          {/* social media */}
          <div className="social-media flex items-center justify-center gap-7 w-full text-color3">
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
          {/* contact */}
          <div className="contact flex gap-5 text-white h-full w-full sm:flex-col md:flex-row items-center justify-center ">
            <a
              href="tel:+201023221992"
              className="flex items-center gap-2 sm:text-lg md:text-lg"
            >
              <span>201023221992+</span>
              <FaPhoneAlt className="p-1 rounded-lg text-color3" size={30} />
            </a>
            <a
              href="tel:+201116648153"
              className="flex items-center gap-2 sm:text-lg md:text-lg"
            >
              <span>example@gmail.com</span>
              <MdEmail className="p-1 rounded-lg text-color3" size={30} />
            </a>
          </div>
        </div>
        {/* subscribe form */}
        <div
          id="subscribe"
          className="sm:w-full md:w-10/12 lg:w-6/12 xl:w-5/12 lg:order-1 flex flex-col items-center gap-5"
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
              className="text-white border-[1px] py-2 px-6 text-xl rounded-sm
            hover:text-color4 hover:bg-white duration-200"
            >
              اشترك
            </button>
            <input
              type="email"
              className=" w-11/12 p-2 px-3 text-lg outline-none focus-visible:border-black text-left rounded-sm"
              placeholder="example@gmail.com"
            />
          </div>
        </div>
      </div>
      {/* copy right */}
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

export const Footer2 = () => {
  return (
    <div id="footer" className="flex flex-col pt-5 items-center container">
      <div className="top w-full flex items-center justify-between border-b-2 pb-3 border-color4">
        <ul className="flex items-center w-fit justify-center gap-10 text-lg font-semibold">
          <Link to={"/"}>
            <li>الرئيسية</li>
          </Link>
          <Link to={"/من-نحن"}>
            <li>من نحن</li>
          </Link>
          <Link to={"/خدماتنا"}>
            <li>خدماتنا</li>
          </Link>
          <Link to={"/تواصل-معنا"}>
            <li>تواصل معنا</li>
          </Link>
        </ul>
        <img src={logo} className="w-[140px]" alt="" />
      </div>
      <div className="copyright w-full flex justify-center items-center">
        <div className="social flex gap-3 items-center ">
          <Link>
            <FaFacebook
              size={22}
              className="hover:text-white duration-200 text-blue-700"
            />
          </Link>
          <Link>
            <FaInstagram size={22} className="hover:text-white duration-200" />
          </Link>
          <Link>
            <FaTiktok size={22} className="hover:text-white duration-200 " />
          </Link>
          <Link>
            <FaLinkedin
              size={22}
              className="hover:text-white duration-200 text-blue-900"
            />
          </Link>
        </div>
        <p
          className="w-full flex justify-center items-center 
        py-3 flex-row-reverse gap-2 font-semibold text-color4 "
        >
          <FaRegCopyright size={16} />
          جميع الحقوق محفوظة لشركة ايجي ديف 2019
        </p>
      </div>
    </div>
  );
};
