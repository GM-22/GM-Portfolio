import { ArrowUpRight } from 'lucide-react'
import React from 'react'

const Button = ({title}) => {
  return (
    <button className=' rounded-lg bg-black py-4 px-8 flex justify-between  text-white items-center '>
        <h3 className=' text-[15px] leading-4 font-dm font-bold '>{title}</h3>
        <ArrowUpRight />
    </button>
  )
}

export default Button