import React from 'react'

type props = {
    icon: React.ReactNode
    title: string,
    description: string,
}

export default function BenefitCard({ description, icon, title }: props) {
    return (
        <article className='flex flex-col w-full p-4 md:p-8 h-full border-b-2 border-white/20 border-l-2 shadow-[0_4px_10px_rgba(0,0,0,0.3)] rounded-xl items-center justify-start bg-linear-to-br from-[#0a0a0a] via-[#1a1a1a] to-[#0a0a0a] gap-4 transition-all duration-300 hover:border-greenaccent group'>
            
            <div className='w-fit h-fit border-2 border-gray-600 p-3 bg-white rounded-full text-black transition-transform duration-500 group-hover:rotate-360 group-hover:bg-greenaccent group-hover:text-white group-hover:border-white'>
                {icon}
            </div>

            <div className='flex flex-col gap-2'>
                <h1 className='text-xs md:text-sm lg:text-base font-montserrat text-center font-bold text-white uppercase tracking-tight'>
                    {title}
                </h1>
                <h2 className='text-[10px] md:text-xs font-montserrat text-center text-whitegray leading-snug'>
                    {description}
                </h2>
            </div>
        </article>
    )
}
