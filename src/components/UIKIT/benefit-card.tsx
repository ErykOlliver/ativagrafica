import React from 'react'

type props = {
    icon: React.ReactNode
    title: string,
    description: string,
}

export default function BenefitCard({ description, icon, title }: props) {
    return (
        <article className='flex flex-col w-full p-2 h-full border-b-2 border-white border-l-2 shadow-[0_0_1px] shadow-white rounded-md items-center justify-center bg-linear-120 from-[#060606] via-[#2C2C2C] to-[#161616] gap-2'>
            <div className='w-fit h-fit border-2 border-gray-400 p-2 bg-white rounded-full  text-black'>
                {icon}
            </div>
            <h1 className='text-xs font-montserrat text-center font-semibold text-white'>{title}</h1>
            <h2 className='text-[10px] font-montserrat text-center text-whitegray '> {description} </h2>
        </article>
    )
}
