import React from 'react'
import Container from '../components/Container'
import yellow_bg from '../assets/yellow_bg.svg'
import { ArrowUpRight } from 'lucide-react'
import Button from '../components/Button'
import TransparentButton from '../components/TransparentButton'
import github from '../assets/gitub.svg'
import linkedin from '../assets/linkdn.svg'
import be from '../assets/be.svg'
import globe from '../assets/globe.svg'
const Banner = () => {
  return (
    <section>
        <Container>
            <div>
                <div>
                    <div className=' flex gap-6 items-center'>
                        <hr className=' w-[65px] bg-black08 h-[0.5px] ' />
                        <h3 className=' text-[32px] font-bold leading-10  '>Hello, I'm</h3>
                    </div>
                    <div className=' relative mb-6 mt-2 '>
                        <h1 className=' z-10 relative text-[140px] font-bold leading-[110px] max-w-[463px] '>Golam Morshed</h1>
                        <img className=' absolute top-3 -left-2 size-22' src={yellow_bg} alt="" />
                    </div>
                    <p  className=' mb-[30px] text-[24px] font-bold leading-8 text-black80'>Frontend Developer</p>
                    <div className=' flex gap-4 mb-30 '>
                        <Button title="Let’s Talk"  />
                        <TransparentButton title="My Work" />
                    </div>
                    <div className=' flex gap-6 items-center '>
                        <div className=' flex gap-2 items-center '>
                           <span><h3 className='text-[44px] font-bold leading-[54px] mr-3'>0k+</h3></span>
                            <span><h3 className=' items-center font-dm text-[18px] leading-[28px] text-black80 '>Worldwide client       |</h3></span>
                        </div>
                        <div>
                            <ul className='bg-black items-center flex gap-4 '>
                                <li><img src={be} alt="Behance" /></li>
                                <li><img src={linkedin} alt="LinkedIn" /></li>
                                <li><img src={globe} alt="Website" /></li>
                                <li><img src={github} alt="GitHub" /></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default Banner