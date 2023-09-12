import React from "react";
import { HashLink } from "react-router-hash-link";

function Navbar() {
  const navBarClick = (e) => {
    const menu = document.getElementById("navMenu");
    if (
      menu.classList.contains("md:hidden") ||
      menu.classList.contains("sm:hidden") ||
      menu.classList.contains("hidden")
    ) {
      menu.classList.remove("md:hidden");
      menu.classList.remove("sm:hidden");
      menu.classList.remove("hidden");
    } else {
      menu.classList.add("md:hidden");
      menu.classList.add("sm:hidden");
      menu.classList.add("hidden");
    }
  };
  return (
    <div className="relative flex justify-between p-8 md:relative sm:relative">
      <div className="flex-none p-1.5 text-slate-300 font-bold text-xl transition ease-in duration-550 hover:scale-110 hover:text-yellow-400 hover:animate-spin">
        PORTFOLIO
      </div>
      <div
        id="navMenu"
        className="hidden absolute top-[65px] left-0 w-full bg-slate-400 lg:flex lg:top-[32px] lg:bg-transparent xl:flex xl:top-[32px] xl:bg-transparent 2xl:flex 2xl:top-[32px] 2xl:bg-transparent md:block md:absolute md:top-[65px] md:right-0 sm:hidden md:bg-slate-400 md:w-full sm:absolute sm:top-[65px] sm:right-0 sm:bg-slate-400 sm:w-full "
      >
        <div className="flex-1">
          <ul className="block justify-center md:block sm:block lg:flex xl:flex 2xl:flex">
            <li className="p-2 text-slate-100 font-semibold hover:bg-slate-900 hover:rounded-lg transition-all duration-500 hover:cursor-pointer">
              <HashLink to="#" smooth>
                Home
              </HashLink>
            </li>
            <li className="p-2 text-slate-100 font-semibold hover:bg-slate-900 hover:rounded-lg transition-all duration-500 hover:cursor-pointer">
              <HashLink to="#experience" smooth>
                Experience
              </HashLink>
            </li>
            <li className="p-2 text-slate-100 font-semibold hover:bg-slate-900 hover:rounded-lg transition-all duration-500 hover:cursor-pointer">
              <HashLink to="#about" smooth>
                About
              </HashLink>
            </li>
          </ul>
        </div>
        <div className="flex-1 p-2 text-slate-100 font-semibold hover:cursor-pointer text-lg">
          <div>
            <span>
              <i className="fa fa-envelope px-2" />
            </span>
            anupthakurwar@gmail.com
          </div>
          <div>
            <span>
              <i className="fa fa-phone px-2"></i>
            </span>
            (+91) 9834854528/ 9421775575
          </div>
        </div>
      </div>

      <div
        className="lg:hidden xl:hidden 2xl:hidden md:block sm:block text-xl"
        onClick={navBarClick}
      >
        <i className="fa fa-bars text-slate-100"></i>
      </div>
    </div>
  );
}

export default Navbar;
