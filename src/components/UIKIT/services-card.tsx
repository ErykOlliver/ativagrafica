import Image from 'next/image'
import React from 'react'

type props = {
    id: number,
    img: string,
    title: string,
    sub_title: string,
    description: string
}

export default function ServiceCard({ title, sub_title, description, id, img }: props) {
    const ehPar = (id: number) => id % 2 === 0

    return (
        <article className={`
            w-full bg-darkgray border-t-2 relative overflow-hidden
            ${ehPar(id) ? 'border-r-2' : 'border-l-2'} border-white 
            min-h-40 lg:min-h-125 lg:aspect-9/16 
            flex items-center justify-center group
        `}>
            <div className='flex absolute inset-0 z-20 
                bg-linear-to-r from-darkgray via-darkgray/80 to-transparent 
                lg:bg-linear-to-t lg:from-darkgray lg:via-darkgray/40 lg:to-transparent
                py-4 pl-7 lg:p-6 flex-col items-start justify-center lg:justify-end w-full h-full transition-all'>
                
                <div className='lg:group-hover:-translate-y-2.5 transition-transform duration-300'>
                    <h1 className='font-montserrat font-semibold text-white text-xs lg:text-base leading-tight'>{title}</h1>
                    <h2 className='font-montserrat font-medium text-[10px] lg:text-xs text-whitegray mt-1'>{sub_title}</h2>
                    <h3 className='font-montserrat font-normal text-[10px] lg:text-xs text-white/50 w-2/3 lg:w-full mt-2 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity'>
                        {description}
                    </h3>
                </div>
            </div>

            <div className='absolute h-full z-10 w-[40%] right-0 top-0 lg:w-full lg:left-0'>
                <Image 
                    src={img} 
                    alt={title} 
                    className='object-cover grayscale-50% group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110' 
                    fill 
                    priority 
                />
            </div>
        </article>
    )
}
