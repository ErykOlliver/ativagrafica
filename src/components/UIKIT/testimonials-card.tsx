import React from 'react'
import { BiSolidQuoteSingleLeft, BiSolidQuoteSingleRight } from 'react-icons/bi'

type props = {
    testimonial: string,
    name: string
}

export default function TestimonialCard({ name, testimonial }: props) {
    return (
        <article className='w-full min-h-55 md:min-h-70 flex shadow-2xl flex-col border-l-2 border-t-2 border-greenaccent p-6 md:p-10 justify-between rounded-2xl bg-white relative overflow-hidden'>
            <div className='w-full h-fit flex items-center justify-start text-greenaccent/20'>
                <BiSolidQuoteSingleLeft className='size-10 md:size-12' />
            </div>
            
            <div className='relative z-10'>
                <h1 className='font-montserrat italic text-sm md:text-base lg:text-lg font-medium text-darkgray leading-relaxed text-center'>
                    {testimonial}
                </h1>
            </div>

            <div className='flex flex-col items-center mt-4 gap-1 relative z-10'>
                <div className='h-px w-12 bg-greenaccent/30 mb-2' />
                <h2 className='font-montserrat font-bold text-[10px] md:text-xs text-darkgray uppercase tracking-widest'>
                    {name}
                </h2>
            </div>
            
            <div className='absolute -bottom-4 -right-4 opacity-[0.03] text-black'>
                 <BiSolidQuoteSingleRight className='size-32' />
            </div>
        </article>
    )
}
