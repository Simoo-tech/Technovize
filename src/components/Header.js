import React, { useState } from "react";
import logo from "../assets/main logo.webp";
import { Link } from "react-router-dom";
// icons
import { RiMenuFill, RiMenu2Fill } from "react-icons/ri";

const Header = () => {
  const [menu, setMenu] = useState(false);
  return (
    <nav
      id="Navbar"
      className="flex justify-center sticky top-0 bg-primary z-30 shadow-md h-[73px]"
    >
      <div className="container py-3 flex items-center justify-between h-full relative ">
        {/* logo & menubar icon*/}
        <Link to="/">
          <img
            src={logo}
            className="sm:max-w-[100px] lg:max-w-[125px]"
            alt="logo"
            id="logo"
          />
        </Link>
        <button
          id="menu-bars"
          className="sm:block lg:hidden w-fit"
          onClick={() => setMenu(!menu)}
        >
          {menu ? (
            <RiMenu2Fill size={25} color="#2f2d31" />
          ) : (
            <RiMenuFill size={25} color="#2f2d31" />
          )}
        </button>
        {/* menu  */}
        <menu
          className={`${
            menu ? "sm:visible sm:opacity-100 " : "sm:invisible sm:opacity-0 "
          }  duration-300 
          sm:absolute sm:top-[80px] sm:left-0 sm:justify-center sm:w-full sm:px-[1rem]        
          lg:w-fit lg:flex lg:relative lg:top-0 lg:opacity-100 lg:visible lg:justify-start lg:p-0`}
        >
          {/* menu items container*/}
          <ul
            className="menuItems flex items-center gap-6 rounded-xl z-40 relative
          sm:flex-col sm:justify-center sm:bg-color3 sm:py-6 sm:text-white sm:shadow-2xl
          lg:flex-row lg:justify-start lg:bg-transparent lg:p-0 lg:text-black lg:w-full lg:shadow-none"
          >
            {/* menu items */}
            <li
              role="menuitem"
              className="relative before:duration-150
              before:absolute hover:before:w-full before:h-[2px] sm:before:bg-white lg:before:bg-color3
              before:right-0 before:-bottom-2 before:w-0 "
            >
              <Link to={"/"} className="sm:text-base md:text-lg font-medium">
                الرئيسية
              </Link>
            </li>
            <li
              role="menuitem"
              className="relative before:duration-150
              before:absolute hover:before:w-full before:h-[2px] sm:before:bg-white lg:before:bg-color3
              before:right-0 before:-bottom-2 before:w-0 "
            >
              <Link
                to={"من-نحن/"}
                className="sm:text-base md:text-lg  font-medium"
              >
                من نحن
              </Link>
            </li>
            <li
              role="menuitem"
              className="relative before:duration-150
              before:absolute hover:before:w-full before:h-[2px] sm:before:bg-white lg:before:bg-color3
              before:right-0 before:-bottom-2 before:w-0 "
            >
              <a
                href="#services"
                className="sm:text-base md:text-lg  font-medium"
              >
                خدماتنا
              </a>
            </li>
            <li
              role="menuitem"
              className="relative before:duration-150
              before:absolute hover:before:w-full before:h-[2px] sm:before:bg-white lg:before:bg-color3
              before:right-0 before:-bottom-2 before:w-0 "
            >
              <Link to={""} className="sm:text-base md:text-lg  font-medium">
                سابقة الاعمال
              </Link>
            </li>
            <button
              className="text-lg py-2 px-6 shadow-xl rounded-xl
          sm:text-color3 sm:bg-primary
          lg:text-white lg:bg-color3"
            >
              اطلب خدمتك
            </button>
          </ul>
        </menu>
      </div>
    </nav>
  );
};

export default Header;
