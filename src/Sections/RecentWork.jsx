import React from "react";
import Container from "../components/Container";
import yellow from "../assets/yellow_bg.svg";
import { ArrowUpRight } from "lucide-react";
import modevo from "../assets/modevo.png"
import exclusive from "../assets/exclusive.png"


const RecentWork = () => {
  return (
    <section className=" h-[938px] bg-[#FFE9D9] py-25  ">
      <Container>
        <div>
          <div className=" text-center items-center mb-10 ">
            <h4 className=" text-[20px] leading-7 font-bold text-orange mb-2.5 ">
              Portfolio
            </h4>
            <div className="relative mb-3 w-[636px] mx-auto">
              <h1 className=" relative z-10 font-bold text-[64px] leading-18 -tracking-[1.5%]  ">
                My recent work
              </h1>
              <img
                className=" size-15 absolute top-1 right-42 "
                src={yellow}
                alt="Yellow Background"
              />
            </div>
          </div>
          <div className="flex gap-6">
            <Recent img={exclusive} title={"Full Ecommerce Website"} />
            <Recent img={modevo} title={"Modevo Fashion Website"} />
          </div>
          <div className=""> 
            <Buutton   title={"View All Project"} />
          </div>
        </div>
      </Container>
    </section>
  );
};

const Recent = ({ img, title }) => {
  return (
    <div className=" w-[636px] h-[484px]  ">
      <img className="w-[636px] h-[380px] rounded-[20px] mb-6" src={img} alt="" />
      <div  className="flex gap-2 mb-3">
        <div className=" rounded-lg bg-transparent py-1.5 px-4 border border-black40 items-center ">
          <h3 className=" text-[12px] leading-4 font-inter font-medium text-black80 ">WEB</h3>
        </div>
        <div className=" rounded-lg bg-transparent py-1.5 px-4 border border-black40 items-center ">
          <h3 className=" text-[12px] leading-4 font-inter font-medium text-black80">DEVELOPMENT</h3>
        </div>
      </div>
      <div className="flex justify-between">
        <h2 className=" text-[32px] leading-10 font-bold "> {title} </h2>
        <ArrowUpRight className=" size-10 text-black80 " />
      </div>
      
    </div>
  );
};
const Buutton = ({title}) => {
  return (
    <button className=' w-full rounded-lg bg-black py-4 justify-center mt-13.5 flex  text-white items-center '>
        <h3 className=' text-[15px] leading-4 font-dm font-bold '>{title}</h3>
        <ArrowUpRight />
    </button>
  )
}

export default RecentWork;
