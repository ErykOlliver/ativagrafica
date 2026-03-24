import React from 'react'
import { BiSolidQuoteSingleLeft, BiSolidQuoteSingleRight } from 'react-icons/bi'

type props = {
    testimonial: string,
    name: string
}

export default function TestimonialCard({ name, testimonial }: props) {
    return (
        <article className='aspect-video flex shadow-[0_0_5px] shadow-greenaccent flex-col border-l-2 border-t-2 border-greenaccent p-4 gap-4 rounded-xl bg-white'>
            <div className='w-full h-fit flex items-center justify-start'>
                <BiSolidQuoteSingleLeft className='size-6' />
            </div>
            <h1 className='font-montserrat italic text-xs px-[0.5px] text-black'>{testimonial}</h1>
            <div className='w-full flex items-center justify-end h-fit'>
                <BiSolidQuoteSingleRight className='size-6' />
            </div>
            <h2 className='font-montserrat text-xs text-darkgray '>- {name}</h2>
        </article>
    )
}
