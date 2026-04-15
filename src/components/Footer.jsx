import React from "react";
import Container from "./Container";
import right_arrow from "../assets/right_arrow.svg";
import be from "../assets/be.svg";
import linkdn from "../assets/linkdn.svg";
import globe from "../assets/globe.svg";
import github from "../assets/gitub.svg";
import yellow_bg from "../assets/yellow_bg.svg";
import { ArrowUp } from "lucide-react";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer>
      <div className=" h-[722px] w-full bg-black08 py-25">
        <Container>
          <div className=" flex gap-6">
            <div className=" mt-12">
              <div className=" ">
                <img className="absolute size-17" src={yellow_bg} alt="" />
                <h3 className="z-10 relative  top-0 mb-10 font-Syne font-bold text-[64px] leading-18 text-white -tracking-[1.5%] max-w-[416px]">
                  Let’s work together
                </h3>
              </div>
              <div className=" text-white flex gap-3.5 items-center">
                <p className="font-Syne font-bold text-[20px] leading-8">
                  Based in Bangladesh |
                </p>
                <ul className=" flex gap-4 items-center">
                  <li>
                    <a href="">
                      <img
                        className=" size-7 mt-[2px]"
                        src={be}
                        alt="Behance"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img className=" size-6" src={linkdn} alt="LinkedIn" />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        className=" size-6 mt-[2px]"
                        src={globe}
                        alt="Website"
                      />
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <img
                        className=" size-6 mt-[2px]"
                        src={github}
                        alt="GitHub"
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className=" flex gap-6">
              <Card
                title={"Looking for a hectic  designer?"}
                contact={"golammorshed0822@gmail.com"}
              />
              <Card
                title={"Want a more in-depth look at my history?"}
                contact={"+8801766550632"}
              />
            </div>
          </div>
          <div className="mt-[72px] mb-[83px]">
            <h1 className="  font-bold text-[#FFE9D9] text-[120px] leading-20  ">GOLAM MORSHED</h1>
          </div>
          <div className=" h-[52px] items-end flex justify-between border-t border-white20 ">
            <div><p className="text-[18px] leading-7 text-white font-dm">©2026 GM, All Rights Reserved</p></div>
            <div className=" flex items-center gap-2">
              <Link to="/" className="">
                <p className=" text-[18px] leading-7 text-white font-dm">
                  Back to Top
                </p>
              </Link>
              <ArrowUp className=" size-6 text-orange46" />
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};
const Card = ({ title, contact }) => {
  return (
    <div className=" flex flex-col justify-between h-[260px] w-[416px] border border-white/20 rounded-2xl px-7 py-9">
      <div>
        <h3 className=" font-bold text-[20px] leading-7 text-white max-w-[280px] ">
          {title}
        </h3>
      </div>
      <div className=" flex justify-between items-center ">
        <p className=" font-bold text-[20px] leading-8 text-orange max-w-[100px]">
          {contact}
        </p>
        <img src={right_arrow} alt="" />
      </div>
    </div>
  );
};

export default Footer;
