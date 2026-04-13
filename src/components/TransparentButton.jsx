import React from 'react'
import { ArrowUpRight } from 'lucide-react'
const TransparentButton = ({title}) => {
  return (
     <button className=' rounded-lg bg-transparent py-4 px-8 flex gap-2 border border-black40 items-center '>
        <h3 className=' text-[15px] leading-4 font-dm font-bold '>{title}</h3>
        <ArrowUpRight />
    </button>
  )
}

export default TransparentButton