import React from "react";
import Container from "../components/Container";
import yellow from "../assets/yellow_bg.svg";
import { ArrowUpRight } from "lucide-react";
import icon from "../assets/icon.svg";
import { Link } from "react-router";

const Expertise = () => {
  return (
    <section className="pt-30 py-16 ">
      <Container>
        <div>
          <div className=" mb-12 grid grid-cols-[526px_1fr] gap-16 items-center">
            <div className="max-w-[600px] ">
              <p className="text-[20px] leading-7 font-bold text-orange mb-2">
                What I Do
              </p>
              <div className="relative">
                <h2 className="relative z-10 text-[54px] font-bold leading-18  ">
                  My Expertise
                </h2>
                <img
                  className=" absolute top-1.5 -left-1.5 size-15 "
                  src={yellow}
                  alt="Yellow Background"
                />
              </div>
            </div>
            <div>
              {" "}
              <p className=" font-dm text-[18px] leading-7 text-black60 ">
                I build modern, responsive, and user-friendly web applications
                using the latest technologies. Focused on performance,
                scalability, and clean design.
              </p>
            </div>
          </div>
          <div className=" flex gap-6">
            <div className=" grid grid-cols-3 gap-6 w-[856px] ">
              <ServiceCard title="Web Development" img={icon} />
              <ServiceCard title="Web Development" img={icon} />
              <ServiceCard title="Web Development" img={icon} />
              <ServiceCard title="Web Development" img={icon} />
              <ServiceCard title="Web Development" img={icon} />
              <ServiceCard title="Web Development" img={icon} />
            </div>
            <div className=" w-[416px] h-[404px] bg-black08 rounded-2xl py-9 px-6 ">
                <Link to="/contact" className=" flex flex-col gap-40">
                    <div >
                        <ArrowUpRight className=" ml-70 size-20 text-orange46  " />
                    </div>
                    <div className=" w-[368px] ">
                        <p className=" font-dm text-[18px] leading-7 text-orange46 mb-2 ">SAY HELLO!</p>
                        <h3 className=" font-bold text-[26px] leading-10 text-white ">gmparvez47@gmail.com</h3>
                    </div>
                </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
const ServiceCard = ({ title, img }) => {
  return (
    <div className=" w-[270px] h-[192px] bg-black4 py-7 px-6  rounded-[16px] ">
      <div className=" mb-8 size-12 p-3 bg-white rounded-full ">
        <img className="size-6" src={img} alt="" />
      </div>
      <div className=" flex items-end justify-between  ">
        <h3 className=" max-w-[182px] text-[20px] font-bold leading-7 ">
          {title}
        </h3>
        <ArrowUpRight className="  size-6 text-black60" />
      </div>
    </div>
  );
};
export default Expertise;
