import React from "react";
import logo from "../assets/portfolio_logo.svg";
import black_arrow from "../assets/black_arrow.svg";
import { Link } from "react-router";
import menu from "../assets/menu.svg";
import { ArrowUpRight } from "lucide-react";

const NavBar = () => {
  return (
    <div className="pl-10 z-10 absolute w-full  flex justify-between items-center border-b-[0.5px] border-b-black08/40 ">
      <div className=" py-6 flex gap-2 items-center">
        <div>
          <img src={logo} alt="Logo" />
        </div>
        <div>
          <h3 className=" font-Oswald font-semibold text-[24px] leading-6 -tracking-[1px]">
            GM
          </h3>
        </div>
      </div>
      <div className=" flex gap-5">
        <button>
          <Link to="/about">
            <div className=" flex items-center gap-2">
              <h3 className=" font-DM font-bold text-[15px] leading-4 text-black/95">
                Let’s Talk
              </h3>
              <span>
                <img src={black_arrow} alt="" />
              </span>
            </div>
          </Link>
        </button>
        <button className=" w-25 h-20 bg-black08/95 px-9.5 py-7">
          <img src={menu} alt="Menu" />
        </button>
      </div>

      {/* <SideBar /> */}
    </div>
  );
};

const SideBar = () => {
  return (
    <div className="bg-black pl-8 ">
      <ul>
        <li>
          <Link
            className=" items-center flex justify-between w-[387px] h-[60px] border-b border-white10 "
            to="/"
          >
            <div className="text-[20px] font-bold leading-7 text-white">Home</div>
            <div>
              <ArrowUpRight className=" text-white50 " />
            </div>
          </Link>
        </li>
        <li>
          <Link
            className=" items-center flex justify-between w-[387px] h-[60px] border-b border-white10 "
            to="/about"
          >
            <div className="text-[20px] font-bold leading-7 text-white  ">About</div>
            <div>
              <ArrowUpRight className=" text-white50 " />
            </div>
          </Link>
        </li>
        <li>
          <Link
            className=" items-center flex justify-between w-[387px] h-[60px] border-b border-white10 "
            to="/project"
          >
            <div className="text-[20px] font-bold leading-7 text-white">Project</div>
            <div>
              <ArrowUpRight className=" text-white50 " />
            </div>
          </Link>
        </li>
        <li>
          <Link
            className="   items-center   flex justify-between w-[387px] h-[60px] border-b border-white10 "
            to="/blog"
          >
            <div className="text-[20px] font-bold leading-7 text-white">Blog</div>
            <div>
              <ArrowUpRight className=" text-white50 " />
            </div>
          </Link>
        </li>
        <li>
          <Link
            className=" items-center flex justify-between w-[387px] h-[60px] border-b border-white10 "
            to="/contact"
          >
            <div className="text-[20px] font-bold leading-7 text-white  ">Contact</div>
            <div>
              <ArrowUpRight className=" text-white50 " />
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
