import React from 'react'
import Container from '../components/Container'
import yellow from '../assets/yellow_bg.svg'
import Button from '../components/Button'

const AboutSection = () => {
  return (
    <section>
        <Container>
            <div>

            </div>
            <div>
                <h4 className=' text-[20px] leading-7 font-bold text-orange mb-2.5 '>Hello I'm</h4>
                <div className='relative mb-3'>
                    <h1 className=' relative z-10 font-bold text-[64px] leading-18 -tracking-[1.5%] max-w-[526px] '>Golam Morshed, Frontend Designer</h1>
                    <img className=' size-12 absolute top-2.5 -left-1 ' src={yellow} alt="Yellow Background" />
                </div>
                <h3 className='font-bold text-[44px] leading-[54px] mb-4'>Based in Bangladesh</h3>
                <p className=' mb-6 font-dm text-[18px] leading-7 text-black60 '>I build modern, responsive, and user-friendly web applications using React, JavaScript, and the latest technologies. Passionate about creating clean UI and solving real-world problems through code.</p>
                <div className='flex justify-between mb-9'>
                    <Cards number='05' title='Years of Experience' K='' />
                    <Cards number='2.0' title='Projects Completed' />
                    <Cards  number='10' title='Happy Clients' />
                </div>
                <Button title='Download my resume' />
            </div>
        </Container>
    </section>
  )
}
const Cards = ({number, title, K='k'})=>{
    return(
        
            <div className=' relative '>
                <h1 className=' text-[32px] leading-10 font-bold mb-2 '>{number}{K}</h1>
                <p className=' font-dm text-[18px] leading-7 text-black60 '>{title}</p>

                <div className=' absolute top-0 left-0 size-11 bg-black4 rounded-full  '></div>
            </div>
        
    )
}
export default AboutSection