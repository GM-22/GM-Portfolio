import React from "react";
import Container from "../components/Container";
import yellow from "../assets/yellow_bg.svg";
import Button from "../components/Button";
import { ArrowUpRight } from "lucide-react";
const Pricing = () => {
  return (
    <section className="mb-[176px] mt-[87px]">
      <Container>
        <div className="flex justify-between items-end mb-16"> 
          <div>
            <h4 className=" text-[20px] leading-7 font-bold text-orange mb-2.5 ">
              Pricing
            </h4>
            <div className="relative mb-3 max-w-[527px] ">
              <h1 className=" relative z-10 font-bold text-[64px] leading-18 -tracking-[1.5%]  ">
               Stay chill and pick your plan
              </h1>
              <img
                className=" size-15 absolute top-20 right-37 "
                src={yellow}
                alt="Yellow Background"
              />
            </div>
            
          </div>
          <div className="  ">
                <Button title={"Contact for Custom Project"} />
            </div>
        </div>
        <div className="grid grid-cols-3">
            <Card catagory={'Basic'} hour={'$28/h'} title={'20 hrs'} para={'10 hours per week'} />
            <Card catagory={'Standard'} hour={'$42/h'} title={'40 hrs'} para={'15 hours per week'} />
            <Card catagory={'Premium'} hour={'$50/h'} title={'60 hrs'} para={'20 hours per week'} />
        </div>
      </Container>
    </section>
  );
};

const Card =({catagory, hour, title, para  })=>{
    return(
        <div className="w-[416px] h-[208px] p-8 bg-black4 rounded-[16px]">
            <div className="flex justify-between mb-12">
                <div><p className=" text-[18px] leading-7 font-dm text-black60 ">{catagory}</p></div>
                <div><p className="text-[20px] leading-7  text-orange font-bold ">{hour}</p></div>
            </div>
            <div >
                <h2 className="text-[32px] leading-10 font-bold  ">{title}</h2>
                <div className=" flex justify-between">
                    <p className="text-[18px] leading-7 font-dm text-black60 ">{para}</p>
                    <ArrowUpRight className="size-8 text-black60" />
                </div>
            </div>
        </div>
    )
}

export default Pricing;
